"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const say_service_1 = require("./say.service");
const say = new say_service_1.Say();
test('count length', () => {
    expect(say.getLength('Wakka')).toBe(5);
    expect(say.getLength('')).toBe(0);
    expect(say.getLength(' ')).toBe(1);
    expect(say.getLength('123')).toBe(3);
    expect(say.getLength('one two 3')).toBe(9);
});
//# sourceMappingURL=say.test.js.map