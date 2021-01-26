describe('my first test', () => {
  it('tests the login', () => {
    cy.visit('https://stg.embryonics.me')

    // wrong user test
    cy.get('input[name=username]').type('wrong_user')
    cy.get('input[name=password]').type('Shahar123!{enter}')
    cy.contains('Authentication is required') 
    .as('error_popup')
    .should('exist')
   
    // wrong password test
    cy.get('input[name=username]').clear().type('shahar')
    cy.get('input[name=password]').clear().type('wrong_pass{enter}')
    cy.get('@error_popup').should('exist')

    // succesful login test
    cy.get('input[name=username]').clear().type('shahar')
    cy.get('input[name=password]').clear().type('Shahar123!')
    cy.get('button[type=submit]').click()
    cy.url().should('include', 'patients')
   
  })
})

// something something
