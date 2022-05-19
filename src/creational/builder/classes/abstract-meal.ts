import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
  // eslint-disable-next-line prettier/prettier
  constructor(private name: string, private price: number) { }

  getPrice(): number {
    return this.price;
  }
}
