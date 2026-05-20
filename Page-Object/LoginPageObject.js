exports.LoginPageObject = class LoginPageObject {


    constructor(page) { 

        this.page = page;
        this.username = page.locator("//input[@name='user_name']");
        this.password = page.locator("//input[@name='user_password']");
        this.loginButton = page.locator("//input[@id='submitButton']");
    }
    async adminLogin(username,password){

        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}