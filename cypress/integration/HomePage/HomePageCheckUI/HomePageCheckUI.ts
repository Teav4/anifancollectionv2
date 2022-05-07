import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I login to site is successful', () => {
  cy.visit('/');
})

And('I am in the "Home" page', () => {
  cy.visit('/');
})

Given('I can see search button white', () => {
  cy.get('[data-cy="search-box"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
})
