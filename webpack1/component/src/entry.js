import Vue from 'vue'
import Shaker from './shaker.vue'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: `
<div>
This is a <Shaker>test</Shaker>
</div>
`,
components: { Shaker }
})
