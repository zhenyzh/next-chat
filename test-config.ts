import "@testing-library/jest-dom";

import { nextNavigationMock } from "@/tests/mock/next-navigation-mock";
import { useSearchQueryParamsMock } from "@/tests/mock/use-search-query-params-mock";

jest.mock("next/navigation", () => nextNavigationMock);
jest.mock("@/shared/hooks", () => useSearchQueryParamsMock);
