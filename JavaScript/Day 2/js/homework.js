/**
 * Day 2 — Primitive Types — Homework
 */

(function () {

    // =========================
    // Task 1 — Primitive Types
    // =========================

    const task1Lines = [];
    const task1Code = [];

    const numberValue = 42;
    const stringValue = "hello";
    const booleanValue = true;
    const undefinedValue = undefined;
    const nullValue = null;
    const bigintValue = 100n;
    const symbolValue = Symbol("id");

    task1Code.push('const numberValue = 42;');
    task1Code.push('const stringValue = "hello";');
    task1Code.push('const booleanValue = true;');
    task1Code.push('const undefinedValue = undefined;');
    task1Code.push('const nullValue = null;');
    task1Code.push('const bigintValue = 100n;');
    task1Code.push('const symbolValue = Symbol("id");');
    task1Code.push('');
    task1Code.push('console.log(typeof numberValue);');
    task1Code.push('console.log(typeof stringValue);');
    task1Code.push('console.log(typeof booleanValue);');
    task1Code.push('console.log(typeof undefinedValue);');
    task1Code.push('console.log(typeof nullValue);');
    task1Code.push('console.log(typeof bigintValue);');
    task1Code.push('console.log(typeof symbolValue);');

    task1Lines.push(
        `numberValue → ${numberValue} | typeof → ${typeof numberValue}`
    );

    task1Lines.push(
        `stringValue → ${stringValue} | typeof → ${typeof stringValue}`
    );

    task1Lines.push(
        `booleanValue → ${booleanValue} | typeof → ${typeof booleanValue}`
    );

    task1Lines.push(
        `undefinedValue → ${undefinedValue} | typeof → ${typeof undefinedValue}`
    );

    task1Lines.push(
        `nullValue → ${nullValue} | typeof → ${typeof nullValue}`
    );

    task1Lines.push(
        `bigintValue → ${bigintValue} | typeof → ${typeof bigintValue}`
    );

    task1Lines.push(
        `symbolValue → ${symbolValue.toString()} | typeof → ${typeof symbolValue}`
    );

    document.getElementById("task1Code").textContent =
        task1Code.join("\n");

    document.getElementById("task1Output").textContent =
        task1Lines.join("\n");


    // =========================
    // Task 2 — Template Literals
    // =========================

    const task2Lines = [];
    const task2Code = [];

    const name = "Aarav";
    const age = 22;
    const city = "Jaipur";

    task2Code.push('const name = "Aarav";');
    task2Code.push('const age = 22;');
    task2Code.push('const city = "Jaipur";');
    task2Code.push('');
    task2Code.push('`${name} is ${age} years old.`');
    task2Code.push('`${name} lives in ${city}.`');
    task2Code.push('`${name} likes learning JavaScript in ${city}.`');
    task2Code.push('`Next year, ${name} will be ${age + 1} years old.`');
    task2Code.push('`${name} enjoys spending time with friends in ${city}.`');

    task2Lines.push(
        `${name} is ${age} years old.`
    );

    task2Lines.push(
        `${name} lives in ${city}.`
    );

    task2Lines.push(
        `${name} likes learning JavaScript in ${city}.`
    );

    task2Lines.push(
        `Next year, ${name} will be ${age + 1} years old.`
    );

    task2Lines.push(
        `${name} enjoys spending time with friends in ${city}.`
    );

    document.getElementById("task2Code").textContent =
        task2Code.join("\n");

    document.getElementById("task2Output").textContent =
        task2Lines.join("\n");


    // =========================
    // Task 3 — Floating Point Quirks
    // =========================

    const task3Lines = [];
    const task3Code = [];

    const floatingResult = 0.1 + 0.2;
    const paiseTrick = (10 + 20) / 100;

    task3Code.push('const floatingResult = 0.1 + 0.2;');
    task3Code.push('console.log(floatingResult);');
    task3Code.push('');
    task3Code.push('const paiseTrick = (10 + 20) / 100;');
    task3Code.push('console.log(paiseTrick);');

    task3Lines.push(
        `0.1 + 0.2 → ${floatingResult}`
    );

    task3Lines.push(
        `0.1 + 0.2 === 0.3 → ${floatingResult === 0.3}`
    );

    task3Lines.push('');

    task3Lines.push(
        `(10 + 20) / 100 → ${paiseTrick}`
    );

    task3Lines.push(
        `(10 + 20) / 100 === 0.3 → ${paiseTrick === 0.3}`
    );

    document.getElementById("task3Code").textContent =
        task3Code.join("\n");

    document.getElementById("task3Output").textContent =
        task3Lines.join("\n");


    // =========================
    // Task 4 — User Card
    // =========================

    const task4Lines = [];
    const task4Code = [];

    const fact =
        "Enjoys learning JavaScript every day.";

    const userCard =
`Name: ${name}
Age: ${age}
City: ${city}
Fact: ${fact}`;

    task4Code.push(
        'const fact = "Enjoys learning JavaScript every day.";'
    );

    task4Code.push('');

    task4Code.push(
'const userCard = `Name: ${name}\nAge: ${age}\nCity: ${city}\nFact: ${fact}`;'
    );

    task4Lines.push(userCard);

    document.getElementById("task4Code").textContent =
        task4Code.join("\n");

    document.getElementById("task4Output").textContent =
        task4Lines.join("\n");


    // =========================
    // Bonus — typeof Practice
    // =========================

    const bonusLines = [];
    const bonusCode = [];

    bonusCode.push('typeof []');
    bonusCode.push('typeof {}');
    bonusCode.push('typeof function(){}');

    bonusLines.push(
        `typeof [] → ${typeof []}`
    );

    bonusLines.push(
        `typeof {} → ${typeof {}}`
    );

    bonusLines.push(
        `typeof function(){} → ${typeof function(){}}`
    );

    bonusLines.push('');
    bonusLines.push(
        'Arrays and objects return "object".'
    );

    bonusLines.push(
        'Functions return "function".'
    );

    document.getElementById("bonusCode").textContent =
        bonusCode.join("\n");

    document.getElementById("bonusOutput").textContent =
        bonusLines.join("\n");

})();