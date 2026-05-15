// —— Topic 1 — The 7 Primitives ——

const lines1 = [];

lines1.push("// JavaScript primitive types");
lines1.push('console.log(typeof 42);');
lines1.push('→ "number"');
lines1.push("");

lines1.push('console.log(typeof "Priya");');
lines1.push('→ "string"');
lines1.push("");

lines1.push("console.log(typeof true);");
lines1.push('→ "boolean"');
lines1.push("");

lines1.push("console.log(typeof undefined);");
lines1.push('→ "undefined"');
lines1.push("");

lines1.push("console.log(typeof 100n);");
lines1.push('→ "bigint"');
lines1.push("");

lines1.push('console.log(typeof Symbol("id"));');
lines1.push('→ "symbol"');
lines1.push("");

lines1.push("console.log(typeof null);");
lines1.push('→ "object"');

document.querySelector("#task1Output").textContent =
    lines1.join("\n");


// —— Topic 2 — typeof ——

const lines2 = [];

console.log(typeof 3.14);
console.log(typeof "");
console.log(typeof null);
console.log(typeof NaN);

lines2.push("console.log(typeof 3.14);");
lines2.push('→ "number"');
lines2.push("");

lines2.push('console.log(typeof "");');
lines2.push('→ "string"');
lines2.push("");

lines2.push("console.log(typeof null);");
lines2.push('→ "object"');
lines2.push("");

lines2.push("console.log(typeof NaN);");
lines2.push('→ "number"');
lines2.push("");

lines2.push("// typeof null is a famous JavaScript bug");

document.querySelector("#task2Output").textContent =
    lines2.join("\n");


// —— Topic 3 — Numbers ——

const lines3 = [];

const age = 25;
const price = 1180.5;
const temp = -5;

console.log(typeof age);
console.log(typeof price);

lines3.push("const age = 25;");
lines3.push("const price = 1180.5;");
lines3.push("const temp = -5;");
lines3.push("");

lines3.push("console.log(typeof age);");
lines3.push('→ "number"');
lines3.push("");

lines3.push("console.log(typeof price);");
lines3.push('→ "number"');
lines3.push("");

lines3.push("console.log(1 / 0);");
lines3.push("→ Infinity");
lines3.push("");

lines3.push('console.log("abc" * 2);');
lines3.push("→ NaN");
lines3.push("");

lines3.push("console.log(0.1 + 0.2);");
lines3.push("→ 0.30000000000000004");

document.querySelector("#task3Output").textContent =
    lines3.join("\n");


// —— Topic 4 — Strings ——

const lines4 = [];

const a = "double quotes";
const b = 'single quotes';
const c = `backticks`;

console.log(typeof a);
console.log(typeof c);

lines4.push('const a = "double quotes";');
lines4.push("const b = 'single quotes';");
lines4.push("const c = `backticks`;");
lines4.push("");

lines4.push("console.log(typeof a);");
lines4.push('→ "string"');
lines4.push("");

lines4.push("console.log(typeof c);");
lines4.push('→ "string"');
lines4.push("");

lines4.push('const greeting = "Hello, " + "Priya";');
lines4.push('console.log(greeting);');
lines4.push('→ "Hello, Priya"');
lines4.push("");

lines4.push('console.log("Jaipur".length);');
lines4.push("→ 6");

document.querySelector("#task4Output").textContent =
    lines4.join("\n");


// —— Topic 5 — Template Literals ——

const lines5 = [];

const name = "Priya";
const userAge = 25;

const message =
    `Hello, ${name}! You are ${userAge} years old.`;

console.log(message);

lines5.push('const name = "Priya";');
lines5.push("const userAge = 25;");
lines5.push("");

lines5.push(
    "const message = `Hello, ${name}! You are ${userAge} years old.`;"
);

lines5.push("console.log(message);");
lines5.push(
    '→ "Hello, Priya! You are 25 years old."'
);

lines5.push("");

lines5.push("const price = 1000;");
lines5.push(
    "const taxed = `Total with GST: ₹${price * 1.18}`;"
);

lines5.push(
    '→ "Total with GST: ₹1180"'
);

document.querySelector("#task5Output").textContent =
    lines5.join("\n");


// —— Topic 6 — Booleans ——

const lines6 = [];

const isLoggedIn = true;

console.log(typeof isLoggedIn);

lines6.push("const isLoggedIn = true;");
lines6.push("");

lines6.push("console.log(typeof isLoggedIn);");
lines6.push('→ "boolean"');
lines6.push("");

lines6.push("console.log(5 > 3);");
lines6.push("→ true");
lines6.push("");

lines6.push('console.log(5 === "5");');
lines6.push("→ false");
lines6.push("");

lines6.push('console.log("Priya".length > 0);');
lines6.push("→ true");

document.querySelector("#task6Output").textContent =
    lines6.join("\n");


// —— Topic 7 — null vs undefined ——

const lines7 = [];

let cityName;

console.log(cityName);

let selectedUser = null;

console.log(selectedUser);

lines7.push("let cityName;");
lines7.push("console.log(cityName);");
lines7.push("→ undefined");
lines7.push("");

lines7.push("let selectedUser = null;");
lines7.push("console.log(selectedUser);");
lines7.push("→ null");
lines7.push("");

lines7.push("console.log(null == undefined);");
lines7.push("→ true");
lines7.push("");

lines7.push("console.log(null === undefined);");
lines7.push("→ false");
lines7.push("");

lines7.push("console.log(typeof undefined);");
lines7.push('→ "undefined"');
lines7.push("");

lines7.push("console.log(typeof null);");
lines7.push('→ "object"');

document.querySelector("#task7Output").textContent =
    lines7.join("\n");