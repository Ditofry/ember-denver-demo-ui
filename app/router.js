import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('emburritos', function(){
    this.route('new');
    this.route('edit', { path: 'edit/:emburrito_id' });
  });
});

export default Router;
