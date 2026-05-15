/**
 * Day 11 — Events & Event Handling — Homework (reference solutions)
 */

(function () {

    function setCode(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    function setOut(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    const bgBtn = document.querySelector("#hw-random-bg");
    const lenInput = document.querySelector("#hw-len-check");
    const sumForm = document.querySelector("#hw-sum-form");
    const sumA = document.querySelector("#hw-a");
    const sumB = document.querySelector("#hw-b");
    const sumResult = document.querySelector("#hw-sum-result");
    const items = document.querySelector("#hw-items");

    // —— Task 1 ——

    setCode("task1Code", [
        "document.querySelector(\"#hw-random-bg\").addEventListener(\"click\", () => {",
        "    const r = Math.floor(Math.random() * 256);",
        "    const g = Math.floor(Math.random() * 256);",
        "    const b = Math.floor(Math.random() * 256);",
        "",
        "    document.body.style.background = `rgb(${r}, ${g}, ${b})`;",
        "});",
    ]);

    bgBtn.addEventListener("click", () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        document.body.style.background = `rgb(${r}, ${g}, ${b})`;
    });

    setOut("task1Output", [
        "Each click picks random integers 0–255 for R, G, B and sets",
        "document.body.style.background to rgb(r, g, b).",
        "(Use the button in the homework area.)",
    ]);

    // —— Task 2 ——

    setCode("task2Code", [
        "const lenInput = document.querySelector(\"#hw-len-check\");",
        "",
        "lenInput.addEventListener(\"input\", () => {",
        "    const ok = lenInput.value.length >= 3;",
        "",
        "    lenInput.classList.toggle(\"bad\", !ok);",
        "    lenInput.classList.toggle(\"good\", ok);",
        "});",
    ]);

    lenInput.addEventListener("input", () => {
        const ok = lenInput.value.length >= 3;

        lenInput.classList.toggle("bad", !ok);
        lenInput.classList.toggle("good", ok);
    });

    lenInput.value = "ab";
    lenInput.dispatchEvent(new Event("input", { bubbles: true }));
    const shortState =
        "length " +
        lenInput.value.length +
        " → classes: " +
        (lenInput.classList.contains("bad") ? "bad" : "") +
        (lenInput.classList.contains("good") ? "good" : "");

    lenInput.value = "abc";
    lenInput.dispatchEvent(new Event("input", { bubbles: true }));
    const longState =
        "length " +
        lenInput.value.length +
        " → classes: " +
        (lenInput.classList.contains("good") ? "good" : "");

    lenInput.value = "";
    lenInput.classList.remove("bad", "good");
    lenInput.dispatchEvent(new Event("input", { bubbles: true }));

    setOut("task2Output", [shortState, longState]);

    // —— Task 3 ——

    setCode("task3Code", [
        "const sumForm = document.querySelector(\"#hw-sum-form\");",
        "const sumResult = document.querySelector(\"#hw-sum-result\");",
        "",
        "sumForm.addEventListener(\"submit\", (e) => {",
        "    e.preventDefault();",
        "",
        "    const a = Number(document.querySelector(\"#hw-a\").value);",
        "    const b = Number(document.querySelector(\"#hw-b\").value);",
        "",
        "    sumResult.textContent = `Sum: ${a + b}`;",
        "});",
    ]);

    sumForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const a = Number(sumA.value);
        const b = Number(sumB.value);

        sumResult.textContent = `Sum: ${a + b}`;
    });

    sumA.value = "5";
    sumB.value = "7";
    sumForm.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true })
    );
    const snap = sumResult.textContent;

    sumResult.textContent = "";
    sumA.value = "12";
    sumB.value = "30";

    setOut("task3Output", [
        "After programmatic submit with 5 and 7:",
        snap,
        "(Default inputs restored to 12 and 30.)",
    ]);

    // —— Task 4 ——

    setCode("task4Code", [
        "const items = document.querySelector(\"#hw-items\");",
        "const log = [];",
        "",
        "items.addEventListener(\"click\", (e) => {",
        "    const li = e.target.closest(\"li\");",
        "",
        "    if (!li || !items.contains(li)) {",
        "        return;",
        "    }",
        "",
        "    log.push(li.textContent.trim());",
        "    console.log(li.textContent.trim());",
        "});",
        "",
        "const sixth = document.createElement(\"li\");",
        "",
        "sixth.textContent = \"Foxtrot (added in JS)\";",
        "items.appendChild(sixth);",
    ]);

    const log = [];

    items.addEventListener("click", (e) => {
        const li = e.target.closest("li");

        if (!li || !items.contains(li)) {
            return;
        }

        log.push(li.textContent.trim());
        console.log(li.textContent.trim());
    });

    const sixth = document.createElement("li");

    sixth.textContent = "Foxtrot (added in JS)";
    items.appendChild(sixth);

    items.querySelectorAll("li").forEach((li) => {
        li.click();
    });

    setOut("task4Output", [
        "Simulated click on each <li> (delegation log order):",
        log.join("\n"),
    ]);

})();
