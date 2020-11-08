Cypress.Commands.add('login',({username,password})=>{
    cy.get('#login-username').type(username);
    cy.get('#login-password').type(password);
    cy.get('#login-button').click();
})