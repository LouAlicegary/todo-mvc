// Every component will be inserted in a html tag by ember, by default this would be div, but in this case 
// we wanted a <li> to surround our component so we specified that here with tagName property.

import Ember from 'ember';

export default Ember.Component.extend({  
    tagName: 'li'
});