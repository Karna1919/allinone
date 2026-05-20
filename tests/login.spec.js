import {test, expect} from '@playwright/test';  


test("login test",async ({page})=>{

    await page.goto("/index.php?action=Login&module=Users");
    await page.locator("//a[@href='index.php?module=Calendar&action=index']").click();
});



