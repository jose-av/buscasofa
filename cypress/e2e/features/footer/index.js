/// <reference types="Cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario navega a {string}", function (url) {
    cy.visit(url);
});

Then("el footer debe existir en la página", function () {
    // Busca la etiqueta HTML <footer>
    cy.get('footer').should('be.visible');
});

Then("el footer debe contener el nombre {string}", function (nombreMiembro) {
    cy.get('footer').within(() => {
        cy.contains(nombreMiembro).should('be.visible');
    });
});