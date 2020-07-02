import homePage from '../pages/home.page';
import loginPage from '../pages/lookup.page';
import lookupPage from '../pages/lookup.page';

describe('Login Page Suite', function() {
  it('Login to Shopify ', function() {
    // Using component to capture repeating html part
    homePage
        .open().updateButtonText('kaka-angadi.myshopify.com');
        lookupPage.enterEmail('kulkarni.karthik@thinkify.io');
        lookupPage.enterPassword('Shopify123');
           
  });
});
