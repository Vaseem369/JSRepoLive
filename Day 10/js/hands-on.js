/**
 * Day 10 — DOM Manipulation Basics — Hands-on
 */

(function () {

    function setCode(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    function setOut(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    const title = document.querySelector("#title");
    const namesList = document.querySelector("#names-list");
    const cards = document.querySelector("#cards");

    // —— Task 1 ——

    setCode("task1Code", [
        "const title = document.querySelector(\"#title\");",
        "",
        'title.textContent = "Hello, Priya!";',
        'title.style.color = "crimson";',
        'title.style.fontFamily = "Georgia, serif";',
    ]);

    title.textContent = "Hello, Priya!";
    title.style.color = "crimson";
    title.style.fontFamily = "Georgia, serif";

    setOut("task1Output", [
        "title.textContent → " + JSON.stringify(title.textContent),
        "title.style.color → " + title.style.color,
        "title.style.fontFamily → " + title.style.fontFamily,
    ]);

    // —— Task 2 ——

    setCode("task2Code", [
        "const hadDarkBefore = document.body.classList.contains(\"dark\");",
        "document.body.classList.toggle(\"dark\");",
        "const afterFirst = document.body.classList.contains(\"dark\");",
        "document.body.classList.toggle(\"dark\");",
        "const afterSecond = document.body.classList.contains(\"dark\");",
    ]);

    const hadDarkBefore = document.body.classList.contains("dark");

    document.body.classList.toggle("dark");
    const afterFirst = document.body.classList.contains("dark");

    document.body.classList.toggle("dark");
    const afterSecond = document.body.classList.contains("dark");

    setOut("task2Output", [
        "contains('dark') before any toggle → " + String(hadDarkBefore),
        "after 1st toggle → " + String(afterFirst),
        "after 2nd toggle → " + String(afterSecond),
        "(two toggles return the page to the starting theme if it began off.)",
    ]);

    // —— Task 3 ——

    setCode("task3Code", [
        "const names = [\"Priya\", \"Aarav\", \"Riya\", \"Kabir\"];",
        "const list = document.querySelector(\"#names-list\");",
        "",
        "names.forEach((name, i) => {",
        "    const li = document.createElement(\"li\");",
        "",
        "    li.className = \"name-item\";",
        "    li.textContent = `${i + 1}. ${name}`;",
        "    list.appendChild(li);",
        "});",
    ]);

    const names = ["Priya", "Aarav", "Riya", "Kabir"];

    names.forEach((name, i) => {
        const li = document.createElement("li");

        li.className = "name-item";
        li.textContent = `${i + 1}. ${name}`;
        namesList.appendChild(li);
    });

    setOut("task3Output", [
        "li count → " + String(namesList.querySelectorAll("li").length),
        "first li text → " +
            JSON.stringify(namesList.querySelector("li").textContent),
        "last li text → " +
            JSON.stringify(
                namesList.querySelector("li:last-child").textContent
            ),
    ]);

    // —— Task 4 ——

    setCode("task4Code", [
        "const product = {",
        '    name: "Laptop",',
        "    price: 60000,",
        '    brand: "Dell",',
        "};",
        "",
        "const card = document.createElement(\"div\");",
        "",
        "card.className = \"card\";",
        "",
        "const h3 = document.createElement(\"h3\");",
        "",
        "h3.textContent = product.name;",
        "",
        "const p = document.createElement(\"p\");",
        "",
        "p.textContent = product.brand;",
        "",
        "const span = document.createElement(\"span\");",
        "",
        "span.textContent = `₹${product.price}`;",
        "",
        "card.append(h3, p, span);",
        "document.querySelector(\"#cards\").appendChild(card);",
    ]);

    const product = {
        name: "Laptop",
        price: 60000,
        brand: "Dell",
    };

    const card = document.createElement("div");

    card.className = "card";

    const h3 = document.createElement("h3");

    h3.textContent = product.name;

    const p = document.createElement("p");

    p.textContent = product.brand;

    const span = document.createElement("span");

    span.textContent = `₹${product.price}`;

    card.append(h3, p, span);
    cards.appendChild(card);

    setOut("task4Output", [
        "card.className → " + JSON.stringify(card.className),
        "card children → " + String(card.children.length),
        "card text snapshot → " + JSON.stringify(card.innerText.trim()),
    ]);

})();
