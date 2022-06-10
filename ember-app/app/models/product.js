import DS from 'ember-data';
//import Model, { attr } from "@ember-data/model";
const {
    Model,
    attr,
  } = DS;
  

export default Model.extend({
  name: attr('string' ),
  description: attr('string'),
  price: attr('string'),
  type: attr('string'),
});