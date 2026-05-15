// —— Day 6 — Functions — Lesson ——

// —— Topic 1 — Function declarations ——

document.querySelector("#task1Output").textContent =
    "Hello, Priya";


// —— Topic 2 — return vs console.log ——

const lines2 = [
    "8",
    "",
    "undefined",
];

document.querySelector("#task2Output").textContent =
    lines2.join("\n");


// —— Topic 3 — Function expressions ——

document.querySelector("#task3Output").textContent =
    "Hello, Priya";


// —— Topic 4 — Arrow functions ——

const lines4 = [
    "5",
    "16",
];

document.querySelector("#task4Output").textContent =
    lines4.join("\n");


// —— Topic 5 — Default parameters ——

const greetDef = (n = "Guest") => "Hello, " + n;

const lines5 = [
    `greet("Anaya") → ${greetDef("Anaya")}`,
    `greet() → ${greetDef()}`,
    `greet(null) → ${greetDef(null)}`,
    "",
    "null is not undefined — the default is skipped;",
    '"Hello, " + null coerces null to the string "null".',
];

document.querySelector("#task5Output").textContent =
    lines5.join("\n");


// —— Topic 6 — Scope ——

const lines6 = [
    "Priya",
    "Aarav",
    "Priya",
    "ReferenceError: localName is not defined",
];

document.querySelector("#task6Output").textContent =
    lines6.join("\n");


// —— Topic 7 — Pure functions ——

document.querySelector("#task7Output").textContent =
    [
        "add(2, 3) is always 5 — predictable, no hidden state.",
        "",
        "impureAdd depends on outer `counter` — same argument can give",
        "different results after earlier calls; harder to test in isolation.",
    ].join("\n");
