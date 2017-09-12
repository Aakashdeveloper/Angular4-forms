import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages =['English','Spanish','Other'];
  model=new Employee('Bhumika', 'Bajpai',9643018019,true,"male","default");
  hasPrimaryLanguageError=false;
  validatePrimaryLanguage(event){
    console.log('lang: '+this.model.primaryLanguage)
    if(this.model.primaryLanguage === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }
  /*firstNameToUpperCase(value: string){
    if(value.length > 0)
      this.model.firstName= value.charAt(0).toUpperCase()+ value.slice(1);
    else
      this.model.firstName = value;
  }*/
}
