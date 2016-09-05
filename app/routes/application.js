import Ember from 'ember';

export default Ember.Route.extend({
    intl:Ember.inject.service(),
    beforeModel(){
        this._super(...arguments);
        if(this.get('intl.locale') === null){
        this.get('intl').setLocale('en-US');
        }
    }
});