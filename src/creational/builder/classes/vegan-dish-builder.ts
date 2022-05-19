import { MealBuilderMeal } from '../interfaces/meal-builder-meal';
import { MealBox } from './meal-box';
import { Rice, Beans } from './meals';

export class VeganDishBuilder implements MealBuilderMeal {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    this._meal.add(rice, beans);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
