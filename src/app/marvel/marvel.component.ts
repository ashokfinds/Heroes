import { Component, OnInit } from '@angular/core';
import { HeroService } from './marvel.service.ts'
@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css'],
  providers: [HeroService]
})
export class MarvelComponent implements OnInit {
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
