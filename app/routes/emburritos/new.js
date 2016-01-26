import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model){
    controller.set('name', '');
    controller.set('introduction', '');
  },
  actions: {
    saveEmburrito(name, introduction){
      // Create record in *local* store
      var newEmburrito = this.store.createRecord('emburrito',{
        name: name,
        introduction: introduction
      });
      // Callbacks for promise, es6 arrow for lexical 'this' context
      var successCallback = (value) => this.transitionTo('emburritos');
      var failureCallback = (reason) => {
        alert(reason);
        this.transitionTo('emburritos');
      }
      // Save, supply callbacks to handle response
      newEmburrito.save().then(successCallback,failureCallback);
    }
  }
});
