import { Err, Ok } from "rsts";
import { map, string, toErr } from "typed";

/**
 * RFC822 compliant email address
 * @see https://gist.github.com/cferdinandi/d04aad4ce064b8da3edf21e26f8944c4
 */
const EMAIL_REGEX =
  /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;

/**
 * Check that the given value is a valid email address.
 * @note This trims and lowercases the value before checking.
 */
export const email = map(string, (value) => {
  value = value.trim().toLowerCase();
  return value.length <= 320 && EMAIL_REGEX.test(value)
    ? Ok(value)
    : Err(toErr(`Expecting string to be a valid 'email'.`));
});
