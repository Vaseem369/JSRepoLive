/**
 * Day 12 — Error Handling & Module Basics — Homework
 */

(function () {

    function setCode(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    function setOut(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    // —— Task 1 ——

    setCode("task1Code", [
        "function safeDivide(a, b) {",
        "    if (b === 0) {",
        '        throw new Error("Cannot divide by zero");',
        "    }",
        "",
        "    return a / b;",
        "}",
    ]);

    function safeDivide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        return a / b;
    }

    const out1 = [];

    try {
        out1.push("safeDivide(10, 2) → " + String(safeDivide(10, 2)));
    } catch (e) {
        out1.push(e.message);
    }
    try {
        safeDivide(1, 0);
    } catch (e) {
        out1.push("safeDivide(1, 0) → caught: " + e.message);
    }
    try {
        out1.push("safeDivide(9, 3) → " + String(safeDivide(9, 3)));
    } catch (e) {
        out1.push(e.message);
    }

    setOut("task1Output", out1);

    // —— Task 2 ——

    setCode("task2Code", [
        "class NotFoundError extends Error {",
        "    constructor(message) {",
        "        super(message);",
        '        this.name = "NotFoundError";',
        "    }",
        "}",
        "",
        "function getUserById(id) {",
        "    if (![1, 2, 3].includes(id)) {",
        '        throw new NotFoundError("User " + id + " not found");',
        "    }",
        "",
        '    return { id, name: "User " + id };',
        "}",
    ]);

    class NotFoundError extends Error {
        constructor(message) {
            super(message);
            this.name = "NotFoundError";
        }
    }

    function getUserById(id) {
        if (![1, 2, 3].includes(id)) {
            throw new NotFoundError("User " + id + " not found");
        }

        return { id, name: "User " + id };
    }

    const out2 = [];

    try {
        out2.push(JSON.stringify(getUserById(2)));
    } catch (e) {
        out2.push(e.message);
    }
    try {
        getUserById(99);
    } catch (e) {
        if (e instanceof NotFoundError) {
            out2.push("getUserById(99) → NotFoundError: " + e.message);
        } else {
            out2.push(String(e));
        }
    }

    setOut("task2Output", out2);

    // —— Task 3 & 4 — module files (see live #hw-module-out) ——

    setCode("task3Code", [
        "// js/modules-homework/calc.js",
        "export function add(a, b) { ... }",
        "export function subtract(a, b) { ... }",
        "export function multiply(a, b) { ... }",
        "export function divide(a, b) { ... }",
        "",
        "// js/modules-homework/app.js",
        'import { add, subtract, multiply, divide } from "./calc.js";',
        "// use each named export…",
    ]);

    setCode("task4Code", [
        "// add to calc.js:",
        'export default function calculate(op, a, b) { /* switch(op) */ }',
        "",
        "// app.js:",
        'import calculate, { add, subtract, multiply, divide } from "./calc.js";',
        "",
        "// homework.html:",
        '<script type="module" src="../js/modules-homework/app.js"></script>',
    ]);

    setOut("task3Output", [
        "Named exports demo → see \"Live module output\" below (filled by app.js).",
    ]);

    setOut("task4Output", [
        "Default calculate() demo → same block (app.js runs after this script).",
    ]);

})();
