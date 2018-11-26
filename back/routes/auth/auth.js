const express = require('express');
module.exports = (function() {
    'use strict';
    const router = express.Router();

    router.post('/signup', function(req, res, next) {
      res.send('I am in POST signup');
    });

    return router;
})();
