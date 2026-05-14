/**
 * Day 3 — Operators & Core JS Concepts — Hands-on
 */

(function () {

    // =========================
    // Task 1 — GST Calculator
    // =========================

    const task1Lines = [];

    const price1 = 850;
    const gst1 = price1 * 0.18;
    const total1 = price1 + gst1;

    task1Lines.push("const price1 = 850;");
    task1Lines.push(`const gst1 = price1 * 0.18 → ${gst1}`);
    task1Lines.push(`const total1 = price1 + gst1 → ${total1}`);
    task1Lines.push(
        "`Price: ₹${price1}, GST: ₹${gst1}, Total: ₹${total1}` → " +
            `Price: ₹${price1}, GST: ₹${gst1}, Total: ₹${total1}`
    );

    task1Lines.push("");

    const price2 = 1234.5;
    const gst2 = price2 * 0.18;
    const total2 = price2 + gst2;

    task1Lines.push("const price2 = 1234.5;");
    task1Lines.push(`const gst2 = price2 * 0.18 → ${gst2}`);
    task1Lines.push(
        "gst2.toFixed(2) → " + gst2.toFixed(2)
    );
    task1Lines.push(
        "const total2 = price2 + gst2 → " + total2
    );
    task1Lines.push(
        "total2.toFixed(2) → " + total2.toFixed(2)
    );
    task1Lines.push(
        "`Price: ₹${price2}, GST: ₹${gst2.toFixed(2)}, Total: ₹${total2.toFixed(2)}` → " +
            "Price: ₹" + price2 +
            ", GST: ₹" + gst2.toFixed(2) +
            ", Total: ₹" + total2.toFixed(2)
    );

    document.getElementById("task1Output").textContent =
        task1Lines.join("\n");


    // =========================
    // Task 2 — == vs ===
    // =========================

    const task2Lines = [];

    task2Lines.push(`5 == "5" → ${5 == "5"}`);
    task2Lines.push(`5 === "5" → ${5 === "5"}`);
    task2Lines.push("");
    task2Lines.push(`0 == false → ${0 == false}`);
    task2Lines.push(`0 === false → ${0 === false}`);
    task2Lines.push("");
    task2Lines.push(`null == undefined → ${null == undefined}`);
    task2Lines.push(`null === undefined → ${null === undefined}`);
    task2Lines.push("");
    task2Lines.push(`"" == false → ${"" == false}`);
    task2Lines.push(`"" === false → ${"" === false}`);
    task2Lines.push("");
    task2Lines.push(`"abc" == "abc" → ${"abc" == "abc"}`);
    task2Lines.push(`"abc" === "abc" → ${"abc" === "abc"}`);
    task2Lines.push("");
    task2Lines.push("Summary (same pairs on one line):");
    task2Lines.push(
        `5 == "5" → ${5 == "5"} | 5 === "5" → ${5 === "5"}`
    );
    task2Lines.push(
        `0 == false → ${0 == false} | 0 === false → ${0 === false}`
    );
    task2Lines.push(
        `null == undefined → ${null == undefined} | null === undefined → ${null === undefined}`
    );
    task2Lines.push(
        `"" == false → ${"" == false} | "" === false → ${"" === false}`
    );
    task2Lines.push(
        `"abc" == "abc" → ${"abc" == "abc"} | "abc" === "abc" → ${"abc" === "abc"}`
    );

    document.getElementById("task2Output").textContent =
        task2Lines.join("\n");


    // =========================
    // Task 3 — Logical Operators
    // =========================

    const task3Lines = [];

    const age = 22;
    const hasEmail = true;

    const canRegister = age >= 18 && hasEmail;

    const userName = "";
    const displayName = userName || "Guest";

    const isLoggedIn = false;
    const isLoggedOut = !isLoggedIn;

    task3Lines.push("const age = 22;");
    task3Lines.push("const hasEmail = true;");
    task3Lines.push(`age >= 18 → ${age >= 18}`);
    task3Lines.push(`age >= 18 && hasEmail → ${age >= 18 && hasEmail}`);
    task3Lines.push(`canRegister → ${canRegister}`);
    task3Lines.push("");
    task3Lines.push('const userName = "";');
    task3Lines.push(`userName || "Guest" → ${displayName}`);
    task3Lines.push("");
    task3Lines.push("const isLoggedIn = false;");
    task3Lines.push(`!isLoggedIn → ${!isLoggedIn}`);
    task3Lines.push(`isLoggedOut → ${isLoggedOut}`);
    task3Lines.push("");
    task3Lines.push("Labels:");
    task3Lines.push(`canRegister: ${canRegister}`);
    task3Lines.push(`displayName: ${displayName}`);
    task3Lines.push(`isLoggedOut: ${isLoggedOut}`);

    document.getElementById("task3Output").textContent =
        task3Lines.join("\n");


    // =========================
    // Bonus — Ternary Practice
    // =========================

    const task4Lines = [];

    const feeFor = (a) => (a >= 65 ? 0 : 100);

    task4Lines.push("// const fee = someAge >= 65 ? 0 : 100");
    task4Lines.push(`age = 70 → (70 >= 65 ? 0 : 100) → ${feeFor(70)}`);
    task4Lines.push(`Age 70 → Fee: ₹${feeFor(70)}`);
    task4Lines.push(`age = 30 → (30 >= 65 ? 0 : 100) → ${feeFor(30)}`);
    task4Lines.push(`Age 30 → Fee: ₹${feeFor(30)}`);
    task4Lines.push("");

    const age70 = 70;
    const age30 = 30;

    task4Lines.push("`Discount: ${age >= 65 ? \"Yes\" : \"No\"}`");
    task4Lines.push(
        `age = 70 → Discount: ${age70 >= 65 ? "Yes" : "No"}`
    );
    task4Lines.push(
        `age = 30 → Discount: ${age30 >= 65 ? "Yes" : "No"}`
    );
    task4Lines.push("");

    const tier = (score) =>
        score >= 80 ? "high" : score >= 50 ? "medium" : "low";

    task4Lines.push(
        "score >= 80 ? \"high\" : score >= 50 ? \"medium\" : \"low\""
    );
    task4Lines.push(`score = 85 → ${tier(85)}`);
    task4Lines.push(`score = 60 → ${tier(60)}`);
    task4Lines.push(`score = 30 → ${tier(30)}`);
    task4Lines.push("");
    task4Lines.push("Summary:");
    task4Lines.push(`Age 70 → Fee: ₹${feeFor(70)}`);
    task4Lines.push(`Age 30 → Fee: ₹${feeFor(30)}`);
    task4Lines.push(
        `Discount: ${age70 >= 65 ? "Yes" : "No"}`
    );
    task4Lines.push(
        `Discount: ${age30 >= 65 ? "Yes" : "No"}`
    );
    task4Lines.push(`Score 85 → ${tier(85)}`);
    task4Lines.push(`Score 60 → ${tier(60)}`);
    task4Lines.push(`Score 30 → ${tier(30)}`);

    document.getElementById("task4Output").textContent =
        task4Lines.join("\n");

})();
