sap.ui.define([], function () {
    "use strict";

    var aEmployees = [];

    for (var i = 1; i <= 100; i++) {

        aEmployees.push({

            id: "EMP" + (1000 + i),

            name: "Employee " + i,

            department: [
                "HR",
                "Finance",
                "IT",
                "Payroll"
            ][i % 4],

            designation: [
                "Consultant",
                "Manager",
                "Developer",
                "Analyst"
            ][i % 4],

            paymentStatus:
                i % 2 === 0 ? "Paid" : "Pending",

            basic: String(30000 + i * 1000),

            hra: String(8000 + i * 200),

            bonus: String(2000 + i * 100),

            pf: String(1800 + i * 10),

            tax: String(2500 + i * 15),

            totalDeduction: String(
                (1800 + i * 10) +
                (2500 + i * 15)
            ),

            netSalary: String(
                (30000 + i * 1000) +
                (8000 + i * 200) +
                (2000 + i * 100) -
                (
                    (1800 + i * 10) +
                    (2500 + i * 15)
                )
            )
        });
    }

    return {
        employees: aEmployees
    };
});