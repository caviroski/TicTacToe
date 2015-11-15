/*
 *   @author: igor.caviroski
 *   Backbone, Collection, Players
 */

App.Collections = App.Collections || {};

(function () {
    
    'use strict';

    App.Collections.Players = Backbone.Collection.extend({

        // collection for the Player model
        model: App.Models.Prompt

    });

})();