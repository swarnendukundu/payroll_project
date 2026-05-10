sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageBox"
], function (Controller,MessageBox) {
    "use strict";

    return Controller.extend("payroll.controller.EmployeeDetail", {

        onInit: function () {

            this.getOwnerComponent()
                .getRouter()
                .getRoute("employeeDetail")
                .attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {

            let sEmpId = oEvent.getParameter("arguments").empId;

            let aEmployees = this.getView()
                .getModel()
                .getProperty("/employees");

            for (let i = 0; i < aEmployees.length; i++) {

                if (aEmployees[i].id === sEmpId) {

                    let sPath = "/employees/" + i;

                    this.getView().bindElement(sPath);

                    break;
                }
            }
        },

        onPFInfoPress: function () {
            
            sap.m.MessageBox.information(
                "Provident Fund (PF) is a retirement savings deduction contributed by both employee and employer. 12% of your Basic Salary."
            );
        },

        onNavBack: function () {
            history.go(-1);
        }
    });
});
