var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'), // TODO nem production ready a store direkt, utanaolvasni: https://github.com/expressjs/session
    morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

// csak json body-t parsolunk
app.use(bodyParser.json());

// elv csak API-knal lehet CORS tamadas, szval nem kell az osszes URL-re betenni a middleware-t TODO: utanaolvasni CORS-nak
app.use('/', require('cors'));

// CSRF tamadas elleni vedekezes, TODO: utanaolvasni CSRF-nek
// cookie-parser es session-connect utan kell lennie!!!
// TODO ez igy az angularnak nem eleg, hanem headerek-kel kell szorakozni: https://docs.angularjs.org/api/ng/service/$http#cross-site-request-forgery-xsrf-protection
app.use(require('csurf'));
app.use(function (req, res, next) {
    res.locals._csrfToken = req.csrfToken();
    next();
});

require('./routes')(app);