# CodeCombat Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/codecombat)](https://www.npmjs.com/package/@fern-api/codecombat)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The CodeCombat Node.js library provides access to the CodeCombat API from JavaScript/TypeScript.

## Documentation

API documentation is available at https://codecombat.com/api-docs.

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-zrfb4p?file=app.ts)

```typescript
import { CodeCombatApiClient } from '@fern-api/code-combat';

const client = new CodeCombatApiClient({
  credentials: {
    username: 'MY_USERNAME',
    password: 'MY_PASSWORD',
  },
});

const response = await client.users.setAceConfig('document_id', {
  liveCompletion: true,
  language: 'python',
});

console.log('Received response from Code Combat', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-codecombat/codecombat-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
