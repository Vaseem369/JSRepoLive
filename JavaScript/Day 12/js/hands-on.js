/**
 * Day 12 — Error Handling & Module Basics — Hands-on
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
        "function safeParse(str) {",
        "    try {",
        "        return JSON.parse(str);",
        "    } catch (err) {",
        '        console.log("Invalid JSON:", err.message);',
        "",
        "        return null;",
        "    }",
        "}",
    ]);

    function safeParse(str) {
        try {
            return JSON.parse(str);
        } catch (err) {
            console.log("Invalid JSON:", err.message);

            return null;
        }
    }

    const valid = '{"name":"Priya"}';
    const broken = '{"name":"Priya"';

    const out1 = [];

    out1.push("safeParse(valid) → " + JSON.stringify(safeParse(valid)));
    out1.push("safeParse(broken) → " + String(safeParse(broken)));

    setOut("task1Output", out1);

    // —— Task 2 ——

    setCode("task2Code", [
        "function setAge(age) {",
        '    if (typeof age !== "number") {',
        '        throw new Error("Age must be a number");',
        "    }",
        "",
        "    if (age < 0 || age > 120) {",
        '        throw new Error("Age must be 0–120");',
        "    }",
        "",
        "    return age;",
        "}",
    ]);

    function setAge(age) {
        if (typeof age !== "number") {
            throw new Error("Age must be a number");
        }

        if (age < 0 || age > 120) {
            throw new Error("Age must be 0–120");
        }

        return age;
    }

    const out2 = [];

    try {
        out2.push("setAge(25) → " + String(setAge(25)));
    } catch (e) {
        out2.push(String(e));
    }
    try {
        setAge("twenty");
    } catch (e) {
        out2.push('setAge("twenty") → ' + e.message);
    }
    try {
        setAge(200);
    } catch (e) {
        out2.push("setAge(200) → " + e.message);
    }

    setOut("task2Output", out2);

    // —— Task 3 ——

    setCode("task3Code", [
        "class ValidationError extends Error {",
        "    constructor(message) {",
        "        super(message);",
        '        this.name = "ValidationError";',
        "    }",
        "}",
        "",
        "function validateEmail(email) {",
        '    if (!email.includes("@")) {',
        '        throw new ValidationError("Email must contain @");',
        "    }",
        "}",
    ]);

    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError";
        }
    }

    function validateEmail(email) {
        if (!email.includes("@")) {
            throw new ValidationError("Email must contain @");
        }
    }

    const out3 = [];

    try {
        validateEmail("priya@example.com");
        out3.push("priya@example.com → ok");
    } catch (e) {
        out3.push(String(e));
    }
    try {
        validateEmail("priya-no-at");
    } catch (e) {
        out3.push(
            "priya-no-at → " +
                e.name +
                ": " +
                e.message +
                " | instanceof ValidationError → " +
                String(e instanceof ValidationError)
        );
    }

    setOut("task3Output", out3);

    // —— Task 4 — file paths (module runs separately) ——

    setCode("task4Code", [
        "// js/modules-handson/mathUtils.js",
        "export const PI = Math.PI;",
        "export function add(a, b) { ... }",
        "export function multiply(a, b) { ... }",
        "export default function formatPrice(n) { return `₹${n}`; }",
        "",
        "// js/modules-handson/app.js",
        'import formatPrice, { PI, add, multiply } from "./mathUtils.js";',
        "// → writes lines into #hands-on-module-out",
        "",
        "// hands-on.html (before nav-lock.js):",
        '<script type="module" src="../js/modules-handson/app.js"></script>',
    ]);

})();
