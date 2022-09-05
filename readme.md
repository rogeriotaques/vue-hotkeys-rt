# Vue Hotkeys

<br >

<div style="box-shadow: 0 0 12px rgba(0,0,0,0.3);border-radius: 5px;">
  <img alt="Screenshot" src="https://github.com/rogeriotaques/vue-hotkeys-rt/raw/master/screenshot.png" />
</div>

<br >

## Getting started

Install the component as a dependency of your project.

```sh
$ yarn add vue-hotkeys-rt
```
or

```sh
$ npm install vue-hotkeys-rt -S
```

Import it to your Vue app.

```js
import Vue from 'vue/dist/vue.js';
import Hotkeys from 'vue-hotkeys-rt';

new Vue({
  ...
  components: { Hotkeys },
  ...
});

```

## Handling the keyboard shortcuts

Vue Hotkeys emits the `triggered` event always a shortcut is used. So, everything you need to do is define a handler that will take an action depending on the pressed keys.

Vue Hotkeys assume that a shortcut is a combination of CMD+`Key`.

E.g:

```vue
<template >
  <div >
    <hotkeys
      :shortcuts="['S', 'D']"
      :debug="true"
      @triggered="onTriggeredEventHandler"
    />
  </div>
</template>

<script lang="ts">
import Hotkeys from 'vue-hotkeys-rt';

export default {
  ...
  components: { Hotkeys },

  methods: {
    onTriggeredEventHandler(payload) {
      console.log(`You have pressed CMD (CTRL) + ${payload.keyString}`);
    }
  }
  ...
};
</script>

```

## Contributing

Do you know `Vue.js` and would like to contribute?

Great 🙌 , I'd love to have your help to improve this component. Just clone this repository and send back your contributions as `pull requests`.

Wanna chat? 🙂 Drop me a line on [Twitter](https://twitter.com/rogeriotaques).
