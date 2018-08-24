import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  queryParams: ["page","perPage"],
  page: 1,

  onlyGutters: false,

  outputContent: Ember.computed('model.[]', 'onlyGutters', function() {
    const content = this.get('model');
    if (!this.get('onlyGutters')) {
      return content;
    }

    return content.filter((todo) => todo.get('name').includes('Gutters'));
  }),

  pagedContent: pagedArray("outputContent", {
    page: Ember.computed.alias('parent.page')
  })
});
