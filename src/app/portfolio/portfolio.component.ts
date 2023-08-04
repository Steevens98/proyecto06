import { Component, OnInit, ViewChild } from '@angular/core';
import { Games} from '../interfaces/games';
import { FirebaseService } from '../providers/firebase.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  pageSize = 20; 
  desde: number = 0;
  hasta: number = 20;
  cantidadDatos = 0;
  
  public data : Games[] = [];
  constructor(private dataProvider: FirebaseService) {}
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Games[]); 
      this.cantidadDatos = Object.keys(this.data).length;
    })
  }

  cambiarPagina(e: PageEvent) {
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
     
}




