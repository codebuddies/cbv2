import { Meteor } from 'meteor/meteor';
import { Learnings } from '../learnings.js';


Meteor.publish('learnings', function tasksPublication() {
   return Learnings.find();
});
