

class Homepage {


    logo = "#Layer_1"
    go_up_btn = "#scrollToTop > img"
    top_element = "#speakersImg"
    our_products = "li:nth-child(8) > a:nth-child(1)"
    special_offer = "li:nth-child(7)> a"
    special_offer_section = "#special_offer_items>h3"
    popular_item = "li:nth-child(6)> a"
    popular_items_section = "#popular_items>h3"
    contact_us = "li:nth-child(5)> a"
    contact_us_section = "#supportCover > div:nth-child(2) >h1 "
    search_icon = "#menuSearch"
    search_bar = "#autoComplete"
    searc_view_all_btn = ".viewAll"
    search_cross_btn = "img[src='../../css/images/closeDark.png']"
    user_icon = "#menuUser"
    signup_popup_cross_btn = ".closeBtn.loginPopUpCloseBtn"
    signup_popup = ".PopUp"
    signup_popup_create_account_btn = ".create-new-account.ng-scope"
    add_to_cart = "#menuCart"
    home_breadcrumb = ".pages.categoryDataFixedNav > a:first-child"
    add_to_cart_submenu = "#toolTipCart"
    cart_item_count = "li[data-ng-mouseenter='enterCart()'] ul li span[class='roboto-regular']"
    shopping_cart_page_heading = ".roboto-regular.center.sticky.fixedImportant.ng-binding"
    continue_shopping_btn = ".a-button.ng-scope"
    help_icon = "#menuHelp"
    help_subitems = "#helpMiniTitle"
    help_subitems_about = ".option.roboto-medium.ng-scope[translate='ABOUT']"
    help_subitems_about_page_text = "#aboutPage >article >h3"
    help_subitem_AOS_Version = "a[id='helpLink'] label:nth-child(2)"
    tablet_img = "#tabletsImg"
    tablet_list_page = "div[class='cell categoryRight'] > ul "
    tablets_list_item_two_img = "#17"
    tablets_list_item_two_name = ".productName.ng-binding"
    tablet_two_product_page = "#product_2"
    tablet_two_product_page_img = "#mainImg"
    tablet_two_product_page_name = "#Description > .roboto-regular"
    tablet_two_product_page_price = "#Description > h2"
    tablet_two_product_page_quantity_text = "label[translate='Quantity:']"
    tablet_two_product_page_quantity_minus = ".minus"
    tablet_two_product_page_quantity_plus = ".plus"
    tablet_two_product_page_quantity_value = "input[name='quantity']"
    tablet_two_product_page_add_to_cart_btn = "button[name='save_to_cart']"
    product_in_cart = "#product"
    product_in_cart_img = "#product > td:first-child > a > img"
    product_in_cart_name = "#product > td:nth-child(2) > a > h3"
    product_in_cart_quantity = "#product > td:nth-child(2) > a :nth-child(2)"
    product_in_cart_product_price = "#product > td:nth-child(3) > p"
    product_in_cart_remove_product_btn = ".removeProduct.iconCss.iconX"
    product_in_cart_total_items_count = "label[class='roboto-regular ng-binding']"
    product_in_cart_total_price = ".price.roboto-regular.ng-binding"
    product_in_cart_checkout_btn = "#checkOutPopUp"
    select_category_dropdown = "select[name='categoryListboxContactUs']"
    select_product_dropdown = "select[name='productListboxContactUs']"
    email_field = "input[name='emailContactUs']"
    subject_field = "textarea[name='subjectTextareaContactUs']"
    contact_us_send_btn = "#send_btn"
    contact_form_submit_continue_shopping = "#registerSuccessCover > div > a"
    contact_form_submit_text = "#registerSuccessCover > div > p"

    create_account_page_title = "#registerPage > article> h3"
    order_payment_page = ".roboto-regular.sticky.fixedImportant.ng-scope"




    visit_page() {

        cy.visit("https://www.advantageonlineshopping.com/")
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.wait(5000)
    }

    is_logo_visible() {
        cy.get(this.logo).should("exist")
    }

