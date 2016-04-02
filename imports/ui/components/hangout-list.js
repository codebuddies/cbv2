import { Template } from 'meteor/templating';
import { Hangouts } from '../../api/hangouts/hangouts.js';
import { displayError } from '../lib/errors.js';

import './hangout-list.html'
import './hangout-item.js'

Template.hangout_list.onCreated(function() {
  this.autorun(() => {
    this.subscribe('hangouts');
  });
});

Template.hangout_list.helpers({
  hangouts:function(){
    return Hangouts.find();

  }
});
