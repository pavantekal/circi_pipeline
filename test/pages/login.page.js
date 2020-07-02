import Page from './page';
 
class LoginPage extends Page {
     
  get passwordField() {return $('.account_password');}
  get clickButton() { return $('//button[@name="commit"]');}

  enterPassword(password) {
    this.passwordField.setValue(password);
    this.clickButton.click(); 
    return this;
  }
  
}

export default new LoginPage();