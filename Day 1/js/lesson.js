// Day 1 — Welcome & Variables — lesson (example + reference output via .push)

(function () {
    function setPre(id, lines) {
        const el = document.querySelector(id);

        if (el) {
            el.textContent = lines.join("\n");
        }
    }

    const hello = [];

    hello.push('console.log("Hello, Kochi!");');
    hello.push('console.log("My name is Vaseem");');
    hello.push('console.log("I\'m learning JavaScript");');
    setPre("#topic2HelloCode", hello);

    const puzzle = [];

    puzzle.push('console.log("hi");');
    puzzle.push("console.log(1 + 1);");
    puzzle.push('console.log("1" + 1);');
    setPre("#topic2PuzzleCode", puzzle);

    const guessLines = [];

    guessLines.push("hi");
    guessLines.push(String(1 + 1));
    guessLines.push(String("1" + 1));
    setPre("#topic2GuessOutput", guessLines);

    const topic3Example = [];

    topic3Example.push("let age = 25;");
    topic3Example.push("console.log(age);");
    topic3Example.push("");
    topic3Example.push("age = 26;");
    topic3Example.push("console.log(age);");
    topic3Example.push("");
    topic3Example.push('const name = "Priya";');
    topic3Example.push("console.log(name);");
    setPre("#topic3ExampleCode", topic3Example);

    const t3 = document.querySelector("#topic3Output");

    if (!t3) {
        return;
    }

    const run = [];
    let age = 25;

    run.push(String(age));
    age = 26;
    run.push(String(age));

    const learner = "Priya";

    run.push(learner);

    const locked = 1;

    try {
        locked = 2;
    } catch (e) {
        run.push(`${e.name}: ${e.message}`);
    }

    t3.textContent = run.join("\n");
})();
