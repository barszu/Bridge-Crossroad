export const userSchema = {
  emailSchema: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  loginSchema: {
    minLength: 3,
    maxLength: 16,
    regex: /^[a-zA-Z0-9_-]+$/,
  },
  password: {
    minLength: 6,
    maxLength: 16,
  },
};
