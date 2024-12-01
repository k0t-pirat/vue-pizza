import { CrudService } from "@/services/api/crud.service";

export class DoughResource extends CrudService {
  constructor() {
    super("dough");
  }

  getDoughs() {
    return this.get();
  }
}
