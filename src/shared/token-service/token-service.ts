import { create } from "zustand";

type TokenService = {
  token: string | null;
  set: (token: string | null) => void;
  get: () => string | null;
  clear: () => void;
};

export const useTokenService = create<TokenService>()((set, get) => ({
  token: null,

  set: (token) => set({ token }),
  get: () => get().token,
  clear: () => set({ token: null }),
}));
