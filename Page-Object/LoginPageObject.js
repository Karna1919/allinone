exports.LoginPageObject = class LoginPageObject {


    constructor(page) { 

        this.page = page;
        this.username = page.locator("//input[@id='username']");
        this.password = page.locator("//input[@id='password']");
        this.loginButton = page.locator("//button[@id='login']");
    }
    async adminLogin(username,password){

        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}