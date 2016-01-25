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

      // Persist record, transition and handle success message if you want to.
      // Messages could be handled in success and failure callbacks
      var self = this;
      newEmburrito.save().then(function(value){ // success
        self.transitionTo('emburritos');
      },function(reason){ // failure
        alert(reason);
        self.transitionTo('emburritos');
      });
    }
  }
});
