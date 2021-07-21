import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from '../domain/local';
import { LocalesService } from '../services/locales.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  
  
  local: Local = new Local;

  constructor(private route: ActivatedRoute, private router: Router,
    private contactosService: LocalesService) { 
      
  }

  ngOnInit() {
    
  }

  add(){
    console.log(this.local);
    this.contactosService.save(this.local)
  }

}
