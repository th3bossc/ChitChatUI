import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBotComponent } from './choose-bot.component';

describe('ChooseBotComponent', () => {
  let component: ChooseBotComponent;
  let fixture: ComponentFixture<ChooseBotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseBotComponent]
    });
    fixture = TestBed.createComponent(ChooseBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
