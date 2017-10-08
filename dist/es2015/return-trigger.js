var _class, _temp;

export let ReturnTriggerCustomAttribute = (_temp = _class = class ReturnTriggerCustomAttribute {

    constructor(element) {
        this.element = element;
    }

    attached() {
        this.element.addEventListener('keyup', e => {
            if (e.which == 13) {
                var event = new CustomEvent('return', { bubbles: true });

                this.element.dispatchEvent(event);
            }
        });
    }
}, _class.inject = [Element], _temp);