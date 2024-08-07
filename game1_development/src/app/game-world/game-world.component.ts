import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';
import { AIService } from '../ai.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-world',
  template: `
    <div class="game-container">
      <div class="game-world" [ngStyle]="{'background-image': 'url(assets/levels/' + currentLevel + '.jpg)'}">
        <app-player [player]="player$ | async"></app-player>
        <app-npc *ngFor="let npc of npcs$ | async" [npc]="npc"></app-npc>
        <app-resource *ngFor="let resource of resources$ | async" [resource]="resource"></app-resource>
      </div>
      <app-hud [player]="player$ | async" [level]="currentLevel"></app-hud>
    </div>
  `,
  styles: [`
    .game-container {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: relative;
    }
    .game-world {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      position: relative;
    }
  `]
})
export class GameWorldComponent implements OnInit {
  npcs$: Observable<any> | undefined;
  resources$: Observable<any> | undefined;
  player$: Observable<any> | undefined;
  currentLevel = 1;

  constructor(
    private gameState: GameStateService,
    private aiService: AIService
  ) {}

  ngOnInit() {
    this.gameState.initializeLevel(this.currentLevel);
    this.runGameLoop();
  }

  private runGameLoop() {
    requestAnimationFrame(() => this.update());
  }

  private update() {
    this.gameState.updatePlayerState();
    this.gameState.updateNPCStates();
    this.checkLevelCompletion();
    this.runGameLoop();
  }

  private checkLevelCompletion() {
    if (this.gameState.isLevelComplete()) {
      this.currentLevel++;
      this.gameState.initializeLevel(this.currentLevel);
    }
  }
}