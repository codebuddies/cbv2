import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';



import { Hangouts } from './hangouts.js';



export const insert = new ValidatedMethod({
  name: 'hangouts.insert',
  validate: new SimpleSchema({
    topic: { type: String },
    description:{ type: String},
  }).validator(),
  run({topic,description}) {
    const hangout = {
      topic,
      description,
    };
    return Hangouts.insert(hangout);
  },
});
