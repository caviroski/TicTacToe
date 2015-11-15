/*
 *   @author: igor.caviroski
 *   Backbone, Model, Prompt
 */


App.Models = App.Models || {};

(function () {
    
    'use strict';

    // Prompt for player name on begining of every game
    App.Models.Prompt = Backbone.Model.extend({
        
        promptForPlayerName:function() {
            return prompt("Please enter your name", "Player");
        }

    });

})();