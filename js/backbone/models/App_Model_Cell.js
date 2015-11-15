/*
 *   @author: igor.caviroski
 *   Backbone, Model, Cell
 */

App.Models = App.Models || {};

(function () {
    
    'use strict';

    // Cell model
    App.Models.Cell = Backbone.Model.extend({
        defaults:{
            cellid: 0,
            // -1 - for unused, 0 - for O, 1 - for X
            sign: -1
        }
    });

})();