export const generateRandomString = (length: number): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Define the characters to choose from
  let result = ''; // Initialize the result string

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length); // Get a random index
    result += characters[randomIndex]; // Append the character at the random index to the result
  }

  return result; // Return the generated random string
};

export const normalizeString = (str: string) => {
  return str.toLowerCase().trim();
};
