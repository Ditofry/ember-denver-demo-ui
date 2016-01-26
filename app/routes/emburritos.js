import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('emburrito');
  },
  actions: {
    deleteEmburrito(emburrito){
      // This returns a promise, but we don't have anything to do here so
      // we'll leave it be
      emburrito.destroyRecord();
      // The above is equivalent to:
      // emburrito.deleteRecord();
      // emburrito.get('isDeleted') == true; // true
      // emburrito.save(); // sends DELETE request
    }
  }
});
