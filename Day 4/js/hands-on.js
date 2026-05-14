/**
 * Day 4 — Control Flow — Hands-on
 */

(function () {

    // =========================
    // Task 1 — Grading system
    // =========================

    const task1Code = [];

    task1Code.push("const gradeFromMarks = (marks) => {");
    task1Code.push("    if (marks < 0 || marks > 100) {");
    task1Code.push('        return "Invalid marks";');
    task1Code.push("    }");
    task1Code.push('    if (marks >= 90) return "A";');
    task1Code.push('    if (marks >= 75) return "B";');
    task1Code.push('    if (marks >= 60) return "C";');
    task1Code.push('    return "F";');
    task1Code.push("};");
    task1Code.push("");
    task1Code.push('console.log(gradeFromMarks(72));  // "C"');
    task1Code.push('console.log(gradeFromMarks(95));  // "A"');
    task1Code.push('console.log(gradeFromMarks(50));  // "F"');
    task1Code.push('console.log(gradeFromMarks(75));  // "B"');
    task1Code.push('console.log(gradeFromMarks(-1));  // "Invalid marks"');
    task1Code.push('console.log(gradeFromMarks(101)); // "Invalid marks"');

    document.getElementById("task1Code").textContent =
        task1Code.join("\n");

    const task1Lines = [];

    const gradeFromMarks = (marks) => {
        if (marks < 0 || marks > 100) {
            return "Invalid marks";
        }

        if (marks >= 90) return "A";
        if (marks >= 75) return "B";
        if (marks >= 60) return "C";

        return "F";
    };

    task1Lines.push(`gradeFromMarks(72) → ${gradeFromMarks(72)}`);
    task1Lines.push(`gradeFromMarks(95) → ${gradeFromMarks(95)}`);
    task1Lines.push(`gradeFromMarks(50) → ${gradeFromMarks(50)}`);
    task1Lines.push(`gradeFromMarks(75) → ${gradeFromMarks(75)}`);
    task1Lines.push("");
    task1Lines.push("Bonus — invalid range:");
    task1Lines.push(`gradeFromMarks(-1) → ${gradeFromMarks(-1)}`);
    task1Lines.push(`gradeFromMarks(101) → ${gradeFromMarks(101)}`);

    document.getElementById("task1Output").textContent =
        task1Lines.join("\n");


    // =========================
    // Task 2 — Day type (switch)
    // =========================

    const task2Code = [];

    task2Code.push("const dayType = (day) => {");
    task2Code.push("    switch (day) {");
    task2Code.push('    case "Monday":');
    task2Code.push('    case "Tuesday":');
    task2Code.push('    case "Wednesday":');
    task2Code.push('    case "Thursday":');
    task2Code.push('    case "Friday":');
    task2Code.push('        return "Weekday";');
    task2Code.push("");
    task2Code.push('    case "Saturday":');
    task2Code.push('    case "Sunday":');
    task2Code.push('        return "Weekend";');
    task2Code.push("");
    task2Code.push("    default:");
    task2Code.push('        return "Invalid day";');
    task2Code.push("    }");
    task2Code.push("};");
    task2Code.push("");
    task2Code.push('console.log(dayType("Wednesday"));  // Weekday');
    task2Code.push('console.log(dayType("Monday"));     // Weekday');
    task2Code.push('console.log(dayType("Saturday"));   // Weekend');
    task2Code.push('console.log(dayType("Holiday"));    // Invalid day');

    document.getElementById("task2Code").textContent =
        task2Code.join("\n");

    const task2Lines = [];

    const dayType = (day) => {
        switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "Weekday";

        case "Saturday":
        case "Sunday":
            return "Weekend";

        default:
            return "Invalid day";
        }
    };

    task2Lines.push(`dayType("Wednesday") → ${dayType("Wednesday")}`);
    task2Lines.push(`dayType("Monday") → ${dayType("Monday")}`);
    task2Lines.push(`dayType("Saturday") → ${dayType("Saturday")}`);
    task2Lines.push(`dayType("Holiday") → ${dayType("Holiday")}`);
    task2Lines.push("");
    task2Lines.push("// Weekdays share one path (fall-through, then break).");

    document.getElementById("task2Output").textContent =
        task2Lines.join("\n");


    // =========================
    // Task 3 — Truthy / falsy detective
    // =========================

    const task3Code = [];

    task3Code.push("// Predict, then verify with if (value) { … } else { … }");
    task3Code.push("");
    task3Code.push("const probe = (label, value) => {");
    task3Code.push("    if (value) {");
    task3Code.push('        console.log(label + " → runs (truthy)");');
    task3Code.push("    } else {");
    task3Code.push('        console.log(label + " → skipped (falsy)");');
    task3Code.push("    }");
    task3Code.push("};");
    task3Code.push("");
    task3Code.push('probe("0", 0);');
    task3Code.push("probe('\"0\"', \"0\");");
    task3Code.push("probe('\"\"', \"\");");
    task3Code.push("probe('\" \"', \" \");");
    task3Code.push('probe("null", null);');
    task3Code.push("probe(\"undefined\", undefined);");
    task3Code.push("probe(\"NaN\", NaN);");
    task3Code.push("probe(\"[]\", []);");
    task3Code.push("probe(\"{}\", {});");
    task3Code.push("probe('\"false\"', \"false\");");

    document.getElementById("task3Code").textContent =
        task3Code.join("\n");

    const task3Lines = [];

    const probe = (label, v) => {
        const runs = v ? "runs (truthy)" : "skipped (falsy)";

        task3Lines.push(`${label} → ${runs}`);
    };

    probe("0", 0);
    probe('"0"', "0");
    probe('""', "");
    probe('" " (space)', " ");
    probe("null", null);
    probe("undefined", undefined);
    probe("NaN", NaN);
    probe("[]", []);
    probe("{}", {});
    probe('"false"', "false");
    task3Lines.push("");
    task3Lines.push("The 6 falsy values: false, 0, \"\", null, undefined, NaN");

    document.getElementById("task3Output").textContent =
        task3Lines.join("\n");


    // =========================
    // Bonus — Guard clauses refactor
    // =========================

    const task4Code = [];

    task4Code.push("function canComment(user) {");
    task4Code.push("    if (!user) return;");
    task4Code.push("    if (user.isBanned) return;");
    task4Code.push("    if (user.age < 13) return;");
    task4Code.push("");
    task4Code.push('    console.log("Comment allowed");');
    task4Code.push("}");
    task4Code.push("");
    task4Code.push("canComment({ age: 20, isBanned: false });  // logs");
    task4Code.push("canComment({ age: 20, isBanned: true });   // silent");
    task4Code.push("canComment(null);                          // silent");

    document.getElementById("task4Code").textContent =
        task4Code.join("\n");

    const task4Lines = [];

    const canComment = (user) => {
        if (!user) return;

        if (user.isBanned) return;

        if (user.age < 13) return;

        console.log("Comment allowed");
    };

    task4Lines.push("canComment({ age: 20, isBanned: false }) →");
    task4Lines.push("Comment allowed");
    task4Lines.push("");
    task4Lines.push("canComment({ age: 20, isBanned: true }) → (no log)");
    task4Lines.push("");
    task4Lines.push("canComment(null) → (no log)");

    document.getElementById("task4Output").textContent =
        task4Lines.join("\n");

})();
