import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LevelService } from './level.service';
import { AIService } from './ai.service';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private playerSubject = new BehaviorSubject({x: 0, y: 0, health: 100, inventory: []});
  private npcsSubject = new BehaviorSubject<any[]>([]);
  private resourcesSubject = new BehaviorSubject<any[]>([]);
  private currentLevelSubject = new BehaviorSubject(1);

  player$ = this.playerSubject.asObservable();
  npcs$ = this.npcsSubject.asObservable();
  resources$ = this.resourcesSubject.asObservable();
  currentLevel$ = this.currentLevelSubject.asObservable();

  constructor(private levelService: LevelService, private aiService: AIService) {}

  initializeLevel(levelId: number) {
    const level = this.levelService.getLevel(levelId);
    const entities = this.levelService.generateLevelEntities(levelId);
    
    this.npcsSubject.next(entities.npcs);
    this.resourcesSubject.next(entities.resources);
    this.currentLevelSubject.next(levelId);
  }

  updatePlayerState() {
    // Update player state based on input and game rules
  }

  async updateNPCStates() {
    const npcs = this.npcsSubject.value;
    const playerState = this.playerSubject.value;
    const worldState = this.getWorldState();

    for (let npc of npcs) {
      await this.aiService.updateNPC(npc, playerState, worldState);
    }

    this.npcsSubject.next(npcs);
  }

  isLevelComplete(): boolean {
    // Implement level completion logic
    return false;
  }

  private getWorldState() {
    // Return relevant world state for AI decisions
    return {};
  }
}