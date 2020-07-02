import Page from './page';
import ModalComponent from './components/home_modal.component';
import loginPage from './lookup.page';

class HomePage extends Page {
  //get pageModals() {
    //return $$('#overview .col-sm').map((modal) => new ModalComponent(modal));
  //}

  get nameField() {return $('.next-input');}
  get clickButton() { return $('.ui-button');}

   
  updateButtonText(text) {
    this.nameField.setValue(text);
    this.clickButton.click();
    return loginPage;
  }

  open() {
    super.open('store-login');
    return this;
  }
}

export default new HomePage();
