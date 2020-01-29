<!-- Vue Hotkeys -->
<template></template>

<script lang="ts">
export default {
  name: 'Hotkeys',

  data: () => ({
    supportedShortcuts: []
  }), // data

  props: {
    shortcuts: {
      type: Array as () => Array<string>,
      required: true
    },

    debug: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    /**
     * Aways the composed keys CMD (CTRL) + S are pressed together on the keyboard.
     */
    onUseKeyboardShortcuts(evt: any): void {
      const key = evt.keyCode || evt.which;
      const ctr = window.navigator.platform.match('Mac') ? evt.metaKey : evt.ctrlKey;
      const isKeySupported = this.supportedShortcuts.some(({ keyCode }) => keyCode === key);

      if (ctr /* CTRL | CMD */ && isKeySupported) {
        const { keyString } = this.supportedShortcuts.find(({ keyCode }) => keyCode === key);

        if (this.debug) {
          console.log(`CMD (CTRL) + ${keyString} (${key}) pressed`);
        }

        this.$emit('triggered', { key, keyString });

        evt.preventDefault();
      }
    } // onUseKeyboardShortcuts
  }, // methods

  /**
   * Prepare the supported shortcuts.
   */
  created() {
    if (this.shortcuts && this.shortcuts.length) {
      this.shortcuts.forEach((sc) => {
        if (sc) {
          this.supportedShortcuts.push({ keyString: sc, keyCode: sc.charCodeAt(0) });
        }
      });
    }
  }, // created

  /**
   * Overwrite the "keydown" event and enable CMD+S for saving.
   */
  mounted() {
    document.addEventListener('keydown', this.onUseKeyboardShortcuts, false);

    if (this.debug) {
      console.log('Vue Keyboard Shortcuts ENABLED');
    }
  }, // mounted

  /**
   * Disable CMD+S for saving and restore the original "keydown" event.
   */
  beforeDestroy() {
    document.removeEventListener('keydown', this.onUseKeyboardShortcuts);

    if (this.debug) {
      console.log('Vue Keyboard Shortcuts DISABLED');
    }
  }
};
</script>
