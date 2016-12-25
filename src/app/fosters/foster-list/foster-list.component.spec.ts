/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FosterListComponent } from './foster-list.component';

describe('FosterListComponent', () => {
  let component: FosterListComponent;
  let fixture: ComponentFixture<FosterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
