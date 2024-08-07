import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private levels = [
    { id: 1, name: 'Suburban Outskirts', difficulty: 1, aiAggressiveness: 0.2 },
    { id: 2, name: 'Downtown', difficulty: 2, aiAggressiveness: 0.4 },
    { id: 3, name: 'Industrial Zone', difficulty: 3, aiAggressiveness: 0.6 },
    { id: 4, name: 'AI Headquarters', difficulty: 4, aiAggressiveness: 0.8 },
    { id: 5, name: 'Singularity Core', difficulty: 5, aiAggressiveness: 1 }
  ];

  getLevel(id: number) {
    return this.levels.find(level => level.id === id);
  }

  generateLevelEntities(levelId: number) {
    const level = this.getLevel(levelId);
    // Generate NPCs and resources based on level difficulty
    const npcs = this.generateNPCs(level);
    const resources = this.generateResources(level);
    return { npcs, resources };
  }

  private generateNPCs(level: any) {
    // Generate NPCs based on level difficulty
    return [];
  }

  private generateResources(level: any) {
    // Generate resources based on level difficulty
    return [];
  }
}