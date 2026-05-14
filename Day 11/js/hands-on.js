/**
 * Day 11 — Events & Event Handling — Hands-on
 */

(function () {

    function setCode(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    function setOut(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    const counterBtn = document.querySelector("#counter-btn");
    const countSpan = document.querySelector("#count");
    const liveInput = document.querySelector("#live-input");
    const preview = document.querySelector("#preview");
    const regForm = document.querySelector("#reg-form");
    const nameField = document.querySelector("#name-field");
    const welcome = document.querySelector("#welcome");
    const todoList = document.querySelector("#todo-list");

    // —— Task 1 ——

    setCode("task1Code", [
        "const counterBtn = document.querySelector(\"#counter-btn\");",
        "const countSpan = document.querySelector(\"#count\");",
        "",
        "let count = 0;",
        "",
        "counterBtn.addEventListener(\"click\", () => {",
        "    count += 1;",
        "    countSpan.textContent = String(count);",
        "",
        "    if (count >= 10) {",
        '        counterBtn.textContent = "Stop clicking!";',
        "    }",
        "});",
    ]);

    let count = 0;

    counterBtn.addEventListener("click", () => {
        count += 1;
        countSpan.textContent = String(count);

        if (count >= 10) {
            counterBtn.textContent = "Stop clicking!";
        }
    });

    setOut("task1Output", [
        "Each click increments #count.",
        "When count reaches 10, #counter-btn text becomes \"Stop clicking!\".",
        "(Try the button in the playground above.)",
    ]);

    // —— Task 2 ——

    setCode("task2Code", [
        "const liveInput = document.querySelector(\"#live-input\");",
        "const preview = document.querySelector(\"#preview\");",
        "",
        "liveInput.addEventListener(\"input\", () => {",
        "    const v = liveInput.value;",
        "",
        '    preview.textContent = v.trim() === "" ? "Start typing…" : v;',
        "});",
    ]);

    liveInput.addEventListener("input", () => {
        const v = liveInput.value;

        preview.textContent = v.trim() === "" ? "Start typing…" : v;
    });

    liveInput.value = "demo";
    liveInput.dispatchEvent(new Event("input", { bubbles: true }));
    const snapFilled = preview.textContent;

    liveInput.value = "";
    liveInput.dispatchEvent(new Event("input", { bubbles: true }));
    const snapEmpty = preview.textContent;

    setOut("task2Output", [
        "After setting value \"demo\" and firing input:",
        "preview → " + JSON.stringify(snapFilled),
        "After clear + input:",
        "preview → " + JSON.stringify(snapEmpty),
    ]);

    // —— Task 3 ——

    setCode("task3Code", [
        "const regForm = document.querySelector(\"#reg-form\");",
        "const nameField = document.querySelector(\"#name-field\");",
        "const welcome = document.querySelector(\"#welcome\");",
        "",
        "regForm.addEventListener(\"submit\", (e) => {",
        "    e.preventDefault();",
        "",
        "    const name = nameField.value.trim();",
        "",
        "    welcome.textContent =",
        "        name === \"\"",
        '            ? "Please enter your name"',
        "            : `Welcome, ${name}!`;",
        "});",
    ]);

    regForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = nameField.value.trim();

        welcome.textContent =
            name === ""
                ? "Please enter your name"
                : `Welcome, ${name}!`;
    });

    const lines3 = [];

    nameField.value = "Anaya";
    regForm.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true })
    );
    lines3.push("submit with name → " + JSON.stringify(welcome.textContent));
    nameField.value = "";
    regForm.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true })
    );
    lines3.push("submit empty → " + JSON.stringify(welcome.textContent));
    welcome.textContent = "";
    nameField.value = "";

    setOut("task3Output", lines3);

    // —— Task 4 ——

    setCode("task4Code", [
        "const todoList = document.querySelector(\"#todo-list\");",
        "",
        "todoList.addEventListener(\"click\", (e) => {",
        "    if (e.target.tagName !== \"LI\") {",
        "        return;",
        "    }",
        "    e.target.classList.toggle(\"done\");",
        "});",
        "",
        "const extra = document.createElement(\"li\");",
        "",
        'extra.textContent = "Added dynamically";',
        "todoList.appendChild(extra);",
    ]);

    todoList.addEventListener("click", (e) => {
        if (e.target.tagName !== "LI") {
            return;
        }
        e.target.classList.toggle("done");
    });

    const extra = document.createElement("li");

    extra.textContent = "Added dynamically";
    todoList.appendChild(extra);

    setOut("task4Output", [
        "One listener on #todo-list; only LI targets toggle .done.",
        "Initial 3 items + bonus → " +
            String(todoList.querySelectorAll("li").length) +
            " <li> nodes.",
        "Click any line (including the new one) to toggle strikethrough.",
    ]);

})();
