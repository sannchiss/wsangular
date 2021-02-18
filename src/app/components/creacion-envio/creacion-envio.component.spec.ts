import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionEnvioComponent } from './creacion-envio.component';

describe('CreacionEnvioComponent', () => {
  let component: CreacionEnvioComponent;
  let fixture: ComponentFixture<CreacionEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
