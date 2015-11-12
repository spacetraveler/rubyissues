import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('repository');
  },

  actions: {
    createRepository(repo_name) {
      var self = this;
      var new_repo = this.store.createRecord('repository', {
        full_name: repo_name
      });
      new_repo.save().then(function() {
        self.transitionTo('repositories.index');
      });
    }
  }
});
