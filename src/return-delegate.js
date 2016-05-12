export class ReturnTriggerCustomAttribute {
    static inject = [Element];

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
}