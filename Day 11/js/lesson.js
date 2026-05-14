// —— Day 11 — Events & Event Handling — Lesson ——

(function topic1() {
    const el = document.createElement("button");

    let count = 0;

    function onClick() {
        count += 1;
    }

    el.addEventListener("click", onClick);
    el.addEventListener("click", onClick);
    el.click();

    const lines = [];

    lines.push("Two listeners on one click → handler runs twice.");
    lines.push("count after one synthetic click → " + String(count));
    el.removeEventListener("click", onClick);
    el.removeEventListener("click", onClick);
    el.click();
    lines.push("after removeEventListener ×2, count after another click → " +
        String(count));

    document.querySelector("#task1Output").textContent =
        lines.join("\n");
})();

(function topic2() {
    const btn = document.createElement("button");

    btn.textContent = "OK";
    btn.addEventListener("click", (e) => {
        const lines = [];

        lines.push("e.type → " + e.type);
        lines.push("e.target.tagName → " + e.target.tagName);
        lines.push(
            "e.target.textContent → " + JSON.stringify(e.target.textContent)
        );

        document.querySelector("#task2Output").textContent =
            lines.join("\n");
    });
    btn.click();
})();

(function topic3() {
    const form = document.createElement("form");
    let submitted = false;
    let prevented = false;

    form.addEventListener("submit", (e) => {
        submitted = true;
        e.preventDefault();
        prevented = true;
    });
    form.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true })
    );

    const lines = [];

    lines.push("submit fired → " + String(submitted));
    lines.push("default prevented → " + String(prevented));

    document.querySelector("#task3Output").textContent =
        lines.join("\n");
})();

(function topic4() {
    const lines = [];

    lines.push(
        "Use click for buttons; dblclick for double-activation UX;"
    );
    lines.push(
        "mouseover/mouseout bubble — prefer mouseenter/mouseleave when you need no bubbling."
    );
    lines.push("contextmenu + preventDefault() blocks the browser menu.");

    document.querySelector("#task4Output").textContent =
        lines.join("\n");
})();

(function topic5() {
    const input = document.createElement("input");

    input.value = "ab";
    const out = [];

    input.addEventListener("input", (e) => {
        out.push("input: value length → " + String(e.target.value.length));
    });
    input.dispatchEvent(new Event("input", { bubbles: true }));

    const lines = [];

    lines.push(out.join("\n"));
    lines.push("keydown provides e.key before the field updates; input fires after value change.");

    document.querySelector("#task5Output").textContent =
        lines.join("\n");
})();

(function topic6() {
    const root = document.createElement("div");
    const child = document.createElement("button");

    child.textContent = "inner";
    root.appendChild(child);

    const log = [];

    root.addEventListener("click", () => {
        log.push("parent heard click (bubble phase)");
    });
    child.addEventListener("click", () => {
        log.push("child target clicked");
    });
    child.click();

    const lines = [];

    lines.push("Order of logs (target first, then ancestors):");
    lines.push(log.join(" → "));
    lines.push("Delegation: attach the parent listener only; inspect e.target or e.target.closest(...).");

    document.querySelector("#task6Output").textContent =
        lines.join("\n");
})();
