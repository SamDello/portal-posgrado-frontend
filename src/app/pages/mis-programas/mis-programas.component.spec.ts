import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisProgramasComponent } from './mis-programas.component';

describe('MisProgramasComponent', () => {
  let component: MisProgramasComponent;
  let fixture: ComponentFixture<MisProgramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisProgramasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
