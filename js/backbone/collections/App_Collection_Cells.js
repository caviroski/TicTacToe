/*
 *   @author: igor.caviroski
 *   Backbone, Collection, Cells
 */

App.Collections = App.Collections || {};

(function () {
    
    'use strict';

    App.Collections.Cells = Backbone.Collection.extend({

        // collection for the Cells
        model: App.Models.Cell,
        
        initialize: function() {
            vent.on('cellCliked', this.cellCliked.bind(this));
        },
        
        cellCliked:function(e) {
            var model = this.models[e.model-1];
            var signTurn = TicTacToe.Player.get('signTurn');
            if (model.get('sign') === -1) {
                model.set({sign:signTurn});
                
                this.checkWinner();
                
                // display sign
                var $cell = $('.cell[data-cellid=' + e.model + ']')
                signTurn ? $cell.html('X') : $cell.html('O');
                // change players
                signTurn ? TicTacToe.Player.set({signTurn:0}) : TicTacToe.Player.set({signTurn:1});
            }
        },
        
        checkWinner: function() {
            // check rows
            var counter = 0;
            for (var j=0; j<3; j++) {
                if (this.areEqual(this.models[counter].get('sign'), this.models[counter+1].get('sign'), this.models[counter+2].get('sign'))) {
                    vent.trigger('displayWinner', {winner:TicTacToe.Player.get('signTurn')});
                    return;
                }
                counter += 3;
            }
            //check columns 
            counter = 0;
            for (var j=0; j<3; j++) {
                if (this.areEqual(this.models[counter].get('sign'), this.models[counter+3].get('sign'), this.models[counter+6].get('sign'))) {
                    vent.trigger('displayWinner', {winner:TicTacToe.Player.get('signTurn')});
                    return;
                }
                counter += 1;
            }
            
            //check diagonals 
            if (this.areEqual(this.models[0].get('sign'), this.models[4].get('sign'), this.models[8].get('sign'))) {
                vent.trigger('displayWinner', {winner:TicTacToe.Player.get('signTurn')});
                return;
            }
            if (this.areEqual(this.models[2].get('sign'), this.models[4].get('sign'), this.models[6].get('sign'))) {
                vent.trigger('displayWinner', {winner:TicTacToe.Player.get('signTurn')});
                return;
            }
            
            // check for draw
            for (var i=0; i<9; i++) {
                if (this.models[i].get('sign') === -1) {
                    return;
                }
            }
            vent.trigger('displayWinner', {winner:-1});
        },
        
        // compare three elements
        areEqual: function(cell1, cell2, cell3) {
            if (cell1 === -1) return false;
            if (cell1 === cell2 && cell1 === cell3) {
                return true;
            } else {
                return false;
            }
        }

    });

})();