export const setQueryMock = jest.fn();
export const removeQueryMock = jest.fn();

export const useSearchQueryParamsMock = {
  useSearchQueryParams: () => ({
    setQuery: setQueryMock,
    removeQuery: removeQueryMock,
  }),
};
