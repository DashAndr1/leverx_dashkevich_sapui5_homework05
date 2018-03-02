sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
        "sap/m/MessageToast"
], function (Controller, History, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.andrei.dashkevich.controller.Page2", {

        onNextBtnPress: function(oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("3");
            MessageToast.show("Last page");  
        },
        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("overview", {}, true);
            }
        }
    });
});