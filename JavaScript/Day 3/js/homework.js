/**
 * Day 3 — Operators & Core JS Concepts — Homework
 */

(function () {

    // =========================
    // Task 1 — GST calculator
    // =========================

    const task1Lines = [];
    const task1Code = [];

    const price = 1500;
    const gstRate = 18;

    const gst = price * gstRate / 100;
    const total = price + gst;

    task1Code.push("const price = 1500;");
    task1Code.push("const gstRate = 18;");
    task1Code.push("");
    task1Code.push("const gst = price * gstRate / 100;");
    task1Code.push("const total = price + gst;");
    task1Code.push("");
    task1Code.push("console.log(`Price: ₹${price}`);");
    task1Code.push("console.log(`GST: ₹${gst}`);");
    task1Code.push("console.log(`Total: ₹${total}`);");

    task1Lines.push(`Price: ₹${price}`);
    task1Lines.push(`GST: ₹${gst}`);
    task1Lines.push(`Total: ₹${total}`);

    document.getElementById("task1Code").textContent =
        task1Code.join("\n");

    document.getElementById("task1Output").textContent =
        task1Lines.join("\n");


    // =========================
    // Task 2 — == vs === table
    // =========================

    const task2Code = [
        "// 5 == \"5\"        → true     | 5 === \"5\"        → false",
        "// 0 == false       → true     | 0 === false       → false",
        "// null == undefined→ true     | null === undefined→ false",
        "// \"\" == false      → true     | \"\" === false      → false",
        "// \"1\" == 1         → true     | \"1\" === 1         → false",
        "// true == 1        → true     | true === 1        → false",
        "// false == 0       → true     | false === 0       → false",
        "// \"0\" == false     → true     | \"0\" === false     → false",
        "// [] == false      → true     | [] === false      → false",
        "// [1] == \"1\"       → true     | [1] === \"1\"       → false",
    ];

    document.getElementById("task2Code").textContent =
        task2Code.join("\n");

    document.getElementById("task2Output").textContent =
        "Refer code comments for comparison results";


    // =========================
    // Task 3 — adult / minor ternary
    // =========================

    const task3Code = [];
    const task3Lines = [];

    const ages = [16, 17, 18, 25, 65];

    task3Code.push(
        'const label = (age) => age >= 18 ? "adult" : "minor";'
    );
    task3Code.push("");

    ages.forEach((a) => {
        task3Code.push(`// age ${a}`);
        task3Code.push(
            `console.log(label(${a}));  // → ${a >= 18 ? "adult" : "minor"}`
        );
        task3Code.push("");
    });

    ages.forEach((a) => {
        task3Lines.push(`${a} → ${a >= 18 ? "adult" : "minor"}`);
    });

    document.getElementById("task3Code").textContent =
        task3Code.join("\n").trimEnd();

    document.getElementById("task3Output").textContent =
        task3Lines.join("\n");


    // =========================
    // Task 4 — Discount calculator
    // =========================

    const task4Code = [];
    const task4Lines = [];

    const isMember = true;
    const totalCart = 1200;

    const discount =
        isMember && totalCart > 1000 ? "10% discount" : "No discount";

    task4Code.push("const isMember = true;");
    task4Code.push("const total = 1200;");
    task4Code.push("");
    task4Code.push(
        "const discount = isMember && total > 1000 ? \"10% discount\" : \"No discount\";"
    );
    task4Code.push("console.log(discount);");

    task4Lines.push(discount);

    document.getElementById("task4Code").textContent =
        task4Code.join("\n");

    document.getElementById("task4Output").textContent =
        task4Lines.join("\n");

})();
