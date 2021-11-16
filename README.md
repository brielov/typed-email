# typed-email

A simple [typed](https://github.com/brielov/typed) add-on for checking and normalizing email addresses.

## Installation

```shell
npm install typed-email
```

## Usage

```typescript
import * as T from "typed";
import { email } from "typed-email";

const userType = T.object({
  email, // will trim, lowercase and validate email
  password: T.string,
});
```
