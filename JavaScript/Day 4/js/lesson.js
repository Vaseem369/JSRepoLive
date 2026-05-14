// —— Day 4 — Control Flow — Lesson ——

// —— Topic 1 — if (condition) { ... } ——

const lines1 = [
    "const age = 20;",
    "if (age >= 18) console.log(\"vote\");",
    "→ vote",
    "",
    "const score = 30;",
    "if (score > 50) console.log(\"pass\");",
    "→ (no output — condition is false)",
];

document.querySelector("#task1Output").textContent =
    lines1.join("\n");


// —— Topic 2 — if / else if / else ——

function gradeForMarks(m) {
    if (m >= 90) return "A";
    if (m >= 75) return "B";
    if (m >= 60) return "C";
    return "F";
}

const lines2 = [
    "marks = 85 → grade: " + gradeForMarks(85) + "  (stops at first true: >= 75)",
    "marks = 50 → grade: " + gradeForMarks(50),
    "marks = 95 → grade: " + gradeForMarks(95),
];

document.querySelector("#task2Output").textContent =
    lines2.join("\n");


// —— Topic 3 — Nesting (pyramid of doom) ——

const userOk = { isActive: true, age: 20 };

let topic3Out = "";

if (userOk) {
    if (userOk.isActive) {
        if (userOk.age >= 18) {
            topic3Out = "Access granted";
        }
    }
}

const lines3 = [
    "// With user = { isActive: true, age: 20 }",
    "console.log → " + topic3Out,
    "",
    "Deeper nesting = harder to read. Topic 6 uses guard clauses instead.",
];

document.querySelector("#task3Output").textContent =
    lines3.join("\n");


// —— Topic 4 — switch ——

const lines4 = [
    "day = \"Tuesday\" → (example) log: Second day",
    "",
    "day = \"Saturday\" (fall-through Sat + Sun) → Weekend",
    "",
    "switch (5) { case \"5\": ... }",
    "Number 5 vs string \"5\" → does it match? → no",
];

document.querySelector("#task4Output").textContent =
    lines4.join("\n");


// —— Topic 5 — Truthy & falsy ——

const lines5 = [
    "if (0) { ... }        → block skipped (0 is falsy)",
    "if (\"0\") { ... }     → runs (non-empty string is truthy)",
    "if ([]) { ... }       → runs ([] is truthy)",
    "if (null) { ... }     → block skipped (null is falsy)",
    "if (NaN) { ... }      → block skipped (NaN is falsy)",
    "if (\"false\") { ... } → runs (non-empty string is truthy)",
    "",
    "The 6 falsy values: false, 0, \"\", null, undefined, NaN",
];

document.querySelector("#task5Output").textContent =
    lines5.join("\n");


// —— Topic 6 — Guard clauses ——

const lines6 = [
    "// AFTER — guard clauses (early return):",
    "if (!user) return;",
    "if (!user.isActive) return;",
    "if (user.age < 18) return;",
    "console.log(\"Access granted\");",
    "",
    "Same happy-path output as nested version when checks pass.",
];

document.querySelector("#task6Output").textContent =
    lines6.join("\n");
