var express = require('express');

var app = express();

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