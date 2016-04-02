import { Meteor } from 'meteor/meteor';
import { Hangouts } from '../hangouts.js';


Meteor.publish('hangouts', function tasksPublication() {
   return Hangouts.find();
});
