export class Ingredient {
  constructor(
    public id: string,
    public name: string,
    public caloriesPer100Gr: number,
    public vegetarianFriendly: boolean
  ) {}
}
