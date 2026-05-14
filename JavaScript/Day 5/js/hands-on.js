/**
 * Day 5 — Loops & Iteration — Hands-on
 */

(function () {

    // =========================
    // Task 1 — Multiplication table
    // =========================

    const task1Code = [];

    task1Code.push("for (let n = 1; n <= 10; n++) {");
    task1Code.push('    console.log(`7 x ${n} = ${7 * n}`);');
    task1Code.push("}");
    task1Code.push("");
    task1Code.push("// Bonus — even multiples only");
    task1Code.push("for (let n = 1; n <= 10; n++) {");
    task1Code.push("    if (n % 2 !== 0) continue;");
    task1Code.push('    console.log(`7 x ${n} = ${7 * n}`);');
    task1Code.push("}");

    document.getElementById("task1Code").textContent =
        task1Code.join("\n");

    const task1Out = [];

    for (let n = 1; n <= 10; n++) {
        task1Out.push(`7 x ${n} = ${7 * n}`);
    }

    task1Out.push("");
    task1Out.push("Bonus (even n only):");
    for (let n = 1; n <= 10; n++) {
        if (n % 2 !== 0) continue;
        task1Out.push(`7 x ${n} = ${7 * n}`);
    }

    document.getElementById("task1Output").textContent =
        task1Out.join("\n");


    // =========================
    // Task 2 — Sum with while
    // =========================

    const task2Code = [];

    task2Code.push("let sum = 0;");
    task2Code.push("let i = 1;");
    task2Code.push("while (i <= 100) {");
    task2Code.push("    sum += i;");
    task2Code.push("    i++;");
    task2Code.push("}");
    task2Code.push("console.log(sum);  // 5050");
    task2Code.push("");
    task2Code.push("// Bonus — odd numbers only");
    task2Code.push("let oddSum = 0;");
    task2Code.push("i = 1;");
    task2Code.push("while (i <= 100) {");
    task2Code.push("    if (i % 2 === 1) oddSum += i;");
    task2Code.push("    i++;");
    task2Code.push("}");
    task2Code.push("console.log(oddSum);  // 2500");

    document.getElementById("task2Code").textContent =
        task2Code.join("\n");

    let sum = 0;
    let i = 1;

    while (i <= 100) {
        sum += i;
        i++;
    }

    let oddSum = 0;

    i = 1;

    while (i <= 100) {
        if (i % 2 === 1) oddSum += i;
        i++;
    }

    document.getElementById("task2Output").textContent =
        [
            `sum 1..100 → ${sum}`,
            "",
            "Bonus — odd numbers only:",
            `oddSum → ${oddSum}`,
        ].join("\n");


    // =========================
    // Task 3 — for...of names
    // =========================

    const task3Code = [];

    task3Code.push('const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];');
    task3Code.push("for (const name of names) {");
    task3Code.push("    console.log(name);");
    task3Code.push("}");
    task3Code.push("let longCount = 0;");
    task3Code.push("for (const name of names) {");
    task3Code.push("    if (name.length > 4) longCount++;");
    task3Code.push("}");
    task3Code.push("console.log(longCount);");
    task3Code.push("");
    task3Code.push('for (const ch of "Jaipur") console.log(ch);');

    document.getElementById("task3Code").textContent =
        task3Code.join("\n");

    const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];
    const nameLines = [];

    for (const name of names) {
        nameLines.push(name);
    }

    let longCount = 0;

    for (const name of names) {
        if (name.length > 4) longCount++;
    }

    const jaipurLines = [];

    for (const ch of "Jaipur") {
        jaipurLines.push(ch);
    }

    document.getElementById("task3Output").textContent =
        [
            ...nameLines,
            "",
            `names with length > 4 → ${longCount}`,
            "",
            "Bonus — characters of \"Jaipur\":",
            ...jaipurLines,
        ].join("\n");


    // =========================
    // Bonus — Object inspector (for...in)
    // =========================

    const task4Code = [];

    task4Code.push("const student = {");
    task4Code.push('    name: "Anaya",');
    task4Code.push("    age: 21,");
    task4Code.push('    city: "Jaipur",');
    task4Code.push('    course: "B.Tech",');
    task4Code.push("};");
    task4Code.push("let propCount = 0;");
    task4Code.push("for (const key in student) {");
    task4Code.push("    propCount++;");
    task4Code.push('    console.log(`${key}: ${student[key]}`);');
    task4Code.push("}");
    task4Code.push("console.log(`property count: ${propCount}`);");

    document.getElementById("task4Code").textContent =
        task4Code.join("\n");

    const student = {
        name: "Anaya",
        age: 21,
        city: "Jaipur",
        course: "B.Tech",
    };

    const objLines = [];
    let propCount = 0;

    for (const key in student) {
        propCount++;
        objLines.push(`${key}: ${student[key]}`);
    }

    objLines.push("");
    objLines.push(`property count: ${propCount}`);

    document.getElementById("task4Output").textContent =
        objLines.join("\n");

})();
