const Model = require('objection').Model;

class Drop extends Model {
  static get tableName() {
    return 'drops'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'data', 'lat', 'lng', 'ownerID', 'receiverID'],

      properties: {
        id:         { type: 'integer' },
        title:      { type: 'string', minLength: 1, maxLength: 255 },
        data:       { type: 'string', minLength: 1, maxLength: 255 },
        lat:        { type: 'number', minLength: 1 },
        lng:        { type: 'number', minLength: 1 },
        ownerID:    { type: 'integer', minLength: 1 },
        receiverID: { type: 'integer', minLength: 1 }
      }
    };
  }
  static get relationMappings() {
    return {

      // Each entry uniquely belongs to one parent itinerary 
      parentItin: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'drops.ownerID',
          to: 'users.id' // primary key in users table
        }
      },

      // Each entry is uniquely contributed by one user
      contributor: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'drops.receiverID',
          to: 'users.id' // primary key in users table
        }
      }
    }
  }
}

module.exports = Drop;
