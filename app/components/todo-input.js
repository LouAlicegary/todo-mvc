import Ember from 'ember';

export default Ember.Component.extend({  
    
    actions: {
    
        submitTodo(newTitle) {
            if (newTitle) {
                // THIS SENDS THE DATA TO AN ACTION ON THE MODEL (ACTION = A VAR SPECIFIED IN THE TEMPLATE)
                this.sendAction('action', newTitle);
            }
            this.set('newTitle', '');
        }
    
    }

});