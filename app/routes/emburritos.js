import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('emburrito');
  },
  actions: {
    deleteEmburrito(emburrito){
      // We could use success/failure callbacks with promise here if we wanted
      emburrito.destroyRecord(); // combines .deleteRecord() and .save();
    }
  }
});
