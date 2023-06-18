import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotInfoComponent } from './bot-info.component';

describe('BotInfoComponent', () => {
  let component: BotInfoComponent;
  let fixture: ComponentFixture<BotInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotInfoComponent]
    });
    fixture = TestBed.createComponent(BotInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
