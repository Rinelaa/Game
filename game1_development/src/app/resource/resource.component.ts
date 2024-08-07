import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource',
  template: `
    <div class="resource" [style.left.px]="resource.x" [style.top.px]="resource.y"></div>
  `,
  styles: [`
    .resource {
      width: 20px;
      height: 20px;
      background-color: #9b59b6;
      position: absolute;
      border-radius: 3px;
    }
    .resource::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: rgba(255, 255, 255, 0.7);
      transform: translate(-50%, -50%) rotate(45deg);
    }
  `]
})
export class ResourceComponent {
  @Input() resource: any;
}