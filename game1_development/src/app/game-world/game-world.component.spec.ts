import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWorldComponent } from './game-world.component';

describe('GameWorldComponent', () => {
  let component: GameWorldComponent;
  let fixture: ComponentFixture<GameWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
