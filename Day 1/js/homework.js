(function () {

    function addConsoleLogs(lines) {
        lines.push('console.log("log 1");');
        lines.push('console.log("log 2");');
        lines.push("console.log(3);");
        lines.push("console.log(true);");
        lines.push('console.log("log 5");');
        lines.push("");
    }

    function addUserDetails(lines) {
        lines.push('const myName = "Vaseem";');
        lines.push("let myAge = 25;");
        lines.push('const myCity = "kochi";');
        lines.push("console.log(myName, myAge, myCity);");
    }

    const el = document.querySelector("#homeworkRefCode");

    if (!el) {
        return;
    }

    const lines = [];

    addConsoleLogs(lines);
    addUserDetails(lines);

    el.textContent = lines.join("\n");

})();