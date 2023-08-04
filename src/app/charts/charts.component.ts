import { Component, OnInit } from '@angular/core';
import { Games} from '../interfaces/games';
import { FirebaseService } from '../providers/firebase.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public data : Games[] = [];
  public datos : Games[] = [];
  
  dataPoints: any[] = []
  barchart: any

  chart:any;

  chartOptions = {
    animationEnabled: true,
	  theme: "dark2",
    title:{
      text: "Calificaciones totales de los 15 primeros juegos"
    },
    data: [{
      type: "bar",    
      dataPoints: this.dataPoints
    }]

  }
  constructor(private dataProvider: FirebaseService) {}

  getInstance(barChart : object) {
    this.barchart = barChart
  }
  
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Games[]); 
      this.datos = this.data.slice(0, 15);
      console.log(this.datos)

      let dataFromService = this.datos.map(item => ({ label: item.title, y: parseInt(item['total ratings'])}));    
      
      
      this.dataPoints.shift()

      dataFromService.forEach((value) => {
        this.dataPoints.push(value);
      });

      //this.dataPoints.push({ label: "Snapchat", y: 25 })
      this.barchart.render()

      //this.chartOptions.data[0].dataPoints = dataFromService
      

      console.log(dataFromService)
    })
  }
    
  
}
