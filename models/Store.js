// models/store.js
/* Mongoose is an agnostic platform for interfacing with Mongo */
const mongoose = require('mongoose');

/* use native promises */
mongoose.Promise = global.Promise;

/* helper function to slugify any string */
const slugify = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String], // String array
});

// ""
storeSchema.pre('save', function (next) {
  if (!this.isModified('name')) { // Returns true if the (Mongo) document was modified.
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model('Store', storeSchema);
