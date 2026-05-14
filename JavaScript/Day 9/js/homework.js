/**
 * Day 9 — ES6+ Essentials — Homework (reference solutions)
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
        "const person = {",
        '    first: "Priya",',
        '    last: "Sharma",',
        '    city: "Jaipur",',
        "};",
        "",
        "const intro = `${person.first} ${person.last} from ${person.city}`;",
        "console.log(intro);",
    ]);

    const person = {
        first: "Priya",
        last: "Sharma",
        city: "Jaipur",
    };
    const intro = `${person.first} ${person.last} from ${person.city}`;

    setOut("task1Output", [intro]);

    // —— Task 2 ——

    setCode("task2Code", [
        "const arr = [1, 2, 3, 4, 5, 6];",
        "const [head, ...tail] = arr;",
        "console.log(head);",
        "console.log(tail);",
    ]);

    const arr = [1, 2, 3, 4, 5, 6];
    const [head, ...tail] = arr;

    setOut("task2Output", [
        "head → " + String(head),
        "tail → " + JSON.stringify(tail),
    ]);

    // —— Task 3 ——

    setCode("task3Code", [
        "function multiply(...nums) {",
        "    if (nums.length === 0) {",
        "        return 1;",
        "    }",
        "",
        "    return nums.reduce((acc, n) => acc * n, 1);",
        "}",
        "",
        "console.log(multiply(2, 3, 4));",
        "console.log(multiply(5));",
        "console.log(multiply());",
    ]);

    function multiply(...nums) {
        if (nums.length === 0) {
            return 1;
        }

        return nums.reduce((acc, n) => acc * n, 1);
    }

    setOut("task3Output", [
        "multiply(2, 3, 4) → " + String(multiply(2, 3, 4)),
        "multiply(5) → " + String(multiply(5)),
        "multiply() → " + String(multiply()),
    ]);

    // —— Task 4 ——

    setCode("task4Code", [
        "const original = { id: 1, label: \"draft\", count: 3 };",
        'const updated = { ...original, label: "published" };',
        "",
        "console.log(JSON.stringify(original));",
        "console.log(JSON.stringify(updated));",
    ]);

    const original = { id: 1, label: "draft", count: 3 };
    const updated = { ...original, label: "published" };

    setOut("task4Output", [
        "original: " + JSON.stringify(original),
        "updated:  " + JSON.stringify(updated),
    ]);

})();
