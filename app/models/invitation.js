// app/routes/admin/invitations.js
import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('invitation');
  }

});
