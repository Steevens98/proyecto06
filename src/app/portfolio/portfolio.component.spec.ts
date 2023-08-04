import { ComponentFixture, TestBed } from '@angular/core/testing';
//Importe el módulo cliente para requerimientos http
import { HttpClientModule } from '@angular/common/http';
//Importe el servicio
import { FirebaseService } from '../providers/firebase.service'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { PortfolioComponent } from './portfolio.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      
      imports: [ HttpClientModule,
        MatPaginatorModule,
        NoopAnimationsModule],
      //Registre el servicio como proveedor de datos
      providers: [ FirebaseService ],
      declarations: [PortfolioComponent]
    });
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('img element', ()=> {
    const headerElement: HTMLElement = fixture.nativeElement;
    const nav = headerElement.querySelector('img')!;
    expect(nav).toBeTruthy();
  });

  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {
    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();
    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {
      // Valide que la respuesta sea mayor que 0
      expect(component.data.length).toBeGreaterThan(0)
      // Que espere hasta que llegue la respuesta
      done();
    });
  });
});
