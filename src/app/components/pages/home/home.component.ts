import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  soundMachine: any = new Audio('/assets/sound/teclado.mp3');
  
  constructor() { }

  ngOnInit(): void {

      this.soundMachine.play(); 
  }
}
