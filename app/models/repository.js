import DS from 'ember-data';

export default DS.Model.extend({
  full_name:   DS.attr(),
  description: DS.attr(),
  homepage:    DS.attr(),
  avatar_url:  DS.attr(),
  html_url:    DS.attr()
});
