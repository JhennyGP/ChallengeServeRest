/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ServeRest } from '../../../services/serverest.service'

When(`user sends a post request with {string} credentials`, (login_type) => {
  ServeRest.post_login_by_type(login_type).then(login_post_response => {
    cy.wrap(login_post_response).as('Response')
  })
})

Then(`should be returned the schema {string} with status code {int}`, (schema, status) => {
  cy.get('@Response').then(res => {
    cy.contractValidation(res, schema, status).then(valid => {
      expect(valid).to.be.true
    })
  })
})
