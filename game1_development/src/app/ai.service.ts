import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root',
})
export class AIService {
  private model: tf.LayersModel | undefined;
  

  constructor() {
    this.loadModel();
  }

  async loadModel() {
    try {
      this.model = await tf.loadLayersModel('assets/model/model.json');
      console.log('Model loaded successfully');
    } catch (error) {
      console.error('Error loading model:', error);
    }
  }

  async predictAction(npcState: number[], playerState: number[], worldState: number[]): Promise<number> {
    // Ensure the model is loaded
    if (!this.model) {
      console.error('Model is not loaded yet');
      throw new Error('Model is not loaded yet');
    }

    // Ensure the input states are defined
    if (!npcState || !playerState || !worldState) {
      console.error('Input states are not defined');
      throw new Error('Input states are not defined');
    }

    // Combine the states and create the input tensor
    const input = tf.tensor2d([...npcState, ...playerState, ...worldState], [1, npcState.length + playerState.length + worldState.length]);

    // Make the prediction
    const prediction = this.model.predict(input) as tf.Tensor;

    // Extract the predicted action
    return prediction.argMax(-1).dataSync()[0];
  }
}
