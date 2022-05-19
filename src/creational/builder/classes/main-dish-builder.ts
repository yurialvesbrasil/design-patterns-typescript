/* eslint-disable prettier/prettier */
import { MealBuilderBeverage } from '../interfaces/meal-builder-beverage';
import { MealBuilderDesseret } from '../interfaces/meal-builder-dessert';
import { MealBuilderMeal } from '../interfaces/meal-builder-meal';
import { MealBox } from './meal-box';
import { Rice, Beans, Meat, Beverage, Dessert } from './meals';

export class MainDishBuilder
  implements MealBuilderMeal, MealBuilderBeverage, MealBuilderDesseret {
  makeDessertDiscount(): this {
    throw new Error('Method not implemented.');
  }
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5, 10);
    const beans = new Beans('Feijão', 10, 5);
    const meat = new Meat('Carne', 20, 2);
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 7, 0);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 10, 0);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }

  getDiscount(): number {
    return this._meal.getDiscount();
  }
}
