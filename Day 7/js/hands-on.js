/**
 * Day 7 — Arrays — Hands-on
 */

(function () {

    function setCode(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    function setOut(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    // —— Task 1 — Cart ——

    setCode("task1Code", [
        'const cart = ["bread", "milk", "eggs"];',
        "",
        'cart.push("butter");',
        'cart.unshift("rice");',
        "console.log(cart);",
        "",
        "const removed = cart.pop();",
        'console.log("removed:", removed);',
        "console.log(cart);",
        "",
        "cart.splice(1, 1);",
        "console.log(cart);",
    ]);

    const cart = ["bread", "milk", "eggs"];

    cart.push("butter");
    cart.unshift("rice");
    const out1 = [];

    out1.push("after push + unshift: " + JSON.stringify(cart));
    const removed = cart.pop();

    out1.push("pop() removed: " + JSON.stringify(removed));
    out1.push("after pop: " + JSON.stringify(cart));
    cart.splice(1, 1);
    out1.push("after splice(1, 1): " + JSON.stringify(cart));

    setOut("task1Output", out1);

    // —— Task 2 — Scores ——

    setCode("task2Code", [
        "const scores = [88, 42, 75, 60, 91, 39, 55, 70];",
        "",
        "const passing = scores.filter((s) => s >= 60);",
        "console.log(passing);",
        "",
        "const firstFail = scores.find((s) => s < 60);",
        "console.log(firstFail);",
        "",
        "console.log(scores.every((s) => s >= 60));",
        "",
        "console.log(scores.some((s) => s > 90));",
    ]);

    const scores = [88, 42, 75, 60, 91, 39, 55, 70];
    const passing = scores.filter((s) => s >= 60);
    const firstFail = scores.find((s) => s < 60);

    setOut("task2Output", [
        "passing (>= 60): " + JSON.stringify(passing),
        "first failing score: " + String(firstFail),
        "every passing: " + String(scores.every((s) => s >= 60)),
        "some > 90: " + String(scores.some((s) => s > 90)),
    ]);

    // —— Task 3 — GST ——

    setCode("task3Code", [
        "const prices = [100, 250, 500, 1200, 80];",
        "",
        "const withGst = prices.map((p) => p * 1.18);",
        "console.log(prices);",
        "console.log(withGst);",
        "",
        "// Bonus: strings from toFixed(2)",
        "const rounded = prices.map((p) => (p * 1.18).toFixed(2));",
        "console.log(rounded);",
    ]);

    const prices = [100, 250, 500, 1200, 80];
    const withGst = prices.map((p) => p * 1.18);
    const rounded = prices.map((p) => (p * 1.18).toFixed(2));

    setOut("task3Output", [
        "original (unchanged): " + JSON.stringify(prices),
        "with 18% GST: " + JSON.stringify(withGst),
        "bonus toFixed(2): " + JSON.stringify(rounded),
    ]);

    // —— Task 4 — Expenses ——

    setCode("task4Code", [
        "const expenses = [250, 800, 120, 50, 1500, 75];",
        "",
        "const total = expenses.reduce((acc, n) => acc + n, 0);",
        "console.log(total);",
        "",
        "const max = expenses.reduce((acc, n) => (n > acc ? n : acc));",
        "console.log(max);",
        "",
        "const bigSum = expenses",
        "    .filter((n) => n > 100)",
        "    .reduce((acc, n) => acc + n, 0);",
        "console.log(bigSum);",
    ]);

    const expenses = [250, 800, 120, 50, 1500, 75];
    const total = expenses.reduce((acc, n) => acc + n, 0);
    const max = expenses.reduce((acc, n) => (n > acc ? n : acc));
    const bigSum = expenses
        .filter((n) => n > 100)
        .reduce((acc, n) => acc + n, 0);

    setOut("task4Output", [
        "total: " + String(total),
        "max: " + String(max),
        "sum of expenses > 100: " + String(bigSum),
    ]);

})();
