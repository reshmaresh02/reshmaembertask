import Component from '@ember/component';
import {inject as service} from '@ember/service';


export default Component.extend({
  store: service(),
    
  async init() {
    this._super(...arguments);
    // api call  GET baseurl/posts
    const posts =  await this.store.findAll('post');
    this.set('posts',posts); 
  }
});
