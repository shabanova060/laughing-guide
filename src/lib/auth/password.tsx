export const hashPassword = async (password: string): Promise<string> => {
  return await Bun.password.hash(password, {
    algorithm: "argon2id",
    memoryCost: 65_536,
    timeCost: 3,
  });
};

export const verifyPasswordHash = async (
  password: string,
  passwordHash: string,
): Promise<boolean> => {
  return await Bun.password.verify(password, passwordHash);
};
