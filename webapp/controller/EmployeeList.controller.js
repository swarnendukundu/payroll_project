sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("payroll.controller.EmployeeList", {

        onSelectEmployee: function (oEvent) {

           let oItem = oEvent.getParameter("listItem");

        if (!oItem) {
            oItem = oEvent.getParameter("item");
        }

            let sEmpId = oItem.getBindingContext().getProperty("id");

            this.getOwnerComponent()
                .getRouter()
                .navTo("employeeDetail", {
                    empId: sEmpId
                });
        },

        onSearch: function (oEvent) {

            let sValue = oEvent.getParameter("newValue");

            let oList = this.byId("employeeList");

            let oBinding = oList.getBinding("items");

            let aFilter = [];

            if (sValue) {

                aFilter.push(
                    new Filter(
                        "name",
                        FilterOperator.Contains,
                        sValue
                    )
                );
            }

            oBinding.filter(aFilter);
        }
    });
});