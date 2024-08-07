import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hud',
  template: `
    <div class="hud">
      <div class="hud-item">Level: {{level}}</div>
      <div class="hud-item">Health: {{player.health}}</div>
      <div class="health-bar">
        <div class="health-bar-fill" [style.width.%]="player.health"></div>
      </div>
      <div class="hud-item">Inventory: {{player.inventory.length}} items</div>
    </div>
  `,
  styles: [`
    .hud {
      position: absolute;
      top: 10px;
      left: 10px;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
    }
    .hud-item {
      margin-bottom: 5px;
    }
    .health-bar {
      width: 100px;
      height: 10px;
      background-color: #e74c3c;
      margin-top: 5px;
    }
    .health-bar-fill {
      height: 100%;
      background-color: #2ecc71;
      transition: width 0.3s ease;
    }
  `]
})
export class HudComponent {
  @Input() player: any;
  @Input() level: number | undefined;
}