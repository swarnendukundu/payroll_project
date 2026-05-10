sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "payroll/localService/mockdata/mockdata100"
], function (UIComponent, JSONModel,mockdata100) {
    "use strict";

    return UIComponent.extend("payroll.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {

            UIComponent.prototype.init.apply(this, arguments);

            var oModel = new JSONModel();
/*
            oModel.loadData(
                "localService/mockdata/mockdata100.js"
            );
*/
             oModel.setData(mockdata100);

            this.setModel(oModel);

            this.getRouter().initialize();
        }
    });
});
