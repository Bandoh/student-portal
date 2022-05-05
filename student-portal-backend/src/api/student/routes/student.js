'use strict';

/**
 * student router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::student.student',{
    prefix: '',
    only: [ 'findOne','create'],
    except: [],
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      },
      findOne: {},
      create: {},
      update: {},
      delete: {},
    }
});
