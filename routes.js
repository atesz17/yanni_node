var home = require('./handlers/home');

module.exports = function(app) {
    app.get('/', home.root);
    // es itt lenne a kovetkezo...
};