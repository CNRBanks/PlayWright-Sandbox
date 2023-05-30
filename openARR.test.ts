import { chromium } from "playwright";


describe('ARR Navigation', () => {

         test('Open ARR', async () => {
            //launch browser
            const browser = await chromium.launch({
                headless: false, slowMo: 100
            })
            const context = await browser.newContext();
            const page = await context.newPage();
            // go to ap
            await page.goto('https://apricot.socialsolutions.com/auth');
            // insert email
            // const email = await page.$('#username');
            await page.type('id=username', 'autouser@gmail.com', {delay : 50});
            // insert password
            // const password = await page.$('#password');
            await page.type('id=password', 'frogger1111', {delay : 50});
            // click login
            await page.click('#login__button', {delay: 50});
            // navigate to Administrator tab
            await page.goto('https://apricot.socialsolutions.com/admin');
            // open Report Center from side nav
            await page.getByText('Report Center').click();
            /// open ARR
            await page.getByText('Apricot Results Reporting').click();
            // confirm page loads in new tab
            await page.getByText('Recent Documents').isVisible();
            // close newly opened tab
            await browser.close()
        })
})

