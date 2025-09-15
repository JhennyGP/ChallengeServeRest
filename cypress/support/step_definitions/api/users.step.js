/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ServeRest } from '../../../services/serverest.service'

// GET
When(`a GET request is sent to {string}`, () => {
	ServeRest.get_all_users().then( get_users_response => {
        cy.wrap(get_users_response).as('Response')
    })
});

// POST
When(`a create request is submitted for a {string} user`, (user_type) => {
	ServeRest.post_user_by_type(user_type).then(post_user_response => {
        cy.wrap(post_user_response).as('Response')
    })
});


// PUT
When(`an update request is submitted for user {string} of type {string}`, (_id, user_type) => {
	ServeRest.put_user_by_type(_id, user_type).then(put_user_response => {
        cy.wrap(put_user_response).as('Response')
    })
});

// DELETE
Given(`the user has no cart`, () => {
	cy.StepNotImplemented()
});

When(`a delete request is submitted for user {string}`, (_id) => {
	ServeRest.del_user(_id).then( del_user_response => {
        cy.wrap(del_user_response).as('Response')
    })
});

Then(`the {string} schema is returned with HTTP status {int}`, (schema, status) => {
    cy.get('@Response').then( res => {
        cy.contractValidation( res, schema, status).then( valid => {
            expect(valid).to.be.true
        })
    })
});
