describe('my app1', () => {
    let vm
    beforeEach(() => {
        vm = new Vue({
        template: `
            <div>
            <p>{{greetings}}</p>
            <button @click="toItalian">
                Translate to Italian
            </button>
            </div>
     `,
    data: {
        greetings: 'Hello World!'
    },
    methods: {
        toItalian () {
            this.greetings = 'Ciao Mondo!'
        }
    }
}).$mount();
});

it(`should greet in Italian after toItalian is called`, () => {
    vm.toItalian();
    console.log('a',expect(vm.$el.querySelector('p').innerHTML).toContain('Ciao Mondo'))
    expect(vm.greetings).toContain('Ciao Mondo')
})
})