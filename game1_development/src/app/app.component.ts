// src/app/parent/parent.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // Importing RouterOutlet from Angular Router
import { GameWorldComponent } from './game-world/game-world.component';
import { NpcComponent } from './npc/npc.component';
import { HudComponent } from './hud/hud.component';

@Component({
  selector: 'app-parent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, GameWorldComponent, NpcComponent, HudComponent],
})
export class AppComponent {
  // Component logic here
}
