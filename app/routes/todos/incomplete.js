import Ember from 'ember';

export default Ember.Route.extend({  
    
    model() {
        return this.store.filter('todo', function(todo) {
            return !todo.get('complete');
        });
    },
    
    // Renders the todos/index.hbs template in lieu of totos/incomplete.hbs
    renderTemplate(controller, model) {
        this.render('todos.index', {
            model: model
        });
    }

});