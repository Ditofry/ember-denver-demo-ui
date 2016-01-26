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
      // Callbacks for promise
      var self = this;
      var successCallback = function(value){
        self.transitionTo('emburritos');
      }
      var failureCallback = function(reason){
        alert(reason);
        self.transitionTo('emburritos');
      }
      // Save, supply callbacks to handle response
      newEmburrito.save().then(successCallback,failureCallback);
    }
  }
});
