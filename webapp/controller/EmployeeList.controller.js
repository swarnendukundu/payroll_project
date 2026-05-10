sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("payroll.controller.EmployeeList", {

        onSelectEmployee: function (oEvent) {

           var oItem = oEvent.getParameter("listItem");

        if (!oItem) {
            oItem = oEvent.getParameter("item");
        }

            var sEmpId = oItem.getBindingContext().getProperty("id");

            this.getOwnerComponent()
                .getRouter()
                .navTo("employeeDetail", {
                    empId: sEmpId
                });
        },

        onSearch: function (oEvent) {

            var sValue = oEvent.getParameter("newValue");

            var oList = this.byId("employeeList");

            var oBinding = oList.getBinding("items");

            var aFilter = [];

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