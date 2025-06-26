export async function buyCorn(email: string) {
  try {
    const { status } = await fetch('/api/v1/corn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    // Handle the response status
    if (status === 200) {
      return { success: true };
    } else if (status === 429) {
      return { error: 'You can only buy corn once per minute' };
    } else {
      return { error: 'An unexpected error occurred' };
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return { error: 'An unexpected error occurred' }; 
  }
}