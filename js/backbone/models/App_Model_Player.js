/*
 *   @author: igor.caviroski
 *   Backbone, Model, Player
 */

App.Models = App.Models || {};

(function () {
    
    'use strict';

    // Player model
    App.Models.Player = Backbone.Model.extend({
        defaults:{
            userid: 0,
            name: "",
            cellid: 1,
            // 0 - for O, 1 - for X
            signTurn: 1
        }
    });

})();