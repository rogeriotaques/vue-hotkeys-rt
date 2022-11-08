import Vue from 'vue/dist/vue.js';


new Vue({
    el: "#contributors-section",
    data: {
        contributors: {}
    },
    methods: {
        getContributors() {
            fetch('https://api.github.com/repos/rogeriotaques/vue-hotkeys-rt/contributors')
                .then(response => response.json())
                .then(data => this.contributors = data)
        }
    },
    beforeMount() {
        this.getContributors()
    },
})