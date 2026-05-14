import calculate, { add, divide, multiply, subtract } from "./calc.js";

const out = document.getElementById("hw-module-out");

if (out) {
    const lines = [];

    lines.push("named add(10, 4) = " + String(add(10, 4)));
    lines.push("named subtract(10, 4) = " + String(subtract(10, 4)));
    lines.push("named multiply(3, 7) = " + String(multiply(3, 7)));
    lines.push("named divide(20, 5) = " + String(divide(20, 5)));
    lines.push(
        'default calculate("add", 2, 3) = ' + String(calculate("add", 2, 3))
    );
    lines.push(
        'default calculate("divide", 9, 3) = ' +
            String(calculate("divide", 9, 3))
    );
    out.textContent = lines.join("\n");
}