    is_logo_click_redirect_homepage() {
        cy.get(this.logo).click()
        cy.url().should("eq", "https://www.advantageonlineshopping.com/#/")
    }

    go_to_top_arrow_check() {
        cy.scrollTo(0, 1000)
        cy.get(this.go_up_btn).click()
        cy.get(this.top_element).should("be.visible")

    }


    verify_our_product_section() {
        // our products :

        cy.get(this.our_products).should("contain", "OUR PRODUCTS")
        cy.get(this.our_products).click()
        cy.get(this.top_element).should("be.visible")

    }

    verify_special_offer_section() {

        // speacial offer


        cy.get(this.special_offer).should("contain", "SPECIAL OFFER")
        cy.get(this.special_offer).click()
        cy.get(this.special_offer_section).should("contain", "SPECIAL OFFER")

    }

    verify_popular_item_section() {



        // popular items

        cy.get(this.popular_item).should("contain", "POPULAR ITEMS")
        cy.get(this.popular_item).click()
        cy.get(this.popular_items_section).should("contain", "POPULAR ITEMS")

    }


    verify_search_bar() {



        // seeach bar 

        cy.get(this.search_icon).should("be.visible")
        cy.get(this.search_icon).click()
        cy.get(this.search_bar).type("laptop")
        cy.get(this.searc_view_all_btn).click()
        cy.url().should("eq", "https://www.advantageonlineshopping.com/#/search/?viewAll=laptop")
        cy.get(this.home_breadcrumb).click()
        cy.get(this.search_icon).click()
        // cy.get(this.search_bar).type("Mobile")
        // cy.get(this.search_cross_btn).click()
        // cy.get(this.search_bar).should("not.be.visible")

    }
    // user icon 

    verify_user_icon() {



        cy.get(this.user_icon).should("be.visible")
        cy.get(this.user_icon).click()
        cy.get(this.signup_popup).should("be.visible")
        cy.get(this.signup_popup_cross_btn).should("be.visible")
        cy.get(this.signup_popup_cross_btn).click()
        cy.get(this.signup_popup).should("not.be.visible")


    }
    // add to cart 

    verify_add_to_cart() {




        cy.get(this.add_to_cart).should("be.visible")
        cy.get(this.add_to_cart).click()
        cy.get(this.add_to_cart_submenu).should("be.visible")
        cy.get(this.cart_item_count).contains("0")
        cy.get(this.shopping_cart_page_heading).should("contain", "SHOPPING CART")
        cy.get(this.continue_shopping_btn).click()
        cy.url().should("eq", "https://www.advantageonlineshopping.com/#/")


    }

    verify_help_us() {

        // help us 

        cy.get(this.help_icon).should("be.visible")
        cy.get(this.help_icon).click()
        cy.get(this.help_subitems).should("be.visible")
        cy.get(this.help_subitems_about).should("be.visible")
        cy.get(this.help_subitems_about).click()
        cy.get(this.help_subitems_about_page_text).should("be.visible")
        cy.get(this.help_subitems_about_page_text).should("contain", "ABOUT")
        cy.go("back")
        cy.get(this.help_icon).click()
        cy.get(this.help_subitem_AOS_Version).should("be.visible")
        cy.get(this.help_subitem_AOS_Version).click()
        cy.url().should("eq", "https://www.advantageonlineshopping.com/#/version")
        cy.go("back")



    }


    select_product()
    {
        cy.wait(5000)
        cy.get(this.tablet_img).click()
        cy.get(this.tablets_list_item_two_img).click()
        cy.get(this.tablet_two_product_page_add_to_cart_btn).click()
        cy.wait(5000)
        cy.get(this.tablet_two_product_page_add_to_cart_btn).click()
        cy.get(this.product_in_cart_quantity).invoke("text").should("include", "QTY: 2")
        cy.get(this.product_in_cart_product_price).invoke("text").should("include", "$2,558.00")
        cy.get(this.product_in_cart_remove_product_btn).should("be.visible")
        cy.get(this.product_in_cart_total_items_count).should("be.visible")
        cy.get(this.product_in_cart_total_items_count).invoke("text").should("include", "(2 Items)")
        cy.get(this.product_in_cart_total_price).invoke("text").should("include", "$2,558.00")
        cy.get(this.product_in_cart_checkout_btn).invoke("text").should("include", "CHECKOUT  ($2,558.00)")
    }

