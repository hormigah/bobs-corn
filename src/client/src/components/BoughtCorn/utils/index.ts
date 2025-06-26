export const getBuyCornCounter = async (email?: string): Promise<number> => {
  let count = 0;

  if (email) {
    try {
      const response = await fetch(`/api/v1/corn/${email}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const { count: countRsponse } = await response.json();
      count = parseInt(countRsponse, 10) || 0; 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return count;
};