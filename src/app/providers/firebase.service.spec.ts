import { TestBed } from '@angular/core/testing';
//Importe el módulo cliente para requerimientos http
import { HttpClientModule } from '@angular/common/http';
//Importe la interfaz
import { Games } from '../interfaces/games';

import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //Registre el módulo de petición http
      imports: [ HttpClientModule ],
      //Registre el servicio como proveedor de datos
      providers: [ FirebaseService ]
    });
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return value from observable', (done: DoneFn) => {
    //Invoque el método con la petición asincrónica
    service.getResponse().subscribe(data => {
      // Valide que la respuesta sea mayor que 0
      expect((data as Games[]).length).toBeGreaterThan(0)
      // Que espere hasta que llegue la respuesta 
      done();
    });
  });
  
});
