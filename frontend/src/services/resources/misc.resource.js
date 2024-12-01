import { CrudService } from "@/services/api/crud.service";

export class MiscResource extends CrudService {
  constructor() {
    super("misc");
  }

  getMisc() {
    return this.get();
  }
}
