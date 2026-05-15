/**
 * Day 8 — Objects — Hands-on
 */

(function () {

    function setCode(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    function setOut(id, lines) {
        document.getElementById(id).textContent = lines.join("\n");
    }

    // —— Task 1 ——

    setCode("task1Code", [
        'const student = {',
        '    name: "Anaya",',
        "    age: 21,",
        '    city: "Jaipur",',
        '    course: "B.Tech",',
        "    marks: [72, 80, 88],",
        "};",
        "",
        "console.log(student);",
        "console.log(student.name, student.age, student.marks[0]);",
        "",
        'student.email = "anaya@example.com";',
        "student.age = 22;",
        "delete student.city;",
        "console.log(student);",
    ]);

    const student = {
        name: "Anaya",
        age: 21,
        city: "Jaipur",
        course: "B.Tech",
        marks: [72, 80, 88],
    };

    const out1 = [];

    out1.push("initial: " + JSON.stringify(student));
    out1.push(
        "name, age, first mark: " +
            student.name +
            " | " +
            student.age +
            " | " +
            student.marks[0]
    );
    student.email = "anaya@example.com";
    student.age = 22;
    delete student.city;
    out1.push("after add/update/delete: " + JSON.stringify(student));

    setOut("task1Output", out1);

    // —— Task 2 ——

    setCode("task2Code", [
        "const bankAccount = {",
        '    holder: "Aarav",',
        "    balance: 5000,",
        "    deposit(amount) {",
        "        this.balance += amount;",
        "",
        "        return this.balance;",
        "    },",
        "    withdraw(amount) {",
        "        if (amount > this.balance) {",
        '            return "Insufficient funds";',
        "        }",
        "        this.balance -= amount;",
        "",
        "        return this.balance;",
        "    },",
        "};",
        "",
        "console.log(bankAccount.deposit(1000));",
        "console.log(bankAccount.withdraw(2000));",
        "console.log(bankAccount.withdraw(10000));",
    ]);

    const bankAccount = {
        holder: "Aarav",
        balance: 5000,
        deposit(amount) {
            this.balance += amount;

            return this.balance;
        },
        withdraw(amount) {
            if (amount > this.balance) {
                return "Insufficient funds";
            }
            this.balance -= amount;

            return this.balance;
        },
    };

    setOut("task2Output", [
        "deposit(1000) → " + String(bankAccount.deposit(1000)),
        "withdraw(2000) → " + String(bankAccount.withdraw(2000)),
        "withdraw(10000) → " +
            JSON.stringify(bankAccount.withdraw(10000)),
    ]);

    // —— Task 3 ——

    setCode("task3Code", [
        "const product = {",
        "    id: 101,",
        '    name: "Laptop",',
        "    price: 60000,",
        '    brand: "Dell",',
        "    stock: 5,",
        "};",
        "",
        "const { name, price } = product;",
        "console.log(name, price);",
        "",
        "const { brand: make } = product;",
        "console.log(make);",
        "",
        'const { warranty = "1 year" } = product;',
        "console.log(warranty);",
    ]);

    const product = {
        id: 101,
        name: "Laptop",
        price: 60000,
        brand: "Dell",
        stock: 5,
    };
    const { name, price } = product;
    const { brand: make } = product;
    const { warranty = "1 year" } = product;

    setOut("task3Output", [
        "name, price → " + name + ", " + String(price),
        "make (from brand) → " + make,
        "warranty (default) → " + warranty,
    ]);

    // —— Task 4 — same shape as Task 1 after edits ——

    setCode("task4Code", [
        "// student matches Task 1 after mutations",
        "const student = {",
        '    name: "Anaya",',
        "    age: 22,",
        '    course: "B.Tech",',
        "    marks: [72, 80, 88],",
        '    email: "anaya@example.com",',
        "};",
        "",
        "console.log(Object.keys(student));",
        "console.log(Object.values(student));",
        "Object.entries(student).forEach(([k, v]) => {",
        "    console.log(`${k}: ${JSON.stringify(v)}`);",
        "});",
        "console.log(Object.keys(student).length);",
    ]);

    const studentFinal = {
        name: "Anaya",
        age: 22,
        course: "B.Tech",
        marks: [72, 80, 88],
        email: "anaya@example.com",
    };

    const out4 = [];

    out4.push("keys: " + JSON.stringify(Object.keys(studentFinal)));
    out4.push("values: " + JSON.stringify(Object.values(studentFinal)));
    out4.push("entries (forEach lines):");
    Object.entries(studentFinal).forEach(([k, v]) => {
        out4.push(`  ${k}: ${JSON.stringify(v)}`);
    });
    out4.push(
        "property count: " + String(Object.keys(studentFinal).length)
    );

    setOut("task4Output", out4);

})();
