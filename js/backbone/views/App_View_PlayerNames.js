/*
 *   @author: igor.caviroski
 *   Backbone, View, Players Names
 */


App.Views = App.Views || {};

(function () {
    
    'use strict';

    App.Views.PlayerNames = Backbone.View.extend({

        el: '.players',
        
        template: _.template($('#players-template').text()),
        
        initialize: function() {
            vent.on('displayPlayerNames', this.render, this);
            vent.on('displayWinner', this.displayWinner.bind(this));
        },

        render: function() {
			
			// clean text/template from the markup
            this.$el.html('');
            
            // get array of models from collection
            var playerName = this.collection.models;
			
            // parse template with players names
			var compiled = this.template({playerOneName:playerName[0].get('name'), playerTwoName:playerName[1].get('name')});
			this.$el.append(compiled);
                
            return this;

        },
        
        displayWinner: function(e) {
            TicTacToe.GameOver = true;
            if (e.winner === -1) {
                this.$el.append("<div class=\"player\">Draw</div>");
            } else {
                this.$el.append("<div class=\"player\">Winner is " + this.collection.models[e.winner].get('name') + "</div>");
            }
        }
    })

})();