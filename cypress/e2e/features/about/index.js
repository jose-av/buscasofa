/// <reference types="Cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario navega a {string}", function (url) {
    cy.visit(url);
});

Then("debería ver el número de equipo {string}", function (numeroEquipo) {
    // Busca en la página que exista el texto del equipo
    cy.contains(numeroEquipo).should("be.visible");
});

Then("debería ver al miembro {string} con una descripción que incluye {string}", function (nombre, descripcion) {
    // 1. Busca la tarjeta (.member-card) que contenga el nombre del miembro
    cy.contains('.member-card', nombre)
      .should('be.visible')
      .within(() => {
          // 2. Dentro de esa tarjeta en concreto, busca que exista la descripción
          cy.contains(descripcion).should('be.visible');
      });
});