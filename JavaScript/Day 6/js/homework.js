/**
 * Day 6 — Functions — Homework
 */

(function () {

    // =========================
    // Task 1 — kmToMiles
    // =========================

    const task1Code = [];
    const task1Lines = [];

    task1Code.push("function kmToMiles(km) {");
    task1Code.push("    return km * 0.621;");
    task1Code.push("}");
    task1Code.push("console.log(kmToMiles(10));");

    const kmToMiles = (km) => km * 0.621;

    task1Lines.push(`kmToMiles(10) → ${kmToMiles(10)}`);

    document.getElementById("task1Code").textContent =
        task1Code.join("\n");

    document.getElementById("task1Output").textContent =
        task1Lines.join("\n");


    // =========================
    // Task 2 — gstAmount
    // =========================

    const task2Code = [];
    const task2Lines = [];

    task2Code.push("function gstAmount(price, rate = 18) {");
    task2Code.push("    return price * rate / 100;");
    task2Code.push("}");
    task2Code.push("console.log(gstAmount(1000));");
    task2Code.push("console.log(gstAmount(1000, 12));");

    const gstAmount = (price, rate = 18) => price * rate / 100;

    task2Lines.push(`gstAmount(1000) → ${gstAmount(1000)}`);
    task2Lines.push(`gstAmount(1000, 12) → ${gstAmount(1000, 12)}`);

    document.getElementById("task2Code").textContent =
        task2Code.join("\n");

    document.getElementById("task2Output").textContent =
        task2Lines.join("\n");


    // =========================
    // Task 3 — fullName
    // =========================

    const task3Code = [];
    const task3Lines = [];

    task3Code.push("function fullName(first, last) {");
    task3Code.push('    return first + " " + last;');
    task3Code.push("}");
    task3Code.push('console.log(fullName("Priya", "Sharma"));');

    const fullName = (first, last) => first + " " + last;

    task3Lines.push(`fullName("Priya", "Sharma") → ${fullName("Priya", "Sharma")}`);

    document.getElementById("task3Code").textContent =
        task3Code.join("\n");

    document.getElementById("task3Output").textContent =
        task3Lines.join("\n");


    // =========================
    // Task 4 — isAdult
    // =========================

    const task4Code = [];
    const task4Lines = [];

    task4Code.push("function isAdult(age) {");
    task4Code.push("    return age >= 18;");
    task4Code.push("}");
    task4Code.push("console.log(isAdult(20));");
    task4Code.push("console.log(isAdult(15));");

    const isAdult = (age) => age >= 18;

    task4Lines.push(`isAdult(20) → ${isAdult(20)}`);
    task4Lines.push(`isAdult(15) → ${isAdult(15)}`);

    document.getElementById("task4Code").textContent =
        task4Code.join("\n");

    document.getElementById("task4Output").textContent =
        task4Lines.join("\n");

})();
