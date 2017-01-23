require('dotenv').config({ silent: true });

require('dcontrollers')(require('dexpress'), [
  require('./controller'),
]);
