import { CrudService } from "@/services/api/crud.service";

export class IngredientResource extends CrudService {
  constructor() {
    super("ingredients");
  }

  getIngredients() {
    return this.get();
  }
}
