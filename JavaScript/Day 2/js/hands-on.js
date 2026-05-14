/**
 * Day 2 — Primitive Types — Hands-on
 */

(function () {

    // =========================
    // Task 1 — typeof Exploration
    // =========================

    const task1Lines = [];

    task1Lines.push(`typeof 42 → ${typeof 42}`);
    task1Lines.push(`typeof "hello" → ${typeof "hello"}`);
    task1Lines.push(`typeof true → ${typeof true}`);
    task1Lines.push(`typeof undefined → ${typeof undefined}`);
    task1Lines.push(`typeof null → ${typeof null}`);
    task1Lines.push(`typeof 100n → ${typeof 100n}`);
    task1Lines.push(`typeof Symbol("x") → ${typeof Symbol("x")}`);

    task1Lines.push("");
    task1Lines.push("Surprising result:");
    task1Lines.push('typeof null returns "object"');
    task1Lines.push("This is a historical JavaScript bug.");

    document.getElementById("task1Output").textContent =
        task1Lines.join("\n");


    // =========================
    // Task 2 — Template Literals
    // =========================

    const task2Lines = [];

    const name = "Aarav";
    const age = 22;
    const city = "Jaipur";

    const oldStyle =
        name + ", " + age + ", from " + city;

    const templateLiteral =
        `${name}, ${age}, from ${city}`;

    const card =
`Name: ${name}
Age: ${age}
City: ${city}`;

    task2Lines.push("Old-style concatenation:");
    task2Lines.push(oldStyle);

    task2Lines.push("");
    task2Lines.push("Template literal:");
    task2Lines.push(templateLiteral);

    task2Lines.push("");
    task2Lines.push("Multi-line card:");
    task2Lines.push(card);

    document.getElementById("task2Output").textContent =
        task2Lines.join("\n");


    // =========================
    // Task 3 — null vs undefined
    // =========================

    const task3Lines = [];

    let user;

    task3Lines.push(`user → ${user}`);
    task3Lines.push(`typeof user → ${typeof user}`);

    user = null;

    task3Lines.push("");
    task3Lines.push(`user after null assignment → ${user}`);
    task3Lines.push(`typeof user → ${typeof user}`);

    task3Lines.push("");
    task3Lines.push(`null == undefined → ${null == undefined}`);
    task3Lines.push(`null === undefined → ${null === undefined}`);

    task3Lines.push("");
    task3Lines.push("undefined means value not assigned yet.");
    task3Lines.push("null means intentionally empty.");

    document.getElementById("task3Output").textContent =
        task3Lines.join("\n");


    // =========================
    // Bonus — Number Quirks
    // =========================

    const bonusLines = [];

    const sum = 0.1 + 0.2;

    bonusLines.push(`0.1 + 0.2 → ${sum}`);
    bonusLines.push(`0.1 + 0.2 === 0.3 → ${sum === 0.3}`);

    bonusLines.push("");

    bonusLines.push(
        `Number.isInteger(5) → ${Number.isInteger(5)}`
    );

    bonusLines.push(
        `Number.isInteger(5.0) → ${Number.isInteger(5.0)}`
    );

    bonusLines.push(
        `Number.isInteger(5.5) → ${Number.isInteger(5.5)}`
    );

    bonusLines.push("");

    bonusLines.push(`1 / 0 → ${1 / 0}`);
    bonusLines.push(`"abc" * 2 → ${"abc" * 2}`);

    bonusLines.push("");
    bonusLines.push("Infinity represents mathematical infinity.");
    bonusLines.push("NaN means Not-a-Number.");

    document.getElementById("bonusOutput").textContent =
        bonusLines.join("\n");

})();