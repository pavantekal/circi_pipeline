import Page from './page';
import LoginPage from './login.page';
 
class LookupPage extends Page {
   

  get emailField() {return $('.email-typo-input');}
  get passwordField() {return $('.ui-password__input');}
  get clickButton() { return $('//button[@name="commit"]');}


  enterEmail(email) {
    this.emailField.setValue(email);
    if(this.clickButton.isClickable()){
    this.clickButton.click();
    }
    browser.pause(5000);
    this.clickButton.click();
    return LoginPage;
  }

  enterPassword(password) {
    this.passwordField.setValue(password);
    this.clickButton.click();
    return this;
  }


 
}

export default new LookupPage();
