import Vue from 'vue/dist/vue.js';
import Hotkeys from '../Hotkeys.vue';

new Vue({
  el: '#app',
  components: { Hotkeys },
  template:
    '\
      <div >\
        <hotkeys \
          :shortcuts="[\'S\', \'D\']" \
          :debug="true" \
          @triggered="onTriggeredEventHandler" \
        />\
      </div>\
    ',
  methods: {
    onTriggeredEventHandler(payload) {
      document.querySelector('#log').innerHTML = `You have pressed <strong>CMD (CTRL) + ${payload.keyString}</strong> 🤘`;
    } // onTriggeredEventHandler
  }
});

// @ts-ignore
if (module.hot) module.hot.accept();
