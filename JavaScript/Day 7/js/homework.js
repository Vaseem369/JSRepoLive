/**
 * Day 7 — Arrays — Homework (reference solutions)
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
        'const names = ["Priya", "Aarav", "Riya"];',
        "",
        'const greetings = names.map((n) => "Hello, " + n);',
        "console.log(greetings);",
    ]);

    const names = ["Priya", "Aarav", "Riya"];
    const greetings = names.map((n) => "Hello, " + n);

    setOut("task1Output", [JSON.stringify(greetings)]);

    // —— Task 2 ——

    setCode("task2Code", [
        "const nums = [11, 4, 7, 18, 3, 22];",
        "",
        "const sumEvens = nums",
        "    .filter((n) => n % 2 === 0)",
        "    .reduce((acc, n) => acc + n, 0);",
        "console.log(sumEvens);",
    ]);

    const nums = [11, 4, 7, 18, 3, 22];
    const sumEvens = nums
        .filter((n) => n % 2 === 0)
        .reduce((acc, n) => acc + n, 0);

    setOut("task2Output", [
        "evens: " + JSON.stringify(nums.filter((n) => n % 2 === 0)),
        "sum: " + String(sumEvens),
    ]);

    // —— Task 3 ——

    setCode("task3Code", [
        "const arr = [3, 1, 4, 1, 5, 9, 2, 6];",
        "",
        "const maxSpread = Math.max(...arr);",
        "console.log(maxSpread);",
        "",
        "const maxReduce = arr.reduce((acc, n) => (n > acc ? n : acc));",
        "console.log(maxReduce);",
    ]);

    const arr = [3, 1, 4, 1, 5, 9, 2, 6];
    const maxSpread = Math.max(...arr);
    const maxReduce = arr.reduce((acc, n) => (n > acc ? n : acc));

    setOut("task3Output", [
        "Math.max(...arr): " + String(maxSpread),
        "reduce max: " + String(maxReduce),
    ]);

    // —— Task 4 ——

    setCode("task4Code", [
        "// Empty array → 0 (see comment in function).",
        "function average(values) {",
        "    if (values.length === 0) {",
        "        return 0;",
        "    }",
        "    const sum = values.reduce((acc, n) => acc + n, 0);",
        "    return sum / values.length;",
        "}",
        "",
        "console.log(average([2, 4, 6]));",
        "console.log(average([10]));",
        "console.log(average([]));",
    ]);

    function average(values) {
        if (values.length === 0) {
            return 0;
        }
        const sum = values.reduce((acc, n) => acc + n, 0);

        return sum / values.length;
    }

    setOut("task4Output", [
        "average([2, 4, 6]): " + String(average([2, 4, 6])),
        "average([10]): " + String(average([10])),
        "average([]): " + String(average([])),
    ]);

})();
