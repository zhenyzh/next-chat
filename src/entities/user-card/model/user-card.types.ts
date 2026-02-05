export type UserCardDto = {
  id: string;
  user: User;
  isOnline?: boolean;
  status?: "online" | "offline" | "away";
  message?: {
    text: string;
    isReader: boolean;
    date: string;
    type: string;
  };
};

export type User = {
  id: string;
  lastName: string;
  firstName: string;
  middleName?: string;
  email?: string;
  avatarUrl?: string;
};
