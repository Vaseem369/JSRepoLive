// —— Day 7 — Arrays — Lesson ——

// —— Topic 1 — Creating & accessing ——

const fruits = ["apple", "banana", "mango"];

const lines1 = [];

lines1.push(fruits[0]);
lines1.push(fruits[2]);
lines1.push(String(fruits.length));
lines1.push(fruits[fruits.length - 1]);
fruits[1] = "cherry";
lines1.push(JSON.stringify(fruits));
lines1.push(String(fruits[-1]));
lines1.push(fruits.at(-1));

document.querySelector("#task1Output").textContent =
    lines1.join("\n");


// —— Topic 2 — Mutating methods ——

const lines2 = [];

const m = [1, 2, 3];

m.push(4);
lines2.push("after push(4): " + JSON.stringify(m));
lines2.push("pop() → " + String(m.pop()));
lines2.push("after pop: " + JSON.stringify(m));
m.unshift(0);
lines2.push("after unshift(0): " + JSON.stringify(m));
lines2.push("shift() → " + String(m.shift()));
lines2.push("after shift: " + JSON.stringify(m));
const removed = m.splice(1, 1);

lines2.push("splice(1,1) removed: " + JSON.stringify(removed));
lines2.push("after splice: " + JSON.stringify(m));
m.splice(1, 0, 9);
lines2.push("after splice(1,0,9): " + JSON.stringify(m));

document.querySelector("#task2Output").textContent =
    lines2.join("\n");


// —— Topic 3 — Non-mutating ——

const lines3 = [];

const base = [1, 2, 3, 4];
const part = base.slice(1, 3);
const merged = base.concat([10]);

lines3.push("original: " + JSON.stringify(base));
lines3.push("slice(1,3): " + JSON.stringify(part));
lines3.push("after slice, original: " + JSON.stringify(base));
lines3.push("concat([10]): " + JSON.stringify(merged));
lines3.push('join("-"): ' + base.join("-"));
lines3.push("includes(3): " + base.includes(3));
lines3.push("indexOf(99): " + base.indexOf(99));

document.querySelector("#task3Output").textContent =
    lines3.join("\n");


// —— Topic 4 — forEach & map ——

const lines4 = [];

const nums = [1, 2, 3];

lines4.push("forEach (side effect only, returns undefined):");
nums.forEach((n) => {
    lines4.push(`  n*2 → ${n * 2}`);
});
lines4.push("value of `let r = nums.forEach(...); r` → undefined");
lines4.push("");
lines4.push("map (new array):");
lines4.push(JSON.stringify(nums.map((n) => n * 2)));
lines4.push("original unchanged: " + JSON.stringify(nums));

document.querySelector("#task4Output").textContent =
    lines4.join("\n");


// —— Topic 5 — filter · find · some · every ——

const lines5 = [];

const scores = [40, 85, 55, 90];

lines5.push("scores: " + JSON.stringify(scores));
lines5.push("filter >= 60: " + JSON.stringify(scores.filter((s) => s >= 60)));
lines5.push(
    "find first < 60: " + String(scores.find((s) => s < 60))
);
lines5.push("every >= 60: " + scores.every((s) => s >= 60));
lines5.push("some > 90: " + scores.some((s) => s > 90));

document.querySelector("#task5Output").textContent =
    lines5.join("\n");


// —— Topic 6 — reduce ——

const lines6 = [];

const r = [1, 2, 3, 4];

lines6.push(
    "sum: " +
        String(r.reduce((acc, n) => acc + n, 0))
);
lines6.push(
    "product: " +
        String(r.reduce((acc, n) => acc * n, 1))
);

document.querySelector("#task6Output").textContent =
    lines6.join("\n");


// —— Topic 7 — spread ——

const lines7 = [];

const a = [1, 2];
const b = [3, 4];

lines7.push("copy [...a]: " + JSON.stringify([...a]));
lines7.push("merge [...a, ...b]: " + JSON.stringify([...a, ...b]));
lines7.push("Math.max(...[2, 9, 4]): " + String(Math.max(...[2, 9, 4])));

document.querySelector("#task7Output").textContent =
    lines7.join("\n");
