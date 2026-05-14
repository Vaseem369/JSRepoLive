/**
 * Day 10 — DOM Manipulation Basics — Homework (reference solutions)
 */

(function () {

    function setCode(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    function setOut(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    const p = document.querySelector("#hw-demo-p");

    // —— Task 1 ——

    setCode("task1Code", [
        "const p = document.querySelector(\"#hw-demo-p\");",
        "",
        'p.textContent = "Step 1: plain text.";',
        'p.innerHTML = "Step 2: <strong>HTML</strong> inside.";',
        'p.textContent = "Step 3: plain text again (tags escaped).";',
    ]);

    const steps = [];

    p.textContent = "Step 1: plain text.";
    steps.push("after textContent: innerHTML → " + JSON.stringify(p.innerHTML));
    p.innerHTML = "Step 2: <strong>HTML</strong> inside.";
    steps.push("after innerHTML:  innerHTML → " + JSON.stringify(p.innerHTML));
    p.textContent = "Step 3: plain text again (tags escaped).";
    steps.push("after textContent: innerHTML → " + JSON.stringify(p.innerHTML));
    steps.push("visible textContent → " + JSON.stringify(p.textContent));

    setOut("task1Output", steps);

    // —— Task 2 ——

    setCode("task2Code", [
        "const items = document.querySelectorAll(\"#hw-list li\");",
        "",
        "items.forEach((li, index) => {",
        "    if (index % 2 === 0) {",
        "        li.classList.add(\"even\");",
        "    }",
        "});",
    ]);

    const items = document.querySelectorAll("#hw-list li");

    items.forEach((li, index) => {
        if (index % 2 === 0) {
            li.classList.add("even");
        }
    });

    const evenLabels = [];

    items.forEach((li, index) => {
        evenLabels.push(
            index +
                ": " +
                li.textContent.trim() +
                " → even? " +
                li.classList.contains("even")
        );
    });

    setOut("task2Output", evenLabels);

    // —— Task 3 ——

    setCode("task3Code", [
        "const btn = document.createElement(\"button\");",
        "",
        'btn.textContent = "Click me";',
        "btn.id = \"hw-dynamic-btn\";",
        "btn.className = \"hw-demo-btn\";",
        "document.body.appendChild(btn);",
    ]);

    const existing = document.getElementById("hw-dynamic-btn");

    if (existing) {
        existing.remove();
    }

    const btn = document.createElement("button");

    btn.textContent = "Click me";
    btn.id = "hw-dynamic-btn";
    btn.className = "hw-demo-btn";
    document.body.appendChild(btn);

    setOut("task3Output", [
        "button.id → " + JSON.stringify(btn.id),
        "button.className → " + JSON.stringify(btn.className),
        "button.parentElement → " + btn.parentElement.tagName.toLowerCase(),
    ]);

    // —— Task 4 ——

    setCode("task4Code", [
        "const products = [",
        '    { name: "Mouse", price: 899 },',
        '    { name: "Keyboard", price: 2499 },',
        '    { name: "USB-C Hub", price: 3200 },',
        "];",
        "",
        "const mount = document.querySelector(\"#hw-cards\");",
        "",
        "products.forEach((prod) => {",
        "    const card = document.createElement(\"div\");",
        "",
        "    card.className = \"hw-card\";",
        "",
        "    const title = document.createElement(\"strong\");",
        "",
        "    title.textContent = prod.name;",
        "",
        "    const price = document.createElement(\"span\");",
        "",
        "    price.textContent = ` ₹${prod.price}`;",
        "    card.append(title, price);",
        "    mount.appendChild(card);",
        "});",
    ]);

    const mount = document.querySelector("#hw-cards");

    mount.textContent = "";
    const products = [
        { name: "Mouse", price: 899 },
        { name: "Keyboard", price: 2499 },
        { name: "USB-C Hub", price: 3200 },
    ];

    products.forEach((prod) => {
        const card = document.createElement("div");

        card.className = "hw-card";

        const title = document.createElement("strong");

        title.textContent = prod.name;

        const price = document.createElement("span");

        price.textContent = ` ₹${prod.price}`;
        card.append(title, price);
        mount.appendChild(card);
    });

    setOut("task4Output", [
        "cards built → " + String(mount.querySelectorAll(".hw-card").length),
        "mount.innerText → " + JSON.stringify(mount.innerText.trim()),
    ]);

})();
