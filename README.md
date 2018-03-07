# Nuxt Font Awesome 5

> With Nuxt Font Awesome 5 you can easily use 

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
    ['qonfucius-nuxt-fontawesome', { componentName: 'fa-icon', packs: [] }],
  ]
}
````

## Usage
```vue
<template>
  <fa-icon pack="fab" name="font-awesome" />
  <fa-icon pack="fas" name="coffee" />
  <fa-icon pack="fas" name="cog" :spin="true" :fixed-width="false" />
  <fa-icon pack="fab" name="fort-awesome" size="4x" />
  <fa-icon pack="fas" name="spinner" :pulse="true" :fixed-width="true" />
  <fa-icon pack="fab" name="fort-awesome" :rotation="90" />
  <fa-icon pack="fab" name="internet-explorer" flip="both" />
  <ul class="fa-ul">
    <li><fa-icon pack="fas" name="check-square" :list-item="true" />List icons</li>
    <li><fa-icon pack="fas" name="check-square" :list-item="true" />can be used</li>
    <li><fa-icon pack="fas" name="square" :list-item="true" />as bullets</li>
    <li><fa-icon pack="fas" name="square" :list-item="true" />in lists</li>
  </ul>
</template>
```

## Options

### `componentName`
Default: `fa-icon`

Component name

### `packs`
Default: `[]`

Packs to configure, with the list of icons to include in the project.

#### Example

- Add `@fortawesome/fontawesome-free-brands` as dependency
- Add configuration like this in `nuxt.config.js`
```js
{
  fontAwesome: {
    packs: [
      {
        package: '@fortawesome/fontawesome-free-brands',
        icons: ['faGithub', 'faFontAwesome'],
      },
    ],
  },
}
```
- Use it in template
```vue
<template>
  <fa-icon pack="fab" name="font-awesome" />
  <fa-icon pack="fab" name="github" />
</template>
```
