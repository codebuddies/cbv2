import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Hangouts = new Mongo.Collection('hangouts');



Hangouts.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Hangouts.schema = new SimpleSchema({
  topic: { type: String },
  description:{ type: String},
//  userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
});

Hangouts.attachSchema(Hangouts.schema);
