/*
 *   @author: igor.caviroski
 *   Backbone, View, TableRow
 */

App.Views = App.Views || {};

(function () {
    
    'use strict';

    App.Views.TableRow = Backbone.View.extend({

        el: '.playing-table',
        
        initialize: function() {
            this.render();
        },

        render: function() {
            
            // clean text/template from the markup
            this.$el.html('');
            
            var cell;

            for (var i=0; i<3; i++) {
                
                cell = new App.Views.Cell();
                // append the compiled markup to the DOM
                this.$el.append(cell.render().el);
            }

            return this;
        }

    })
})();