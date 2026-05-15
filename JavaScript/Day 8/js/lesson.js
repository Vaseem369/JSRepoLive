// —— Day 8 — Objects — Lesson ——

// Topic 1 — literals (function omitted from JSON.stringify)

(function topic1() {
    const profile = {
        username: "riya_91",
        score: 1200,
        active: true,
        tags: ["js", "web"],
        prefs: { theme: "dark" },
        ping() {
            return "ok";
        },
    };

    const lines = [];

    lines.push(
       
    );
    lines.push(JSON.stringify(profile));
    lines.push("typeof profile.tags → " + typeof profile.tags);
    lines.push("typeof profile.prefs → " + typeof profile.prefs);
    lines.push("typeof profile.ping → " + typeof profile.ping);
    lines.push("profile.ping() → " + profile.ping());

    document.querySelector("#task1Output").textContent =
        lines.join("\n");
})();

// Topic 2 — dot vs bracket

(function topic2() {
    const user = { name: "Priya", "full-name": "Priya S." };
    const key = "name";
    const lines = [];

    lines.push("user.name → " + user.name);
    lines.push('user["name"] → ' + user["name"]);
    lines.push("user[key] → " + user[key]);
    lines.push('user["full-name"] → ' + user["full-name"]);

    document.querySelector("#task2Output").textContent =
        lines.join("\n");
})();

// Topic 3 — add / update / delete

(function topic3() {
    const user = { name: "Priya", age: 24 };

    user.email = "priya@example.com";
    user.city = "Jaipur";
    user.age = 25;
    delete user.city;

    document.querySelector("#task3Output").textContent =
        JSON.stringify(user);
})();

// Topic 4 — methods & this

(function topic4() {
    const counter = {
        n: 0,
        bump() {
            this.n += 1;

            return this.n;
        },
    };

    const lines = [];

    lines.push("counter.bump() → " + String(counter.bump()));
    lines.push("counter.bump() → " + String(counter.bump()));
    lines.push("counter.n → " + String(counter.n));

    document.querySelector("#task4Output").textContent =
        lines.join("\n");
})();

// Topic 5 — destructuring

(function topic5() {
    const user = {
        name: "Riya",
        age: 23,
        city: "Jaipur",
        email: "r@x.in",
    };

    const { name, age } = user;
    const { name: userName, city } = user;
    const { phone = "N/A" } = user;
    const greet = ({ name: n, age: a }) => `Hi ${n}, age ${a}`;

    const lines = [];

    lines.push("const { name, age } → " + name + " " + age);
    lines.push(
        "const { name: userName, city } → " + userName + " " + city
    );
    lines.push('const { phone = "N/A" } → ' + phone);
    lines.push("greet(user) → " + greet(user));

    document.querySelector("#task5Output").textContent =
        lines.join("\n");
})();

// Topic 6 — keys / values / entries

(function topic6() {
    const o = { a: 1, b: 2, c: 3 };
    const lines = [];

    lines.push("keys:   " + JSON.stringify(Object.keys(o)));
    lines.push("values: " + JSON.stringify(Object.values(o)));
    lines.push(
        "entries: " + JSON.stringify(Object.entries(o))
    );

    document.querySelector("#task6Output").textContent =
        lines.join("\n");
})();

// Topic 7 — assign & spread

(function topic7() {
    const a = { name: "Priya" };
    const b = { age: 24 };
    const merged = Object.assign({}, a, b);
    const merged2 = { ...a, ...b };
    const copy = { ...a };

    copy.name = "Changed";

    const lines = [];

    lines.push("Object.assign({}, a, b) → " + JSON.stringify(merged));
    lines.push("{ ...a, ...b } → " + JSON.stringify(merged2));
    lines.push("copy after mutating copy.name → " + JSON.stringify(copy));
    lines.push("original a unchanged → " + JSON.stringify(a));

    document.querySelector("#task7Output").textContent =
        lines.join("\n");
})();
