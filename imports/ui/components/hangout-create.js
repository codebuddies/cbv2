import { Template } from 'meteor/templating';
import { Hangouts } from '../../api/hangouts/hangouts.js';
import {insert} from '../../api/hangouts/methods.js';
import { displayError } from '../lib/errors.js';

import './hangout-create.html'


Template.hangout_create.events({
  'submit form': function(event, template){

    event.preventDefault();
    const topic = template.find('[name=topic]').value;
    const description = template.find('[name=description]').value;

    insert.call({
      topic: topic,
      description:description ,
    }, displayError);


    template.find('[name=topic]').value = '';
    template.find('[name=description]').value = '';

  }
});
