import { Request, Response } from 'express';
import { query } from '../config/db'; // Adjust the import path as necessary

interface BuyCornRequestBody {
  email: string;
}

const BUY_CORN_TIMEOUT = 60000; // 1 minute

export const buyCornController = async (
  req: Request<unknown, unknown, BuyCornRequestBody>,
  res: Response
): Promise<void> => {
  const { body: { email } } = req;
  if (!email) {
    res.status(400).send("Email is required");
    return;
  }
  const { rows } = await query('SELECT email, last_purchase_at FROM users WHERE email=$1', [email]);
  let userLastPurchase = 0;
  if (rows.length === 0) {
    try {
      const result = await query('INSERT INTO users (email) VALUES ($1)', [email]);
    } catch (error) {
      res.status(500).send("Internal server error");
      return;
    }
  } else {
    userLastPurchase = rows[0].last_purchase_at || 0;
  }

  const currentTimestamp = Date.now();
  if (userLastPurchase > 0 && currentTimestamp - userLastPurchase < BUY_CORN_TIMEOUT) {
    res.status(429).send("You can only buy corn once per minute");
    return;
  }

  try {
    await query('INSERT INTO orders (user_email) VALUES ($1)', [email]);
    await query('UPDATE users SET last_purchase_at = $1 WHERE email=$2', [currentTimestamp, email]);
  } catch (error) {
    res.status(500).send("Internal server error");
    return;
  }
  
  res.status(200).send("Corn purchase processed successfully");
}