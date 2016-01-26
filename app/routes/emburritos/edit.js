import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model){
    controller.set('model', model); // Model retrieved in parent route, just need to set it.
    controller.set('name', model.get('name'));
    controller.set('introduction', model.get('introduction'));
  },
  actions: {
    updateEmburrito(emburrito, name, introduction){
      // Update record locally
      emburrito.set('name', name);
      emburrito.set('introduction', introduction);
      // Define promise callback behaviour
      var self = this;
      var successCallback = function(value){
        self.transitionTo('emburritos');
      }
      var failureCallback = function(reason){
        alert(reason);
        self.transitionTo('emburritos');
      }
      // Persist changes
      emburrito.save().then(successCallback,failureCallback);
    }
  }
});
