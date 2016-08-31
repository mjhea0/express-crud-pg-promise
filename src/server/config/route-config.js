(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const beerRoutes = require('../routes/beers');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/api/v1/beers/', beerRoutes);

  };

})(module.exports);
