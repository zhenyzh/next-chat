import type { User } from "@/entities/user/model/types";

export type LoginDto = {
  accessToken: string;
  user: User;
};