    Checkout_from_cart_popup()
    {
            cy.get(this.product_in_cart_checkout_btn).click()
            cy.get(this.order_payment_page).should("be.visible")
            cy.get(this.order_payment_page).invoke("text").should("include", "ORDER PAYMENT")
    }

    select_product_validations() {

        cy.wait(5000)

        cy.get(this.tablet_img).click()
        cy.url().should("eq", "https://www.advantageonlineshopping.com/#/category/Tablets/3")
        cy.get(this.tablet_list_page).find("li").should("have.length", 3)
        cy.get(this.tablets_list_item_two_img).should("be.visible")
        cy.get(this.tablets_list_item_two_name).eq(1).should("contain", "HP Elite x2 1011 G1 Tablet")
        cy.get(this.tablets_list_item_two_img).click()
        cy.url().should("eq", "https://www.advantageonlineshopping.com/#/product/17")
        cy.get(this.tablet_two_product_page).should("be.visible")
        cy.get(this.tablet_two_product_page_name).should("be.visible")
        // cy.get(this.tablet_two_product_page_name ,  { timeout: 10000 }).should("include", "HP Elite x2 1011 G1 Tablet")
        cy.get(this.tablet_two_product_page_name).invoke('text').should("include", " HP ELITE X2 1011 G1 TABLET ")
        cy.get(this.tablet_two_product_page_price).should("contain", "$1,279.00")

        // extract the price  --will do this later on .. so now we will keep the price as static data 

        // cy.get('p') // Replace 'p' with the actual selector for your p tag
        // .invoke('text')
        // .then((text) => {
        //   pText = text;

        //   // Log the text content of the p tag
        //   cy.log('Text content of p tag:', pText);

        //   // Use the extracted text in further assertions or actions
        //   // For example, find the label tag and check if it contains the same text
        //   cy.get('label') // Replace 'label' with the actual selector for your label tag
        //     .invoke('text')
        //     .should('include', pText);
        // });


        // cy.get(this.tablet_two_product_page_price).invoke("text").then((price) =>{

        // })

        cy.get(this.tablet_two_product_page_quantity_text).should("be.visible")
        cy.get(this.tablet_two_product_page_quantity_plus).should("be.visible")
        cy.get(this.tablet_two_product_page_quantity_minus).should("be.visible")
        cy.get(this.tablet_two_product_page_quantity_minus).should('have.class', 'disableBtn');
        // cy.get(this.tablet_two_product_page_quantity_minus).invoke('attr', 'class').then((classAttribute) => {
        //         expect(classAttribute).not.to.include('disabled');
        //     });
        cy.get(this.tablet_two_product_page_quantity_value).should("have.value", "1")
        cy.get(this.tablet_two_product_page_quantity_plus).click()
        cy.get(this.tablet_two_product_page_quantity_value).should("have.value", "2")
        cy.get(this.tablet_two_product_page_quantity_minus).click()
        cy.get(this.tablet_two_product_page_quantity_value).should("have.value", "1")
        cy.get(this.tablet_two_product_page_add_to_cart_btn).should("be.visible")
        cy.get(this.tablet_two_product_page_add_to_cart_btn).click()
        cy.get(this.add_to_cart_submenu).should("be.visible")
        cy.get(this.product_in_cart).should("be.visible")
        cy.get(this.product_in_cart_img).should("be.visible")
        cy.get(this.tablet_two_product_page_name).should("be.visible")
        cy.get(this.product_in_cart_name).invoke("text").should("include", "HP ELITE X2 1011 G1 TABLET")

        cy.get(this.product_in_cart_product_price).should("be.visible")
        cy.get(this.product_in_cart_product_price).invoke("text").should("include", "$1,279.00")
        cy.get(this.product_in_cart_quantity).should("be.visible")
        cy.get(this.product_in_cart_quantity).invoke("text").should("include", "QTY: 1")
        cy.wait(5000)
        cy.get(this.tablet_two_product_page_add_to_cart_btn).click()
        cy.get(this.product_in_cart_quantity).invoke("text").should("include", "QTY: 2")
        cy.get(this.product_in_cart_product_price).invoke("text").should("include", "$2,558.00")
        cy.get(this.product_in_cart_remove_product_btn).should("be.visible")
        cy.get(this.product_in_cart_total_items_count).should("be.visible")
        cy.get(this.product_in_cart_total_items_count).invoke("text").should("include", "(2 Items)")
        cy.get(this.product_in_cart_total_price).invoke("text").should("include", "$2,558.00")
        cy.get(this.product_in_cart_checkout_btn).invoke("text").should("include", "CHECKOUT  ($2,558.00)")
        cy.get(this.product_in_cart_remove_product_btn).click()
        cy.url().should("eq", "https://www.advantageonlineshopping.com/#/product/17")
        cy.get(this.cart_item_count).contains("0")
        cy.get(this.logo).click()
    }

