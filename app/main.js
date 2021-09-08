import { BalancesController } from "./Controllers/BalancesControllers.js";
import { SnacksController } from "./Controllers/SnacksController.js";

class App {
  snackController = new SnacksController();
}

window["app"] = new App();
