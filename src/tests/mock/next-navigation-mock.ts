export const pushMock = jest.fn();
export const replaceMock = jest.fn();
export const refreshMock = jest.fn();

export const nextNavigationMock = {
  useRouter: () => ({
    push: pushMock,
    replace: replaceMock,
    refresh: refreshMock,
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "/",
};
