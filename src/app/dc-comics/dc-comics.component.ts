import { Component, OnInit } from '@angular/core';
import { HeroService } from './dc-comics.service.ts'
@Component({
  selector: 'app-dc-comics',
  templateUrl: './dc-comics.component.html',
  styleUrls: ['./dc-comics.component.css'],
  providers: [HeroService]
})
export class DcComicsComponent implements OnInit {
  heros : string[];
  inputHero = null;
  btnDisable = false;
  adding = false;
  AddHero(){
  	this.heros.push(this.inputHero);
  	this.inputHero = null
  	this.adding = false
  }
  addMore(){
  	this.adding = !this.adding
  }
  constructor(private ajax: HeroService) {
  	this.heros = this.ajax.heros
   }

  ngOnInit() {
  }

}
