# Nuxt Font Awesome 5

> With Nuxt Font Awesome 5 you can easily use 

## Should I use this module in production ?

Probably not. We don't have any unit test, and this module has not reached the 1.x.x maturity.

## Setup
- Add `qonfucius-nuxt-fontawesome` dependency using yarn or npm to your project
- Add `qonfucius-nuxt-fontawesome` to `modules` section of `nuxt.config.js`
- Add some fontawesome 5 packs as dependency using yarn or npm to your project
- Configure theses packs in configuration (please see `packs` option).
```js
{
  modules: [
    // Simple usage
    'qonfucius-nuxt-fontawesome',
    
    // With options
    ['qonfucius-nuxt-fontawesome', { componentName: 'fa-icon', packs: [], includeCss: true }],
  ]
}
````

## Usage
```vue
<template>
  <fa-icon :icon="['fab', 'font-awesome']" />
  <fa-icon :icon="['fas', 'coffee']" />
  <fa-icon :icon="['fas', 'cog']" :spin="true" :fixed-width="false" />
  <fa-icon :icon="['fab', 'fort-awesome']" size="4x" />
  <fa-icon :icon="['fas', 'spinner']" :pulse="true" :fixed-width="true" />
  <fa-icon :icon="['fab', 'fort-awesome']" :rotation="90" />
  <fa-icon :icon="['fab', 'internet-explorer']" flip="both" />
  <ul class="fa-ul">
    <li><fa-icon :icon="['fas', 'check-square']" :list-item="true" />List icons</li>
    <li><fa-icon :icon="['fas', 'check-square']" :list-item="true" />can be used</li>
    <li><fa-icon :icon="['fas', 'square']" :list-item="true" />as bullets</li>
    <li><fa-icon :icon="['fas', 'square']" :list-item="true" />in lists</li>
  </ul>
</template>
```

## Options

### `componentName`
Default: `fa-icon`

Component name

### `includeCss`
Default: `true`

If you are already including fontawesome css somewhere in your code (sass ?), please pass false !

### `packs`
Default: `[]`

Packs to configure, with the list of icons to include in the project.

#### Example

- Add `@fortawesome/free-brands-svg-icons` as dependency
- Add configuration like this in `nuxt.config.js`
```js
{
  fontAwesome: {
    packs: [
      {
        package: '@fortawesome/free-brands-svg-icons',
        icons: ['faGithub', 'faFontAwesome'],
      },
    ],
  },
}
```
- Use it in template
```vue
<template>
  <fa-icon :icon="['fab', 'font-awesome']" />
  <fa-icon :icon="['fab', 'github']" />
</template>
```

## Contributors

Thank you to all our [contributors](https://github.com/Qonfucius/nuxt-fontawesome/graphs/contributors)!
