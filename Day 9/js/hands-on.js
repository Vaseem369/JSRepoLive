/**
 * Day 9 — ES6+ Essentials — Hands-on
 */

(function () {

    function setCode(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    function setOut(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    // —— Task 1 — template literals ——

    setCode("task1Code", [
        'const item = "Laptop";',
        "const price = 60000;",
        "const tax = 0.18;",
        "",
        "const line = `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + price * tax}.`;",
        "console.log(line);",
        "",
        "const multiline = `The ${item}",
        "Base:        ₹${price}",
        "GST (${tax * 100}%): ₹${price * tax}",
        "Total:       ₹${price + price * tax}`;",
        "console.log(multiline);",
    ]);

    const item = "Laptop";
    const price = 60000;
    const tax = 0.18;
    const line =
        `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + price * tax}.`;
    const multiline = `The ${item}
Base:        ₹${price}
GST (${tax * 100}%): ₹${price * tax}
Total:       ₹${price + price * tax}`;

    setOut("task1Output", ["one line:", line, "", "multiline:", multiline]);

    // —— Task 2 — destructuring ——

    setCode("task2Code", [
        "const scores = [88, 75, 92, 60, 45];",
        "const [top, second, ...others] = scores;",
        "",
        "const user = {",
        '    name: "Anaya",',
        "    age: 21,",
        "    address: { city: \"Jaipur\", pincode: \"302001\" },",
        "};",
        "",
        "const {",
        "    name,",
        "    age: userAge,",
        "    address: { city },",
        "} = user;",
        "",
        "console.log({ top, second, others, name, userAge, city });",
    ]);

    const scores = [88, 75, 92, 60, 45];
    const [top, second, ...others] = scores;
    const user = {
        name: "Anaya",
        age: 21,
        address: { city: "Jaipur", pincode: "302001" },
    };
    const {
        name,
        age: userAge,
        address: { city },
    } = user;

    setOut("task2Output", [
        JSON.stringify({ top, second, others, name, userAge, city }),
    ]);

    // —— Task 3 — rest ——

    setCode("task3Code", [
        "function sumAll(...numbers) {",
        "    return numbers.reduce((a, n) => a + n, 0);",
        "}",
        "",
        "function joinNames(separator, ...names) {",
        "    return names.join(separator);",
        "}",
        "",
        "console.log(sumAll(1, 2, 3));",
        "console.log(sumAll(10, 20, 30, 40));",
        "console.log(sumAll());",
        "",
        'console.log(joinNames(", ", "Priya", "Aarav", "Riya"));',
    ]);

    function sumAll(...numbers) {
        return numbers.reduce((a, n) => a + n, 0);
    }

    function joinNames(separator, ...names) {
        return names.join(separator);
    }

    setOut("task3Output", [
        "sumAll(1, 2, 3) → " + String(sumAll(1, 2, 3)),
        "sumAll(10, 20, 30, 40) → " + String(sumAll(10, 20, 30, 40)),
        "sumAll() → " + String(sumAll()),
        'joinNames(", ", ...) → ' +
            JSON.stringify(joinNames(", ", "Priya", "Aarav", "Riya")),
    ]);

    // —— Task 4 — spread merge ——

    setCode("task4Code", [
        "const defaults = { theme: \"light\", lang: \"en\", notifications: true };",
        "const userPrefs = { theme: \"dark\", fontSize: 16 };",
        "",
        "const merged = { ...defaults, ...userPrefs };",
        "console.log(merged);",
        "",
        "function applyPrefs(defaultsObj, prefs) {",
        "    return { ...defaultsObj, ...prefs };",
        "}",
        "",
        "console.log(applyPrefs(defaults, { lang: \"hi\" }));",
    ]);

    const defaults = {
        theme: "light",
        lang: "en",
        notifications: true,
    };
    const userPrefs = { theme: "dark", fontSize: 16 };
    const merged = { ...defaults, ...userPrefs };

    function applyPrefs(defaultsObj, prefs) {
        return { ...defaultsObj, ...prefs };
    }

    setOut("task4Output", [
        "merged: " + JSON.stringify(merged),
        "applyPrefs(defaults, { lang: \"hi\" }): " +
            JSON.stringify(applyPrefs(defaults, { lang: "hi" })),
    ]);

})();
