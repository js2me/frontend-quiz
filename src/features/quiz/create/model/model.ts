import { makeObservable, observable } from 'mobx';
import { createStorage } from 'yummies/storage';
import type { QuizCreateParams } from './types';

const storage = createStorage({ type: 'local', prefix: 'quiz' });

export class Quiz {
  private constructor(
    private params: QuizCreateParams,
    lastState?: any,
  ) {
    storage.set({ key: 'params', value: params });
    storage.set({ key: 'state', value: lastState });
    console.log('dd', params, lastState);
  }

  get isActive() {
    return true;
  }

  static current: Quiz | null = null;

  static create(params: QuizCreateParams) {
    const quiz = new Quiz(params, {});
    return quiz;
  }

  static tryToRestore(): Quiz | null {
    const params = storage.get<any>({ key: 'params' });
    const state = storage.get<any>({ key: 'state' });

    if (params && state) {
      Quiz.current = new Quiz(params, state);
      return Quiz.current;
    } else {
      return null;
    }
  }
}

makeObservable(Quiz, { current: observable });
