import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalesService } from '../services/locales.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  locales: any;

  constructor(private router:Router, private localesService: LocalesService) { }
  ngOnInit() {
    
    this.locales = this.localesService.getLocales();
  }
  async filterList(evt: { srcElement: { value: any; }; }) {
    this.locales = this.localesService;
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.locales = this.locales.filter(local => {
      if (local.calleprincipal && searchTerm) {
        return (local.calleprincipal.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}
