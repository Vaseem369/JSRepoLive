// Day 1 — Welcome & Variables — hands-on (reference code + output built with .push)

(function () {
    function setPre(id, lines) {
        const el = document.querySelector(id);

        if (el) {
            el.textContent = lines.join("\n");
        }
    }

    const task1Code = [];

    task1Code.push('console.log("Hello, World!");');
    task1Code.push('const myName = "Priya";');
    task1Code.push("console.log(myName);");
    task1Code.push('console.log(myName + " is learning JS");');
    setPre("#task1Code", task1Code);

    const task1Out = [];

    task1Out.push("Hello, World!");
    task1Out.push("Priya");
    task1Out.push("Priya is learning JS");
    setPre("#task1Output", task1Out);

    const task2Code = [];

    task2Code.push("let age = 25;");
    task2Code.push("console.log(age);");
    task2Code.push("age = 26;");
    task2Code.push("console.log(age);");
    task2Code.push("const PI = 3.14;");
    task2Code.push("console.log(PI);");
    task2Code.push("PI = 3.15;");
    task2Code.push("let cityName;");
    task2Code.push("console.log(cityName);");
    task2Code.push('cityName = "Jaipur";');
    task2Code.push("console.log(cityName);");
    setPre("#task2Code", task2Code);

    const task2Out = [];
    let age = 25;

    task2Out.push(String(age));
    age = 26;
    task2Out.push(String(age));

    const PI = 3.14;

    task2Out.push(String(PI));

    try {
        (function () {
            const localPi = 3.14;

            localPi = 3.15;
        })();
    } catch (e) {
        task2Out.push(`${e.name}: ${e.message}`);
    }

    let cityName;

    task2Out.push(String(cityName));
    cityName = "Jaipur";
    task2Out.push(cityName);
    setPre("#task2Output", task2Out);

    const task3Code = [];

    task3Code.push("{ let x = 10; console.log(x); }");
    task3Code.push("");
    task3Code.push("console.log(x);");
    task3Code.push("");
    task3Code.push('if (true) { let inside = "hi"; console.log(inside); }');
    task3Code.push("");
    task3Code.push("console.log(inside);");
    setPre("#task3Code", task3Code);

    const task3Out = [];

    {
        let x = 10;

        task3Out.push(String(x));
    }

    try {
        task3Out.push(String(x));
    } catch (e) {
        task3Out.push(`${e.name}: ${e.message}`);
    }

    if (true) {
        let inside = "hi";

        task3Out.push(inside);
    }

    try {
        task3Out.push(String(inside));
    } catch (e) {
        task3Out.push(`${e.name}: ${e.message}`);
    }

    setPre("#task3Output", task3Out);
})();
