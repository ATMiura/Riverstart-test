export default class MenuToggler {
    selector = '.js-menu-toggler'

    constructor() {
        this.init()
    }

    init() {
        const burger = document.querySelector(this.selector)
        const body = document.querySelector('body')

        burger.addEventListener('click', () => {
            body.classList.toggle('menu-open')
        })
    }
}
