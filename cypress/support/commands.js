/*Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://172.24.43.70/")
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('a[role="button"]').contains('Login').click()
    
    //Validate login
    cy.url().should('eq', 'https://172.24.43.70/webapp/index.html#alertWatcher');
    //Close initial popup
    cy.wait(2000)
    cy.get('.x-tool-close').click()
})

Cypress.Commands.add("searchOffice", (officeName, officeID) => {
    cy.get('input[role="textbox"]:visible').type(officeID)
    cy.get('.x-tree-node-text:first').should('have.text','['+officeID+'] '+officeName).click()
    cy.get('h1').should('have.text','['+officeID+'] - '+officeName)
})

Cypress.Commands.add("createOffice", (officeName, officeID, country, state, city) => {
    //New Office Form
    cy.get('a[role="button"]').contains('Add a New Office').click()

    cy.get('.x-form-field:visible').eq(2).type(officeName)
    cy.get('.x-form-field:visible').eq(4).type(officeID)

    cy.get('.x-form-arrow-trigger-default:visible').eq(1).click()
    cy.get('.x-boundlist-item').each(($el, index, $list) => {
        if ($el.text()===country){
             $el.trigger('click')
        }
    })
    
    cy.get('.x-form-arrow-trigger-default:visible').eq(2).click()
    cy.get('.x-boundlist-item').each(($el, index, $list) => {
        if ($el.text()===state){
             $el.trigger('click')
        }
    })

    
    cy.get('.x-form-arrow-trigger-default:visible').eq(3).click()
    cy.get('.x-boundlist-item').each(($el, index, $list) => {
        if ($el.text()===city){
             $el.trigger('click')
        }
    })
    
        
    //cy.get('a[role="button"]').contains('Save').click()

    //cy.get('h1').should('have.text','['+officeID+'] - '+officeName)
})

Cypress.Commands.add("createInstance", (instanceName, instanceSID, VPNType, subnetSize, externalIP, netMask, gateway) => {
    cy.get('a[role="button"]').contains('Add New Instance').click()
    
    cy.get('.x-form-field:visible').eq(2).type(instanceName)
    cy.get('.x-form-field:visible').eq(4).type(instanceSID)

    cy.get('.x-form-arrow-trigger-default:visible').eq(1).click()
    cy.get('.x-boundlist-item').each(($el, index, $list) => {
        if ($el.text()===VPNType){
            $el.trigger('click')
        }
    })

    
    cy.get('.x-form-arrow-trigger-default:visible').eq(2).click()
    cy.get('.x-boundlist-item:visible').each(($el, index, $list) => {
        if ($el.text()===subnetSize){
            $el.trigger('click')
        }
    })

    cy.get('.x-form-field:visible').eq(7).type(externalIP)
    cy.get('.x-form-field:visible').eq(8).type(netMask)
    cy.get('.x-form-field:visible').eq(9).type(gateway)

    cy.get('a[role="button"]').contains('Save').click()

    cy.get('.x-title-text:visible:contains('+instanceName+')').should('have.length', 1);
})

Cypress.Commands.add("createEquipment", (officeID, officeName, instanceSID, type, IVID, customerIP, customerNat, serialNumber) => {
    cy.wait(2000)

    cy.get('.x-component-default:contains("SID"):contains('+instanceSID+')').parent().within(() => {
        cy.get('a[role="button"]').contains('Add Equipment').click()
    })

    let modality = ''
    let petName = ''
    let equipmentName = ''
    let equipmentModel = ''

    if (type==='NW'){
        modality = 'Network'
        petName = 'Service Processor'
        equipmentName = 'SP_Standard_Win10'
        equipmentModel = 'HP 400G4 mini'
    }
    else if (type==='MR'){
        modality = 'MR'
        petName = 'M-Power'
        equipmentName = 'Elan'
        equipmentModel = 'TN150'
    }
    else if (type==='CT'){
        modality = 'CT'
        petName = 'A-SeriesPC'
        equipmentName = 'Aquilion ONE'
        equipmentModel = 'Aquilion ONE'
    }
    else if (type==='XR'){
        modality = 'XR'
        petName = 'Radrex-i'
        equipmentName = 'TFD-2020'
        equipmentModel = 'TFD-2020'
    }
    else if (type==='UL'){
        modality = 'UL'
        petName = 'Ultrasound'
        equipmentName = 'Aplio 300'
        equipmentModel = 'TUS-A300'
    }
    
    cy.get('.x-form-arrow-trigger-default:visible').eq(1).click()
    cy.get('.x-boundlist-item:visible').each(($el, index, $list) => {
        if ($el.text()===modality){
            $el.trigger('click')
        }
    })
    
    cy.get('.x-form-arrow-trigger-default:visible').eq(2).click()
    cy.get('.x-boundlist-item:visible').each(($el, index, $list) => {
        if ($el.text()===petName){
            $el.trigger('click')
        }
    })

    cy.get('.x-form-arrow-trigger-default:visible').eq(3).click()
    cy.get('.x-boundlist-item:visible').each(($el, index, $list) => {
        if ($el.text()===equipmentName){
            $el.trigger('click')
        }
    })

    cy.get('.x-form-arrow-trigger-default:visible').eq(4).click()
    cy.get('.x-boundlist-item:visible').each(($el, index, $list) => {
        if ($el.text()===equipmentModel){
            $el.trigger('click')
        }
    })

    cy.get('input[name="innerVisionID"]').type(IVID)

    cy.get('input[name="customerIP"]').type(customerIP)

    cy.get('input[name="customerNAT"]').type(customerNat)

    cy.get('input[name="serialNumber"]').type(serialNumber)
    
    cy.get('.fa-check').click()

    cy.wait(1000)

    cy.get('.x-tree-node-text:first').should('have.text','['+officeID+'] '+officeName).click()

    cy.wait(1000)

    cy.get('#dashboardTabPanel .x-grid-cell:contains('+IVID+')').should('have.length', 1);

})

Cypress.Commands.add("deleteEquipment", (IVID) => {

    cy.get('#dashboardTabPanel .x-grid-cell:contains('+IVID+')').parent().within(() => {
        cy.get('div[data-qtip="Delete"]').click()
        cy.wait(60000)
        cy.get('#button-1006-btnEl').click()
    })
})

*/

Cypress.Commands.add('login', () => {

    cy.token().then(response => {
      const { token, user } = response.body.data.login
  
      window.localStorage.setItem('token', token)
      window.localStorage.setItem('user', JSON.stringify(user))
    })
  
  })
  
  Cypress.Commands.add('token', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}`,
      body: {
        "operationName": "login",
        "variables": {
          "email": "camila@mail.com",
          "password": "123abc"
        },
        "query": "mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      id\n      handle\n      avatar\n      fullname\n      __typename\n    }\n    __typename\n  }\n}\n"
      }
    })
  })

  




