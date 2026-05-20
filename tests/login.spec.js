import {test, expect} from '@playwright/test';  


test("login test",async ({page})=>{

    await page.goto("/TestServer/Build/Advance_Library_System/");
    await page.locator("//a[@href='index.php?module=Calendar&action=index']").click();
});



