exports.homePage = (req, res) => {
  res.render('hello');
};

exports.addStore = (req, res) => {
  res.render('modifyStore', {
    title: 'Add Store',
  });
};

exports.createStore = (req, res) => res.json(req.body);

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
