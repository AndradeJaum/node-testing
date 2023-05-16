import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test("incresses date with and year", () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-08-10`).getFullYear()).toEqual(2024);
});
