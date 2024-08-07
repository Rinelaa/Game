import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-npc',
  template: `
    <div class="npc" [ngClass]="npc.type" [style.left.px]="npc.x" [style.top.px]="npc.y" [attr.data-health]="npc.health">
    </div>
  `,
  styles: [`
    .npc {
      width: 30px;
      height: 30px;
      position: absolute;
      transition: all 0.2s ease;
    }
    .npc.hostile { background-color: #e74c3c; }
    .npc.neutral { background-color: #f1c40f; }
    .npc.ally { background-color: #2ecc71; }
    .npc::before {
      content: attr(data-health);
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 2px 5px;
      border-radius: 3px;
      font-size: 12px;
    }
  `]
})
export class NpcComponent {
  @Input() npc: any;
}