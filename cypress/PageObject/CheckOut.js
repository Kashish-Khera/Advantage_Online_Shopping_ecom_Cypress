import Homepage from "./Homepage"

class Checkout {

    // user details on order paymentpage 


    OP_username = "#userDetails > div:first-child > label"
    OP_address = "#userDetails > div:nth-child(2) > :nth-child(2)"
    OP_city = "#userDetails > div:nth-child(2) > :nth-child(3)"
    OP_country = "#userDetails > div:nth-child(2) > :nth-child(4)"
    OP_state = "#userDetails > div:nth-child(2) > :nth-child(5)"
    OP_postalCode = "#userDetails > div:nth-child(2) > :nth-child(6)"

    OP_Items_count = ".itemsCount.roboto-medium.ng-binding"
    OP_Product_name = " body > div:nth-child(8) > section:nth-child(2) > article:nth-child(1) > div:nth-child(2) > div:nth-child(2) > tool-tip-cart:nth-child(4) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1) > h3:nth-child(1)"
    OP_product_quantity = "body > div:nth-child(8) > section:nth-child(2) > article:nth-child(1) > div:nth-child(2) > div:nth-child(2) > tool-tip-cart:nth-child(4) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1) > label:nth-child(2)"
    OP_Product_price = "body > div:nth-child(8) > section:nth-child(2) > article:nth-child(1) > div:nth-child(2) > div:nth-child(2) > tool-tip-cart:nth-child(4) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > p:nth-child(1)"
    OP_Shipping_text = ".shippingText.roboto-regular.ng-binding"
    OP_Shipping_cost = "#shippingCost"
    OP_Total_amount = ".roboto-medium.totalValue.ng-binding"
    OP_Next_btn = "#next_btn"

    // order summary on shopping cart page 

    shopping_cart_heading = ".roboto-regular.center.sticky.fixedImportant.ng-binding.fixed"
    shopping_cart_items = ".roboto-regular.center.sticky.fixedImportant.ng-binding.fixed > span"
    product_name = ".roboto-regular.productName.ng-binding"
    product_quantity = "td[class='smollCell quantityMobile'] > label:nth-child(2)"
    product_price = "td[class='smollCell'] p[class='price roboto-regular ng-binding']"
    edit_btn = ".edit.ng-scope"
    remove_btn = ".remove.red.ng-scope"
    product_page = "#Description > h1"

    // payment details 

    payment_option_text = ".Choose_payment.roboto-medium.ng-scope"
    safepay_checkbox = "input[name='safepay']"
    safepay_username = "input[name='safepay_username']"
    safepay_pw = "input[name='safepay_password']"
    safepay_paynow_btn = "#pay_now_btn_SAFEPAY"

    mastercredit_checkbox = "input[name='masterCredit']"
    mastercredit_card_no= "#creditCard"
    mastercredit_cvv_no= "input[name='cvv_number']"
    mastercredit_expiry_month = "select[name='mmListbox']"
    mastercredit_expiry_year = "select[name='yyyyListbox']"
    mastercredit_card_holder_name = "input[name='cardholder_name']"
    mastercredit_paynow_btn = "#pay_now_btn_ManualPayment"

    order_success_msg = "#orderPaymentSuccess > h2 > span"




    check_userdetails_OP() {
        cy.fixture("signup_creds").then((creds) => {

            // cy.get(this.OP_username).invoke("text").should("include" , `${creds.firstName} ${creds.lastName}`)
            cy.get(this.OP_username).invoke("text").should("include", creds.firstname + " " + creds.lastname)
            cy.get(this.OP_address).invoke("text").should("include", creds.address)
            cy.get(this.OP_state).invoke("text").should("include", creds.state)
            cy.get(this.OP_city).invoke("text").should("include", creds.city)
            cy.get(this.OP_postalCode).invoke("text").should("include", creds.postalcode)

        })
    }

    check_order_summary() {
        cy.get(this.OP_Items_count).invoke("text").should("include", "2 ITEMS")
        cy.get(this.OP_Product_name).invoke("text").should("include", "HP ELITE X2 1011 G1 TABLET")
        cy.get(this.OP_product_quantity).invoke("text").should("include", "QTY: 2")
        cy.get(this.OP_Product_price).invoke("text").should("include", "$2,558.00")
        cy.get(this.OP_Shipping_text).invoke("text").should("include", "SHIPPING")
        cy.get(this.OP_Shipping_cost).invoke("text").should("include", "$50.00")
        cy.get(this.OP_Total_amount).invoke("text").should("include", "$2,608.00")
        cy.get(this.OP_Next_btn).click()

    }

    checkout_btn_cart_page()
    {
        cy.get("#checkOutButton").click()
    }
    
    order_summary_cart_page() {

        cy.get(Homepage.add_to_cart).click()
        cy.get(this.shopping_cart_heading).should("be.visible")
        cy.get(this.shopping_cart_heading).invoke("text").should("include", "SHOPPING CART")
        cy.get(this.shopping_cart_items).invoke("text").should("include", "(2)")
        cy.get(this.product_name).should("be.visible")
        cy.get(this.product_name).invoke("text").should("include", "HP ELITE X2 1011 G1 TABLET")
        cy.get(this.product_quantity).invoke("text").should("include", "2")
        cy.get(this.product_price).invoke("text").should("include", "$2,558.00")
        cy.get(this.edit_btn).should("be.visible")
        cy.get(this.remove_btn).should("be.visible")
        cy.get(this.edit_btn).click()
        cy.get(this.product_page).invoke("text").should("include", "HP ELITE X2 1011 G1 TABLET")
       
    }

    remove_btn_cart_page() {
        cy.get(Homepage.add_to_cart).click()
        cy.get(this.remove_btn).click()
        cy.get(Homepage.shopping_cart_page_heading).should("contain", "SHOPPING CART")
        cy.get(Homepage.continue_shopping_btn).click()
        cy.url().should("eq", "https://www.advantageonlineshopping.com/#/")

    }

    payement_details() {

        cy.get(this.payment_option_text).invoke("text").should("include", "Choose payment method below ")
        cy.get(this.safepay_checkbox).check()


        cy.fixture("signup_creds").then((userdata) => {

            cy.get(this.safepay_username).type(userdata.username)
            cy.get(this.safepay_pw).type(userdata.password)
            cy.get(this.safepay_paynow_btn).click({force: true})
        })
    }

    other_payment_option()
    {
        cy.get(this.mastercredit_checkbox).check()
        cy.get(this.mastercredit_card_no).type("123456789000")
        cy.get(this.mastercredit_cvv_no).type("123")
        cy.get(this.mastercredit_expiry_month).select("string:05")
        cy.get(this.mastercredit_expiry_year).select("string:2027")
        cy.get(this.mastercredit_card_holder_name).type("Card Holder")
        cy.get(this.mastercredit_paynow_btn).click({force: true})

    }
    

    order_success()
    {
        cy.get(this.order_success_msg).invoke("text").should("include" , "Thank you for buying with Advantage")
    }


}

export default new Checkout