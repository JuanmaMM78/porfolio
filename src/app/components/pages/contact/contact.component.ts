import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  switchMove: boolean = false;
  switchNone: boolean = false;
  switchSend: boolean = false;

  
  formModel: FormGroup;
  name: string = '';
  contactError: any;
  comment: string= '';

  audio: any = new Audio('/assets/sound/send.mp3');

  constructor(
    private contactForm: ContactService,
  ) { 

    this.formModel = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),

      contact: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      comment: new FormControl('', [])
    })
  }

  ngOnInit(): void {
  }

  changeSwitch(): void{
    this.switchMove = !this.switchMove;
    this.switchNone = !this.switchNone;
    this.switchSend = !this.switchSend;

    setTimeout(this.reload, 2500)
    
  }

  play(): void{
    this.audio.play();
  }

  reload(): void {
    location.reload()
  }
 
  async modal(): Promise<any> {

    if (this.formModel.value.comment === '') {
      this.formModel.value.comment = 'Sin comentario.'
    }
    await this.contactForm.setEmail(this.formModel.value.name, this.formModel.value.contact, this.formModel.value.comment);
    
  }

  nameContact(nContact: any) {
    this.name= nContact.target.value;
  }

  checkControl(pControlName: string, pError: string): boolean { if (this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched) { return true } else { return false } 
}

}



