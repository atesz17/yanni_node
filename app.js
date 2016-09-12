var express = require('express');
var vhost = require('vhost');

var app = express();

// api subdomain --> http://api.mydomain.com/...
var api = express.Router();
// elv csak API-knal lehet CORS tamadas, szval nem kell az osszes URL-re betenni a middleware-t TODO: utanaolvasni CORS-nak
api.use('/', require('cors'));

app.use(vhost('api.*', api));

require('./routes')(app);