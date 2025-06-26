import { Request, Response } from 'express';
import { query } from '../config/db'; // Adjust the import path as necessary

interface CounterCornParams {
  email: string;
}

export const counterCornController = async (
  req: Request<CounterCornParams>,
  res: Response
): Promise<void> => {
  const email = req.params.email;
  if (!email) {
    res.status(400).send("Email is required");
    return;
  }
  
  try {
    const result = await query('SELECT COUNT(*) FROM orders WHERE user_email=$1', [email]);
    res.status(200).send({ count: parseInt(result.rows[0].count, 10) });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}