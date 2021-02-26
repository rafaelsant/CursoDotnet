/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventoCardComponent } from './evento-card.component';

describe('EventoCardComponent', () => {
  let component: EventoCardComponent;
  let fixture: ComponentFixture<EventoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
