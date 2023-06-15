import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist"

function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv)
  return {
    action: resultado.action,
    params: JSON.parse = minimist(argv),
  };
}

function main() {
  const controller =  new ContactsController()
  parseaParams(process.argv)
}

main();
