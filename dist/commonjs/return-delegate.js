'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReturnTriggerCustomAttribute = exports.ReturnTriggerCustomAttribute = (_temp = _class = function () {
    function ReturnTriggerCustomAttribute(element) {
        _classCallCheck(this, ReturnTriggerCustomAttribute);

        this.element = element;
    }

    ReturnTriggerCustomAttribute.prototype.attached = function attached() {
        var _this = this;

        this.element.addEventListener('keyup', function (e) {
            if (e.which == 13) {
                var event = new CustomEvent('return', { bubbles: true });

                _this.element.dispatchEvent(event);
            }
        });
    };

    return ReturnTriggerCustomAttribute;
}(), _class.inject = [Element], _temp);