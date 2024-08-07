import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  template: `
    <div class="player" [style.left.px]="player.x" [style.top.px]="player.y"></div>
  `,
  styles: [`
    .player {
      width: 40px;
      height: 40px;
      background-color: #3498db;
      border-radius: 50%;
      position: absolute;
      transition: all 0.1s ease;
    }
    .player::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  `]
})
export class PlayerComponent {
  @Input() player: any;
}