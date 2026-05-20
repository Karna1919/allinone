import {chromium} from '@playwright/test';
import {LoginPageObject} from '../Page-Object/LoginPageObject';
import {logindata} from '../test-data/LoginData.json';


async function globalSetup() {
   const browser = await chromium.launch();
 const page = await browser.newPage();
    await page.goto("http://localhost:8888/index.php?action=Login&module=Users");
    let loginpageobject =  new LoginPageObject(page);
    for(let key in logindata){
    await loginpageobject.adminLogin(logindata[key].username, logindata[key].password);
    await page.context().storageState({path:"state.json"});
    await browser.close();  
    }
}

export default globalSetup;