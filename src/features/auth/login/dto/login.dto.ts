export type LoginDto = {
  accessToken: string;
  user: {
    email: string;
    password: string;
    name: string;
  };
};
