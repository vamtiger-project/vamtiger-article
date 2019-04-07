"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1({ element }) {
    const { parentElement: parent } = element;
    if (parent) {
        parent.removeChild(element);
    }
}
exports.default = default_1;
//# sourceMappingURL=handle-close.js.map