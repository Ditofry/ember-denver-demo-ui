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
      // Callbacks for promise, es6 arrow for lexical 'this' context
      var successCallback = (value) => this.transitionTo('emburritos');
      var failureCallback = (reason) => {
        alert(reason);
        this.transitionTo('emburritos');
      }
      // Persist changes
      emburrito.save().then(successCallback,failureCallback);
    }
  }
});
