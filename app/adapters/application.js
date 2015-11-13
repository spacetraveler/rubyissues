import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://rubyissues-api.herokuapp.com'
});
