# Find available package names

This script utilizes the power of [`slova`](https://www.npmjs.com/package/slova) package by me & [RaydanOMGr](https://github.com/RaydanOMGr). It recursively loops through [npm API registry](https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md) to find available names.

It takes 2 input prompts in console to start: length & quantity. First stays for the package name length generation, see [slova word method](https://github.com/RaydanOMGr/slova#usage). Second means the amount of package names to be returned as available.

> **Note**: Package may be private thus it will still return as available from npm registry.

## Installation

To work with the script, clone it in any workspace you want:

```bash
$ git clone https://github.com/domin-mnd/npm-name-generator
```

In the workspace directory install the packages & then start the script:

```bash
$ npm install
$ node .
```

## Why not gist?

Github gists is not enough to provide all necessary information about the script usage.
