# strtobool

![CI](https://github.com/gkuga/strtobool/actions/workflows/test.yml/badge.svg)

A tiny utility function to convert a string representation of truthy or falsy values to a boolean. Inspired by Python's `distutils.util.strtobool`.

## Installation

```bash
npm install strtobool
```

or

```bash
yarn add strtobool
```

## Usage

```ts
import { strToBool } from 'strtobool';

strToBool('yes'); // true
strToBool('no'); // false
strToBool('1'); // true
strToBool('off'); // false
```

## Supported Values

The following string values (case-insensitive, with optional surrounding whitespace) are supported:

- **Truthy**: `'y'`, `'yes'`, `'t'`, `'true'`, `'on'`, `'1'`
- **Falsy**: `'n'`, `'no'`, `'f'`, `'false'`, `'off'`, `'0'`

Any other value will throw an error:

```ts
strToBool('maybe'); // throws "Invalid truth value: maybe"
```

## Why?

Sometimes you get string input (from CLI, env vars, config files, etc.) and want to safely interpret it as a boolean. This utility makes that easy and predictable.

## License

MIT
