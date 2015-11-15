/*
 *   @author: igor.caviroski
 *   Backbone, View, Cell
 */


App.Views = App.Views || {};

(function () {
    
    'use strict';

    App.Views.Cell = Backbone.View.extend({

        el: '',
        
        template: _.template($('#cell-template').text()),
        
        collection:TicTacToe.Cells,
        
        events: {
            'click .cell': 'cellClicked'
        },

        render: function() {
            
            for (var i=0; i<3; i++) {
                
                // place cellid for identification
                var cellid = TicTacToe.Player.get('cellid');
                var compiled = this.template({cellid: cellid});
                // increase and set cellid
                TicTacToe.Player.set({cellid:++cellid});
                
                TicTacToe.Cells.add(new App.Models.Cell({cellid:cellid}));
                
                // append the compiled markup to the DOM
                this.$el.append(compiled);
            }
            
            this.$el.addClass('row');
                
            return this;

        },

        cellClicked: function(e) {
            vent.trigger('cellCliked', {model: $(e.currentTarget).data('cellid')});
        }
        
    })

})();
