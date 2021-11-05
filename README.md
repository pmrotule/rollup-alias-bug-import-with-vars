# rollul-alias-bug-import-with-vars

This is a reproduction repository to show that [`@rollup/plugin-alias`](https://www.npmjs.com/package/@rollup/plugin-alias) does not resolve aliases inside dynamic imports when they include variables.

```js
// The following works
import(`@/files/a.js`)

// The following does not work
import(`@/files/${letter}.js`)
```

I understand [`@rollup/plugin-dynamic-import-vars`](https://www.npmjs.com/package/@rollup/plugin-dynamic-import-vars) needs to be used in order to include the possible files to import in the bundle, but it only accepts relative paths. If `@rollup/plugin-alias` would resolve the alias as expected, it would generate a relative path ready to be processed by `@rollup/plugin-dynamic-import-vars`.

## Steps to reproduce

- `npm install`
- `npm run build`
- Open _dist/input.js_ and notice the alias `@` that has been resolved in the hardcoded import, but not in the dynamic import that includes a variable.
