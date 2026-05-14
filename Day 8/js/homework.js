/**
 * Day 8 — Objects — Homework (reference solutions)
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
        "const book = {",
        '    title: "The Guide",',
        '    author: "R.K. Narayan",',
        "    year: 1958,",
        "    pages: 256,",
        "};",
        "",
        'const key = "title";',
        "console.log(book[key]);",
    ]);

    const book = {
        title: "The Guide",
        author: "R.K. Narayan",
        year: 1958,
        pages: 256,
    };
    const key = "title";

    setOut("task1Output", [String(book[key])]);

    // —— Task 2 ——

    setCode("task2Code", [
        "const book = {",
        '    title: "The Guide",',
        '    author: "R.K. Narayan",',
        "    year: 1958,",
        "    pages: 256,",
        "    summary() {",
        "        return `${this.title} by ${this.author} (${this.year})`;",
        "    },",
        "};",
        "",
        "console.log(book.summary());",
    ]);

    const book2 = {
        title: "The Guide",
        author: "R.K. Narayan",
        year: 1958,
        pages: 256,
        summary() {
            return `${this.title} by ${this.author} (${this.year})`;
        },
    };

    setOut("task2Output", [book2.summary()]);

    // —— Task 3 ——

    setCode("task3Code", [
        "const widget = { id: 7, color: \"blue\", inStock: true };",
        "",
        "Object.entries(widget).forEach(([k, v]) => {",
        "    console.log(`${k}: ${v}`);",
        "});",
    ]);

    const widget = { id: 7, color: "blue", inStock: true };
    const out3 = [];

    Object.entries(widget).forEach(([k, v]) => {
        out3.push(`${k}: ${v}`);
    });

    setOut("task3Output", out3);

    // —— Task 4 ——

    setCode("task4Code", [
        "const original = { a: 1, b: 2, nested: { x: 0 } };",
        "const copy = { ...original };",
        "",
        "copy.a = 99;",
        "copy.nested = { x: 1 };",
        "",
        "console.log(JSON.stringify(original));",
        "console.log(JSON.stringify(copy));",
    ]);

    const original = { a: 1, b: 2, nested: { x: 0 } };
    const copy = { ...original };

    copy.a = 99;
    copy.nested = { x: 1 };

    setOut("task4Output", [
        "original: " + JSON.stringify(original),
        "copy:     " + JSON.stringify(copy),
        "(note: shallow copy — replacing copy.nested does not change original.nested)",
    ]);

})();
