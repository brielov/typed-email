import { toErr } from "typed";

import { email } from "./typed-email";

const VALID_EMAIL = [
  "email@example.com",
  "firstname.lastname@example.com",
  "email@subdomain.example.com",
  "firstname+lastname@example.com",
  "email@123.123.123.123",
  "email@example.com",
  "1234567890@example.com",
  "email@example-one.com",
  "_______@example.com",
  "email@example.name",
  "email@example.museum",
  "email@example.co.jp",
  "firstname-lastname@example.com",
];

const INVALID_EMAIL = [
  "plainaddress",
  "#@%^%#$@#$@#.com",
  "@example.com",
  "Joe Smith <email@example.com>",
  "email.example.com",
  "email@example@example.com",
  ".email@example.com",
  "email.@example.com",
  "email..email@example.com",
  "email@example.com (Joe Smith)",
  "email@example",
  "email@example..com",
];

describe.each(VALID_EMAIL)("email(%s)", (value) => {
  test("is valid", () => {
    expect(email(value).isOk()).toEqual(true);
  });
});

describe.each(INVALID_EMAIL)("email(%s)", (value) => {
  test("is invalid", () => {
    expect(email(value).unwrapErr()).toEqual(
      toErr(`Expecting string to be a valid 'email'.`),
    );
  });
});
