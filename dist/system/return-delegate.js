'use strict';

System.register([], function (_export, _context) {
    var _class, _temp, ReturnTriggerCustomAttribute;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('ReturnTriggerCustomAttribute', ReturnTriggerCustomAttribute = (_temp = _class = function () {
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
            }(), _class.inject = [Element], _temp));

            _export('ReturnTriggerCustomAttribute', ReturnTriggerCustomAttribute);
        }
    };
});