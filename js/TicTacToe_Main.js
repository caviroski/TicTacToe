/*
 *   @author: igor.caviroski
 *   Main Code for the Site
 */


window.App = {
    Models: {},
    Collections: {},
    Views: {},
    init: function () {
        'use strict';
        // Initialize Backbone.js
        Backbone.history.start();

        //Models
        TicTacToe.Player = new App.Models.Player();
        TicTacToe.Prompt = new App.Models.Prompt();
        TicTacToe.ModelCell = new App.Models.Cell();

        //Collections
        TicTacToe.Players = new App.Collections.Players;
        TicTacToe.Cells = new App.Collections.Cells;

        //Views
        TicTacToe.PlayerNames = new App.Views.PlayerNames({collection:TicTacToe.Players});
        TicTacToe.TableRow = new App.Views.TableRow();
        
        TicTacToe.GameOver = false;
    }
};

window.TicTacToe = {};
window.vent = _.extend({}, Backbone.Events);

$(document).ready(function () {

    'use strict';
    App.init();

    // get player names from prompt
    TicTacToe.Players.add(new App.Models.Prompt({userid:1, name:TicTacToe.Prompt.promptForPlayerName()}));
    TicTacToe.Players.add(new App.Models.Prompt({userid:2, name:TicTacToe.Prompt.promptForPlayerName()}));
    vent.trigger('displayPlayerNames');

});
