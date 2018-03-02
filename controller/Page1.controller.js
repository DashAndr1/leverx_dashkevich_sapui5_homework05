sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.andrei.dashkevich.controller.Page1", {
        onInit : function () {
        },
        onNextBtnPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("2");
        }
    });
});

