import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dataeng } from './dataeng';

describe('Dataeng', () => {
  let component: Dataeng;
  let fixture: ComponentFixture<Dataeng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dataeng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dataeng);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
