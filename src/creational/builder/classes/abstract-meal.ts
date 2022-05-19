import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
  // eslint-disable-next-line prettier/prettier
  constructor(private name: string, private price: number, private descont: number) { }

  getPrice(): number {
    // eslint-disable-next-line prettier/prettier
    return this.price - ((this.descont * this.price) / 100);
  }

  getDiscount(): number {
    return this.descont;
  }
}
