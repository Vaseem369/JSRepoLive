// —— Day 12 — Error Handling & Module Basics — Lesson ——

(function topic1() {
    const lines = [];

    lines.push("Syntax errors: cannot wrap JSON.parse('{') in try if the whole FILE fails to parse.");
    lines.push("Runtime (caught):");
    try {
        JSON.parse("{");
    } catch (e) {
        lines.push("  JSON.parse('{') → " + e.name + ": " + e.message);
    }

    document.querySelector("#task1Output").textContent =
        lines.join("\n");
})();

(function topic2() {
    const log = [];

    try {
        log.push("try: start");
        throw new Error("boom");
    } catch (e) {
        log.push("catch: " + e.message);
    } finally {
        log.push("finally: always");
    }

    let ranFinally = false;

    try {
        ranFinally = false;
    } finally {
        ranFinally = true;
    }

    log.push("try with no throw → finally ran? " + String(ranFinally));

    document.querySelector("#task2Output").textContent =
        log.join("\n");
})();

(function topic3() {
    const lines = [];

    try {
        throw new Error("bad config");
    } catch (e) {
        lines.push("Error object → name: " + e.name);
        lines.push("message: " + e.message);
        lines.push("stack (first line): " + String(e.stack).split("\n")[0]);
    }

    document.querySelector("#task3Output").textContent =
        lines.join("\n");
})();
