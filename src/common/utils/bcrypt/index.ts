import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async (plainPassword: string) => {
  const hash = await bcrypt.hash(plainPassword, saltRounds);
  return hash;
};

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string,
) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};
