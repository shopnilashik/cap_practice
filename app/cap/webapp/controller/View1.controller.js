sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("cap.cap.controller.View1", {
            onInit: function () {
                //Get User details once logged in

                //Get User details by using srv;

                    // var y = '/sap/bc/ui2/start_up';

                    // var xmlHttp = null;

                    // xmlHttp = new XMLHttpRequest();

                    // xmlHttp.onreadystatechange = function() {

                    // if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

                    // var oUserData = JSON.parse(xmlHttp.responseText);

                    //     console.log(oUserData);

                    // }

                    // };

                    // xmlHttp.open( 'GET', y, false );

                    // xmlHttp.send(null);


                // oModel = new sap.ui.model.json.JSONModel();

                // oModel.loadData('/sap/bc/ui2/start_up');
            }
        });
    });
