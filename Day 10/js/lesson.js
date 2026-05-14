// —— Day 10 — DOM Manipulation Basics — Lesson ——

(function topic1() {
    const lines = [];

    lines.push("document.documentElement → <html> (the documentElement node)");
    lines.push(
        "document.body → <body> once parsed (null before body exists)"
    );
    lines.push("Changing a property on a node updates the live tree.");

    document.querySelector("#task1Output").textContent =
        lines.join("\n");
})();

(function topic2() {
    const host = document.createElement("div");

    host.innerHTML =
        "<button class=\"btn\" id=\"demo-x\">A</button>" +
        "<button class=\"btn\">B</button>";

    const byId = host.querySelector("#demo-x");
    const firstBtn = host.querySelector(".btn");
    const allBtns = host.querySelectorAll(".btn");

    const lines = [];

    lines.push("querySelector('#demo-x') text → " + byId.textContent);
    lines.push("querySelector('.btn') text → " + firstBtn.textContent);
    lines.push("querySelectorAll('.btn').length → " + allBtns.length);

    document.querySelector("#task2Output").textContent =
        lines.join("\n");
})();

(function topic3() {
    const box = document.createElement("div");

    box.textContent = "<em>Hi</em>";

    const inner = document.createElement("div");

    inner.innerHTML = "<em>Hi</em>";

    const lines = [];

    lines.push(
        'After textContent = "<em>Hi</em>": innerHTML is → ' +
            JSON.stringify(box.innerHTML)
    );
    lines.push(
        'After innerHTML = "<em>Hi</em>": textContent is → ' +
            JSON.stringify(inner.textContent)
    );

    document.querySelector("#task3Output").textContent =
        lines.join("\n");
})();

(function topic4() {
    const title = document.createElement("h2");

    title.className = "dim";
    title.style.color = "navy";
    title.style.fontSize = "18px";
    title.classList.add("highlight");
    title.classList.remove("dim");
    title.classList.toggle("active");
    const hasActive = title.classList.contains("active");
    title.classList.toggle("active");

    const lines = [];

    lines.push("style.color → " + title.style.color);
    lines.push("style.fontSize → " + title.style.fontSize);
    lines.push("after add/remove/toggle → contains('active') → " + hasActive);
    lines.push("after second toggle → contains('active') → " +
        title.classList.contains("active"));
    lines.push("className snapshot → " + JSON.stringify(title.className));

    document.querySelector("#task4Output").textContent =
        lines.join("\n");
})();
