import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PruebasUnitariasComponent } from './pruebas-unitarias.component';

describe('PruebasUnitariasComponent', () => {
  let component: PruebasUnitariasComponent;
  let fixture: ComponentFixture<PruebasUnitariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: []
    }).compileComponents();

    fixture = TestBed.createComponent(PruebasUnitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    component.form.controls['value1'].setValue('3');
    component.form.controls['value2'].setValue('5');
    component.onSubmit();
    expect(component.result).toBe(8);
  });

  it('should not add non-numeric values', () => {
    component.form.controls['value1'].setValue('a');
    component.form.controls['value2'].setValue('5');
    component.onSubmit();
    expect(component.result).toBeNaN();
  });
});