    verify_contact_us_form() {

        cy.get(this.contact_us).should("contain", "CONTACT US")
        cy.get(this.contact_us).click()
        cy.get(this.contact_us_section).should("contain", "CONTACT US")

        cy.get(this.select_category_dropdown).should("be.visible")
        cy.get(this.select_category_dropdown).select('object:62')
        cy.get(this.select_category_dropdown).invoke("text").should("include", "Tablets")
        cy.get(this.select_product_dropdown).should("be.visible")
        // cy.wait(3000)
        //         cy.get(this.select_product_dropdown).select("object:133")
        // cy.get("select[name='productListboxContactUs']").select("object:133")
        // cy.get("object:133").click()
        cy.get(this.select_product_dropdown).contains('HP Elite x2 1011 G1 Tablet').invoke('val').as('selectedValue');

        //    cy.get(this.select_product_dropdown).select(this.selectedValue);
        cy.get('@selectedValue').then(value => {
            this.selectedValue = value;
            cy.get(this.select_product_dropdown).select(this.selectedValue);
        });
        cy.get(this.select_product_dropdown).invoke("text").should("include", "HP Elite x2 1011 G1 Tablet")
        cy.get(this.email_field).type("abc@yopmail.com")
        cy.get(this.subject_field).type("QWERTYU POIUY ASDFGH ZXCVBNM")
        cy.get(this.contact_us_send_btn).click()
        cy.get(this.contact_form_submit_text).should("be.visible")
        cy.get(this.contact_form_submit_text).invoke("text").should("include", "Thank you for contacting Advantage support.")

        cy.get(this.contact_form_submit_continue_shopping).should("be.visible")
        cy.get(this.contact_form_submit_continue_shopping).invoke("text").should("include", "CONTINUE SHOPPING")
    }

    user_signup() {
        cy.get(this.user_icon).click()
        cy.get(this.signup_popup).should("be.visible")
        cy.get(this.signup_popup_create_account_btn).click()
        cy.url().should("eq", "https://www.advantageonlineshopping.com/#/register")
        cy.get(this.create_account_page_title).invoke("text").should("include", "CREATE ACCOUNT")
    }


    user_login_popup() {
        cy.get(this.user_icon).click()
        cy.get(this.signup_popup).should("be.visible")
    }

    redirection_after_signup_login() {
        cy.fixture("signup_creds").then((creds) => {
            cy.url().should("eq", "https://www.advantageonlineshopping.com/#/")
            cy.get(".hi-user.containMiniTitle.ng-binding").invoke("text").should("include", creds.username)
        })

    }


}

export default new Homepage