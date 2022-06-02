import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  language = '';
  listOfLanguage = ['English', 'Bangla', 'Hindi'];

  addLanguage() {
    console.log('addLanguage() called!');
    //confirm('Language Add? ' + this.language);
    this.listOfLanguage.push(this.language);
    //this.listOfLanguage.unshift();
    console.log(this.language + ' added');
  }
  addLanguageFirst() {
    this.listOfLanguage.unshift(this.language);
    console.log(this.language + ' added');
  }
  delFirstLanguage() {
    let Langdeleted = this.listOfLanguage.splice(0, 1); //0 position 1 item
    console.log(Langdeleted + ' deleted');
  }
  delLastLanguage() {
    let Langdeleted = this.listOfLanguage.pop();
    console.log(Langdeleted + ' deleted');
  }
}
