import Homepage from "../PageObject/Homepage";
import SignUp from "../PageObject/SignUp"
import Login from "../PageObject/Login";
import CheckOut from "../PageObject/CheckOut";

describe('1.Homepage Test suite ', () => {


  beforeEach(() => {
    Homepage.visit_page()
  })

  it('1. Testing Homepage elements ', () => {

    cy.viewport(1200, 800);
    Homepage.is_logo_visible()
    Homepage.is_logo_click_redirect_homepage()
    Homepage.go_to_top_arrow_check()
    Homepage.verify_our_product_section()
    Homepage.verify_popular_item_section()
    Homepage.verify_special_offer_section()
    Homepage.verify_search_bar()
    Homepage.verify_user_icon()
    Homepage.verify_add_to_cart()
    Homepage.verify_help_us()
    Homepage.verify_contact_us_form()
  });

  it('2. Select the product and Add to Cart  ', () => {

    Homepage.select_product()

  });

  it('3. Check the Validations on the Product selection & Add to Cart', () => {

    Homepage.select_product_validations
  });

  it('4. check if user is able to Signup or not', () => {
    Homepage.user_signup()
    SignUp.Create_new_user()
    Homepage.redirection_after_signup_login()

  });


  it('5. Signup field validations', () => {

    Homepage.user_signup()
    SignUp.check_signup_fields_validations()

  });

  it('6. User is able to Login ', () => {

    Homepage.user_login_popup()
    Login.Login_user()
    Homepage.redirection_after_signup_login()


  });

  it('7. Login page validations Check', () => {

    Homepage.user_login_popup()
    Login.invalid_login_creds_popup()
  });


  it('8. Add to cart > Login > Checkout ', () => {

    Homepage.select_product()
    Homepage.Checkout_from_cart_popup()
    Login.Login_orderPayment()
    CheckOut.check_userdetails_OP()
    CheckOut.check_order_summary()
    CheckOut.payement_details()
    CheckOut.order_success()



  });

  it('9. Add to cart > Login > Checkout from other payment option', () => {

    Homepage.select_product()
    Homepage.Checkout_from_cart_popup()
    Login.Login_orderPayment()
    CheckOut.check_userdetails_OP()
    CheckOut.check_order_summary()
    CheckOut.other_payment_option()
    CheckOut.order_success()

  });



  it('10. Add to cart > SignUp > Checkout ', () => {
    Homepage.select_product()
    Homepage.Checkout_from_cart_popup()
    SignUp.signup_orderPayement()
    SignUp.Create_new_user()
    CheckOut.check_userdetails_OP()
    CheckOut.check_order_summary()
    CheckOut.payement_details()
    CheckOut.order_success()


  });

  it('11. SignUp > Add to Cart > Checkout', () => {

    Homepage.user_signup()
    SignUp.Create_new_user()
    Homepage.redirection_after_signup_login()
    Homepage.select_product()
    Homepage.Checkout_from_cart_popup()
    CheckOut.check_userdetails_OP()
    CheckOut.check_order_summary()
    CheckOut.payement_details()
    CheckOut.order_success()

  });

  it('12. Login > Add to Cart > Checkout', () => {

    Homepage.user_login_popup()
    Login.Login_user()
    Homepage.redirection_after_signup_login()
    Homepage.select_product()
    Homepage.Checkout_from_cart_popup()
    CheckOut.check_userdetails_OP()
    CheckOut.check_order_summary()
    CheckOut.payement_details()
    CheckOut.order_success()

  });

  it('13. Checkout From Shopping Cart Page ', () => {

    Homepage.user_login_popup()
    Login.Login_user()
    Homepage.redirection_after_signup_login()
    Homepage.select_product()
    CheckOut.order_summary_cart_page()
    CheckOut.checkout_btn_cart_page()
    CheckOut.check_userdetails_OP()
    CheckOut.check_order_summary()
    CheckOut.other_payment_option()
    CheckOut.order_success()


  });





});