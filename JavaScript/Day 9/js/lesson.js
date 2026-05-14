// —— Day 9 — ES6+ Essentials — Lesson ——

// Topic 1 — template literals

(function topic1() {
    const n = 3;
    const block = `Line one
count = ${n * 2}`;

    document.querySelector("#task1Output").textContent = block;
})();

// Topic 2 — array destructuring

(function topic2() {
    const colors = ["red", "green", "blue"];
    const [first, second, third] = colors;
    const [, , last] = colors;
    const [a, b, c, d = "yellow"] = colors;
    let x = 1;
    let y = 2;

    [x, y] = [y, x];
    const nums = [1, 2, 3, 4, 5];
    const [head, ...tail] = nums;

    const lines = [];

    lines.push("first second third → " + [first, second, third].join(" "));
    lines.push("last (skip two) → " + last);
    lines.push("d (default) → " + d);
    lines.push("swap x y → " + x + " " + y);
    lines.push("head → " + String(head));
    lines.push("tail → " + JSON.stringify(tail));

    document.querySelector("#task2Output").textContent =
        lines.join("\n");
})();

// Topic 3 — object destructuring

(function topic3() {
    const user = {
        name: "Riya",
        age: 22,
        address: { city: "Jaipur", pincode: "302001" },
    };

    const { name, age } = user;
    const { name: who } = user;
    const { phone = "N/A" } = user;
    const { address: { city } } = user;
    const { name: n2, ...rest } = user;

    const lines = [];

    lines.push("name age → " + name + " " + age);
    lines.push("rename who → " + who);
    lines.push("default phone → " + phone);
    lines.push("nested city → " + city);
    lines.push("(no `address` variable — nested pattern binds `city` only)");
    lines.push("rest keys → " + JSON.stringify(Object.keys(rest)));

    document.querySelector("#task3Output").textContent =
        lines.join("\n");
})();

// Topic 4 — rest parameters

(function topic4() {
    function sum(...xs) {
        return xs.reduce((a, b) => a + b, 0);
    }

    const lines = [];

    lines.push("sum(1,2,3) → " + String(sum(1, 2, 3)));
    lines.push("sum() → " + String(sum()));
    lines.push("sum(10,20) → " + String(sum(10, 20)));

    document.querySelector("#task4Output").textContent =
        lines.join("\n");
})();

// Topic 5 — spread

(function topic5() {
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const user = { name: "Priya", age: 24, city: "Jaipur" };
    const updated = { ...user, age: 25 };
    const defaults = { theme: "light", notifications: true };
    const userPrefs = { theme: "dark" };
    const finalPrefs = { ...defaults, ...userPrefs };

    const lines = [];

    lines.push("[...a, ...b] → " + JSON.stringify([...a, ...b]));
    lines.push("Math.max(...a) → " + String(Math.max(...a)));
    lines.push("updated user → " + JSON.stringify(updated));
    lines.push("merged prefs → " + JSON.stringify(finalPrefs));

    document.querySelector("#task5Output").textContent =
        lines.join("\n");
})();

// Topic 6 — || vs ??

(function topic6() {
    const lines = [];

    lines.push('0 || 100  → ' + String(0 || 100));
    lines.push('0 ?? 100  → ' + String(0 ?? 100));
    lines.push('"" || "x" → ' + JSON.stringify("" || "x"));
    lines.push('"" ?? "x" → ' + JSON.stringify("" ?? "x"));
    lines.push("null ?? 1 → " + String(null ?? 1));
    lines.push("undefined ?? 1 → " + String(undefined ?? 1));

    document.querySelector("#task6Output").textContent =
        lines.join("\n");
})();

// Topic 7 — computed keys

(function topic7() {
    const fieldName = "email";
    const value = "priya@x.in";
    const user2 = {
        name: "Priya",
        [fieldName]: value,
        [`is_${fieldName}_verified`]: true,
    };

    document.querySelector("#task7Output").textContent =
        JSON.stringify(user2);
})();
