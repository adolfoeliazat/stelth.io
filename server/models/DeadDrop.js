const Model = require('objection').Model;

class DeadDrop extends Model {
  static get tableName() {
    return 'deadDrops'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'file', 'message', 'lat', 'lng', 'ownerID', 'receiverID'],

      properties: {
        id:         { type: 'integer' },
        title:      { type: 'string', minLength: 1, maxLength: 255 },
        file:       { type: 'string', minLength: 1 },
        message:    { type: 'string', minLength: 1 },
        lat:        { type: 'number', minLength: 1 },
        lng:        { type: 'number', minLength: 1 },
        ownerID:    { type: 'string', minLength: 1 },
        receiverID: { type: 'string', minLength: 1 }
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
          from: 'deadDrops.ownerID',
          to: 'users.id' // primary key in users table
        }
      },

      // Each entry is uniquely contributed by one user
      contributor: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'deadDrops.receiverID',
          to: 'users.id' // primary key in users table
        }
      }
    }
  }
}

module.exports = DeadDrop;
