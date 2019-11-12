$("#loan").on("click", () => sendMessage({ method: SELECTLOAN, data: "debtConsolidation_creditCard" }))
$("#first-name").on("click", () => sendMessage({ method: SETFIRSTNAME, data: "John" }));
$("#last-name").on("click", () => sendMessage({ method: SETLASTNAME, data: "Maze" }));
$("#submit").on("click", () => sendMessage({ method: SUBMIT }));