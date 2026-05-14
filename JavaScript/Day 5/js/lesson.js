// —— Day 5 — Loops & Iteration — Lesson ——

// —— Topic 1 — for (init; condition; update) ——

const lines1 = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "",
    "5",
    "4",
    "3",
    "2",
    "1",
    "",
    "0",
    "2",
    "4",
    "6",
    "8",
    "10",
];

document.querySelector("#task1Output").textContent =
    lines1.join("\n");


// —— Topic 2 — while & do...while ——

const lines2 = [
    "0",
    "1",
    "2",
    "",
    "10",
];

document.querySelector("#task2Output").textContent =
    lines2.join("\n");


// —— Topic 3 — break & continue ——

const lines3 = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "",
    "1",
    "3",
    "5",
    "7",
    "9",
];

document.querySelector("#task3Output").textContent =
    lines3.join("\n");


// —— Topic 4 — for...of ——

const lines4 = [
    "apple",
    "banana",
    "mango",
    "",
    "P",
    "r",
    "i",
    "y",
    "a",
];

document.querySelector("#task4Output").textContent =
    lines4.join("\n");


// —— Topic 5 — for...in ——

const lines5 = [
    "name",
    "age",
    "",
    "name Aarav",
    "age 22",
];

document.querySelector("#task5Output").textContent =
    lines5.join("\n");


// —— Topic 6 — Infinite loops ——

const lines6 = [
    "Bug: i is never updated inside the loop.",
    "The condition i < 5 stays true forever → infinite loop.",
    "Fix: add i++ (or another update) inside the body so i eventually reaches 5.",
];

document.querySelector("#task6Output").textContent =
    lines6.join("\n");
