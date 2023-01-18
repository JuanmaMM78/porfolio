import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  switch: boolean = false;
  audio: any = new Audio('/assets/sound/off-click.mp3');

  constructor() { }

  ngOnInit(): void {
  }

  changeSwitch(): void{
    this.switch = !this.switch
  }

  play(): void{
    this.audio.play();
  }


}
