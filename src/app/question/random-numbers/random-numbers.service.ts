import { Injectable, signal } from '@angular/core';
import { DifficultyOptions } from '../question.model';

@Injectable({ providedIn: 'root' })
export class RandomNumbersService {
  private randomNumbers = signal<
    {
      number: number;
      backgroundColor: string;
    }[]
  >([]);

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  resetRandomNumbers() {
    this.randomNumbers().length = 0;
  }

  getAllRandomNumbers(difficultyMode: DifficultyOptions) {
    this.resetRandomNumbers();

    for (let i = 0; i < difficultyMode; i++) {
      this.randomNumbers().push({
        number: Math.floor(Math.random() * 10),
        backgroundColor: this.getRandomColor(),
      });
    }
    return this.randomNumbers();
  }

  countNumber(numberToCheck: number) {
    let count = 0;

    for (const randomNumber of this.randomNumbers()) {
      if (randomNumber.number === numberToCheck) {
        count++;
      }
    }

    return count;
  }
}
