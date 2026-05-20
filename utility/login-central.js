import {chromium} from '@playwright/test';
import {LoginPageObject} from '../Page-Object/LoginPageObject';
import logindata from '../test-data/LoginData.json';


async function globalSetup() {
   const browser = await chromium.launch();
 const page = await browser.newPage();
    await page.goto("http://49.249.29.4:8081/TestServer/Build/Advance_Library_System/");
    let loginpageobject =  new LoginPageObject(page);
    const user = logindata;

    await loginpageobject.adminLogin(user.username, user.password);
await page.waitForURL("http://49.249.29.4:8081/TestServer/Build/Advance_Library_System/home.php");
    await page.context().storageState({
        path: "state.json"
    });

   await browser.close();  
}

export default globalSetup;