import { Component } from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent {
  images = [    
    { src: 'assets/img/portfolio/pubg-mobile.jpg', alt:'PUBG Mobile' },
    { src: 'assets/img/portfolio/mobile-legends.jpg', alt:'Mobile Legends BangBang' },
    { src: 'assets/img/portfolio/brawl-stars.jpg', alt:'Brawl Stars' },
    { src: 'assets/img/portfolio/sniper-3d.jpg', alt:'Snipper 3D' },
    { src: 'assets/img/portfolio/call-of-duty-mobile.jpg', alt:'Call Of Duty Mobile' }    
  ]
}
