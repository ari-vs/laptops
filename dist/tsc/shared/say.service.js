"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Say = void 0;
class Say {
    alert(msg) {
        alert(msg);
    }
    console(msg) {
        console.log(msg);
    }
    printLength(msg) {
        msg += ': ' + this.getLength(msg) + ' chars';
        console.log(msg);
    }
    getLength(msg) {
        return msg.length;
    }
}
exports.Say = Say;
//# sourceMappingURL=say.service.js.map