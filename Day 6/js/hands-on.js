/**
 * Day 6 — Functions — Hands-on
 */

(function () {

    // =========================
    // Task 1 — Rectangle area
    // =========================

    const task1Code = [];

    task1Code.push("function area(length, width) {");
    task1Code.push("    return length * width;");
    task1Code.push("}");
    task1Code.push("console.log(area(2, 3));");
    task1Code.push("console.log(area(4, 5));");
    task1Code.push("console.log(area(1, 10));");
    task1Code.push("");
    task1Code.push("// Bonus — arrow with implicit return");
    task1Code.push("const areaArrow = (length, width) => length * width;");

    document.getElementById("task1Code").textContent =
        task1Code.join("\n");

    const area = (length, width) => length * width;

    document.getElementById("task1Output").textContent =
        [
            `area(2, 3) → ${area(2, 3)}`,
            `area(4, 5) → ${area(4, 5)}`,
            `area(1, 10) → ${area(1, 10)}`,
            "",
            "Bonus: const areaArrow = (l, w) => l * w;",
        ].join("\n");


    // =========================
    // Task 2 — Greeting with default
    // =========================

    const task2Code = [];

    task2Code.push('function greet(name = "Guest") {');
    task2Code.push('    return "Hello, " + name + "!";');
    task2Code.push("}");
    task2Code.push('console.log(greet("Priya"));');
    task2Code.push('console.log(greet("Aarav"));');
    task2Code.push("console.log(greet());");
    task2Code.push("console.log(greet(null));");

    document.getElementById("task2Code").textContent =
        task2Code.join("\n");

    const greet = (name = "Guest") => "Hello, " + name + "!";

    document.getElementById("task2Output").textContent =
        [
            `greet("Priya") → ${greet("Priya")}`,
            `greet("Aarav") → ${greet("Aarav")}`,
            `greet() → ${greet()}`,
            `greet(null) → ${greet(null)}`,
            "",
            "Bonus: null is not undefined — the default is skipped;",
            'so you get "Hello, " + null → "Hello, null!".',
        ].join("\n");


    // =========================
    // Task 3 — Celsius to Fahrenheit
    // =========================

    const task3Code = [];

    task3Code.push("const cToF = (c) => c * 9 / 5 + 32;");
    task3Code.push("console.log(cToF(0));");
    task3Code.push("console.log(cToF(100));");
    task3Code.push("console.log(cToF(37));");
    task3Code.push("console.log(cToF(45));");

    document.getElementById("task3Code").textContent =
        task3Code.join("\n");

    const cToF = (c) => c * 9 / 5 + 32;

    document.getElementById("task3Output").textContent =
        [
            `cToF(0) → ${cToF(0)}`,
            `cToF(100) → ${cToF(100)}`,
            `cToF(37) → ${cToF(37)}`,
            `cToF(45) → ${cToF(45)}`,
        ].join("\n");


    // =========================
    // Bonus — Pure vs impure
    // =========================

    const task4Code = [];

    task4Code.push("const double = (n) => n * 2;");
    task4Code.push("");
    task4Code.push("let total = 0;");
    task4Code.push("const addToTotal = (n) => {");
    task4Code.push("    total += n;");
    task4Code.push("    return total;");
    task4Code.push("};");

    document.getElementById("task4Code").textContent =
        task4Code.join("\n");

    const double = (n) => n * 2;

    let total = 0;

    const addToTotal = (n) => {
        total += n;

        return total;
    };

    total = 0;

    document.getElementById("task4Output").textContent =
        [
            "double (pure):",
            `  double(1) → ${double(1)}`,
            `  double(2) → ${double(2)}`,
            `  double(3) → ${double(3)}`,
            "",
            "addToTotal (impure, total reset to 0 before demo):",
            `  addToTotal(5) → ${addToTotal(5)}`,
            `  addToTotal(2) → ${addToTotal(2)}`,
            `  addToTotal(10) → ${addToTotal(10)}`,
            "",
            "Comment: double is easier to reason about — same input always",
            "same output, no hidden state. addToTotal depends on history.",
        ].join("\n");

})();
