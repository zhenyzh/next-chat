import { create } from "zustand";

type TokenService = {
  token: string | null;
  set: (token: string | null) => void;
  get: () => string | null;
  clear: () => void;
};

const initialState = {
  token: null,
};

export const useTokenService = create<TokenService>()((set, get) => ({
  ...initialState,

  set: (token) => set({ token }),
  get: () => get().token,
  clear: () => set(initialState),
}));
