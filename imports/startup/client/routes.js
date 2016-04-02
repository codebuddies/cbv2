//packages
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//layouts
import '../../ui/layouts/app-body.js';

//pages
import '../../ui/pages/home.js';
import '../../ui/pages/about.js';

//components




FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'home' });
  },
});
FlowRouter.route('/about', {
  name: 'App.about',
  action() {
    BlazeLayout.render('App_body', { main: 'about' });
  },
});
