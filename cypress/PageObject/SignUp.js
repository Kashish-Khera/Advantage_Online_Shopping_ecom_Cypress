import Homepage from "./Homepage"

class SignUp {



    username_field = "input[name='usernameRegisterPage']"
    email_field = "input[name='emailRegisterPage']"
    email_error_msg = ".animated.invalid"
    password_field = "input[name='passwordRegisterPage']"
    pw_error_msg = "sec-view[a-hint='Password'] label[class='animated invalid']"
    confirm_pw_field = " input[name='confirm_passwordRegisterPage']"
    confirm_pw_msg = "sec-view[a-hint='Confirm password'] label[class='animated invalid']"
    first_name_field = "input[name='first_nameRegisterPage']"
    last_name_field = "input[name='last_nameRegisterPage']"
    phone_no_field = "input[name='phone_numberRegisterPage']"
    country_dropdown = "select[name='countryListboxRegisterPage']"
    address_field = "input[name='addressRegisterPage']"
    state_field = "input[name='state_/_province_/_regionRegisterPage']"
    city_field = "input[name='cityRegisterPage']"
    postal_code = "input[name='postal_codeRegisterPage']"
    exclusive_offer_checkbox = "input[name='allowOffersPromotion']"
    i_agree_checkbox = "input[name='i_agree']"
    register_btn = "#register_btn"
    already_have_account = "label[class='ALREADY_HAVE_AN_ACCOUNT roboto-medium'] a[role='link']"


    Create_new_user() {
        cy.fixture("signup_creds").then((creds) => {

            cy.get(this.username_field).type(creds.username)
            cy.get(this.email_field).type(creds.email)
            cy.get(this.password_field).type(creds.password)
            cy.get(this.confirm_pw_field).type(creds.confirm_pw, {force: true})
            cy.get(this.first_name_field).type(creds.firstname)
            cy.get(this.last_name_field).type(creds.lastname)
            cy.get(this.phone_no_field).type(creds.mobile)
            cy.get(this.country_dropdown).contains('India').invoke('val').as('selectedValue');
            cy.get('@selectedValue').then(value => {
                this.selectedValue = value;
                cy.get(this.country_dropdown).select(this.selectedValue);
            });
            cy.get(this.city_field).type(creds.city)
            cy.get(this.address_field).type(creds.address)
            cy.get(this.state_field).type(creds.state, { force: true })
            cy.get(this.postal_code).type(creds.postalcode)
            cy.get(this.exclusive_offer_checkbox).should("be.checked")
            cy.get(this.i_agree_checkbox).check()
            cy.get(this.register_btn).click()

        })

    }

    signup_orderPayement()
    {
        cy.get("#registration_btn").click()
    }

    check_signup_fields_validations() {

        cy.fixture("signup_creds").then((creds) => {

            cy.get(this.email_field).type("Demo_user_two").blur()
            cy.get(this.email_error_msg).should("be.visible")
            cy.get(this.email_error_msg).invoke("text").should("include", "Your email address isn't formatted correctly")
            cy.get(this.email_field).clear()
            cy.get(this.password_field).type("123").blur()
            cy.get(this.pw_error_msg).invoke("text").should("include", "Use  4 character or longer")
            cy.get(this.password_field).clear()
            cy.get(this.password_field).type("qwerty").blur()
            cy.get(this.pw_error_msg).invoke("text").should("include", "One upper letter required")
            cy.get(this.password_field).clear()
            cy.get(this.password_field).type("QWERTY").blur()
            cy.get(this.pw_error_msg).invoke("text").should("include", "One lower letter required")
            cy.get(this.password_field).clear()
            cy.get(this.password_field).type("qwerTY").blur()
            cy.get(this.pw_error_msg).invoke("text").should("include", "One number required")
            cy.get(this.password_field).clear()
            cy.get(this.password_field).type("qwerTY1234567890").blur()
            cy.get(this.pw_error_msg).invoke("text").should("include", "Use maximum 12 character")
            cy.get(this.password_field).clear()
            cy.get(this.password_field).type(creds.password).blur()
            cy.get(this.confirm_pw_field).type("qwe" , {force: true}).blur()
            cy.get(this.confirm_pw_msg).invoke("text").should("include", "Passwords do not match")
            cy.get(this.confirm_pw_field).clear()

            // cy.get(this.confirm_pw_field).type(creds.confirm_pw)
            // cy.get(this.first_name_field).type(creds.firstname)
            // cy.get(this.last_name_field).type(creds.lastname)
            // cy.get(this.phone_no_field).type(creds.mobile)

            cy.get(this.country_dropdown).contains('India').invoke('val').as('selectedValue');

            cy.get('@selectedValue').then(value => {
                this.selectedValue = value;
                cy.get(this.country_dropdown).select(this.selectedValue);
            });
            cy.get(this.address_field).type("aesxftgv bhijn nkkmn guiokjk")
            cy.get(this.postal_code).type("12345")
            cy.get(this.exclusive_offer_checkbox).should("be.checked")
            cy.get(this.register_btn).should('have.attr', 'disabled');
            cy.get(this.already_have_account).should("be.visible")
            cy.get(this.already_have_account).click()
            cy.get(Homepage.signup_popup).should("be.visible")
            cy.get(Homepage.signup_popup_cross_btn).click()
            cy.get(this.i_agree_checkbox).check()
            cy.get(this.register_btn).click({ force: true })

        })
    }

}

export default new SignUp