'use strict';

/**
 *  student controller
 */

const { createCoreController } = require('@strapi/strapi').factories;




module.exports = createCoreController('api::student.student', ({ strapi }) => ({

    async create(ctx) {

        let { fname, lname, dob, email, password, hobby, level = '"100"', phone_number } = ctx.request.body

        let message = ""
        if (fname == "") message = "fname is required"
        if (lname == "") message = "lname is required"
        if (password == "") message = "password is required"
        if (dob == "") message = "dob is required"
        if (email == "") message = "email is required"
        if (level == "") message = "level is required"
        if (phone_number == "") message = "phone_number is required"


        if (message == "") {
            try {
                level = '"100"'
                const entity = await strapi.service('api::student.student').create({
                    data: { fname, lname, email, dob, password, level, hobby, phone_number }
                });
                const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
                return this.transformResponse(sanitizedEntity);

            } catch (e ) {
                console.log(e)
                    let msg = e.details.errors[0]
                    message = msg

            }
        }
        else console.log(message); ctx.send({ status: "failed", message })

    }
}));
