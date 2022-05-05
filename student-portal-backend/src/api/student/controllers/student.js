'use strict';

/**
 *  student controller
 */

const { createCoreController } = require('@strapi/strapi').factories;




module.exports = createCoreController('api::student.student',({strapi})=>({
    
    async create(ctx){
     try {
        const {fname,lname,dob,email,password,hobby,level,phone_number} = ctx.request.body
        // if(fname,lname,dob,email,password,level,phone_number){
            const entity = await strapi.service('api::student.student').create({
            data:{fname,lname,email,dob,password,level,hobby,phone_number}
              });
              const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
              return this.transformResponse(sanitizedEntity);
        // }
     } catch (error) {
         console.log(ctx.request.body)
         ctx.send(error)
     }
    }
}));
