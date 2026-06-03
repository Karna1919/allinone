import {test, expect} from '@playwright/test';  


test("login test @Smoke",async ({page})=>{

    await page.goto("http://49.249.29.4:8081/TestServer/Build/Advance_Library_System/home.php");
    await page.getByRole('link', { name: 'Home' }).click();
});

test("login @Web ",async ({page})=>{

    console.log("Okkk");
    
})



