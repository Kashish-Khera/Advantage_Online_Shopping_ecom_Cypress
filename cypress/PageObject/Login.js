import signup_creds from "../fixtures/signup_creds.json"

class Login {

    // OP = Orderpayment 

    OP_username = "input[name='usernameInOrderPayment']"
    OP_pw ="input[name='passwordInOrderPayment']"
    OP_login_btn = "#login_btn"
    OP_register_btn = "#registration_btn"
    invalid_creds_msg = ".ng-binding.invalid"

    // User icon -- Popup 

    username_field = "input[name='username']"
    pw_field = "input[name='password']"
    signin_btn = "#sign_in_btn"
    invalid_signin_msg = "#signInResultMessage"



    Login_orderPayment()
    {
        cy.fixture("signup_creds").then((creds) =>{

            cy.get(this.OP_username).type(creds.username)
            cy.get(this.OP_pw).type(creds.password)
            cy.get(this.OP_login_btn).click()
        })
    }


    invalid_Login_creds_OP()
    {
        cy.get(this.OP_username).type("one")
        cy.get(this.OP_pw).type("ok")
        cy.get(this.OP_login_btn).click()
        cy.get(this.invalid_creds_msg).should("be.visible")
        cy.get(this.invalid_creds_msg).invoke("text").should("include" , "Incorrect user name or password")

    }


    Login_user()
    {
        cy.fixture("signup_creds").then((creds) =>{

            cy.get(this.username_field).type(creds.username)
            cy.get(this.pw_field).type(creds.password)
            cy.get(this.signin_btn).click()
        })
    }

    invalid_login_creds_popup()
    {
        cy.get(this.username_field).type("user")
        cy.get(this.pw_field).type("pw")
        cy.get(this.signin_btn).click()
        cy.get(this.invalid_login_creds_popup).should("be.visible")
        cy.get(this.invalid_login_creds_popup).invoke("text").should("include" , "Incorrect user name or password.")

    }


}

export default new Login