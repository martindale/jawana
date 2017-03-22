var config = require('./config');

var Maki = require('maki');
var jawana = new Maki(config);

var Person = jawana.define('Person', {
  username: { type: String , max: 100 , id: true },
  components: {
    query: 'maki-community',
    get: 'maki-profile'
  }
});

var Job = jawana.define('Job', {
  name: { type: String , max: 100 },
  description: { type: String }
});

var Category = jawana.define('Category', {
  name: { type: String , max: 100 , id: true },
  description: { type: String },
  parent: { type: String , ref: 'Category' }
});

jawana.start();
