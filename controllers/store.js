/* eslint-disable no-unused-vars */
const Store = require('mongoose').model('Store');

exports.homePage = (req, res) => {
  res.render('hello');
};

// GET modifyStore
exports.addStore = (req, res) => {
  res.render('modifyStore', {
    title: 'Add Store',
  });
};

// POST modifyStore
exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  await store.save();
  req.flash('success', 'Mamma mia!');
  res.redirect('/');
};

exports.updateStore = (req, res) => {
  res.render('modifyStore', {
    title: 'Update Store',
  });
};

exports.deleteStore = (req, res) => {
  res.render('modifyStore', {
    title: 'Delete Store',
  });
};
