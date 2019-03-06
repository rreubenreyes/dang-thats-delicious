// models/store.js
/* Mongoose is an agnostic platform for interfacing with Mongo */
const mongoose = require('mongoose');

/* use native promises */
mongoose.Promise = global.Promise;

/* slugify baby */
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    // this will be passed as an error message
    required: 'Please enter a store name',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String], // String array
});

// M O D E L M I D D L E W A R E
storeSchema.pre('save', function (next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.model('Store', storeSchema);
