
      .as('cpf')
      
      .as('ativo')
      
      .as('nome')
      
      .as('empresa')
      
      .as('cnh')
      
      .as('validadecnh')
      
      .as('rg')
      
      .as('emissoruf')
      
      .as('fone')
      
      .as('celular')
      
      .as('tipo_acessoId')
      
        cy.get('@cpf').click({ force: true });
      cy.get('@cpf').type('30099938118').should("have.value",'30099938118');
      
      
        cy.get('@ativo').click({ force: true });
      cy.get('@ativo').type('1').should("have.value",'1');
      
      
        cy.get('@nome').click({ force: true });
      cy.get('@nome').type('Selia Dunca ATeste').should("have.value",'Selia Dunca ATeste');
      
      
        cy.get('@empresa').click({ force: true });
      cy.get('@empresa').type('Sodex.ltda').should("have.value",'Sodex.ltda');
      
      
        cy.get('@cnh').click({ force: true });
      cy.get('@cnh').type('33445566').should("have.value",'33445566');
      
      
        cy.get('@validadecnh').click({ force: true });
      cy.get('@validadecnh').type('2026-02-28T00:00:00.000Z').should("have.value",'2026-02-28T00:00:00.000Z');
      
      
        cy.get('@rg').click({ force: true });
      cy.get('@rg').type('10000299').should("have.value",'10000299');
      
      
        cy.get('@emissoruf').click({ force: true });
      cy.get('@emissoruf').type('MG').should("have.value",'MG');
      
      
        cy.get('@fone').click({ force: true });
      cy.get('@fone').type('319999-8988').should("have.value",'319999-8988');
      
      
        cy.get('@celular').click({ force: true });
      cy.get('@celular').type('319999-8988').should("have.value",'319999-8988');
      
      
        cy.get('@tipo_acessoId').click({ force: true });
      cy.get('@tipo_acessoId').type('2').should("have.value",'2');
      
      