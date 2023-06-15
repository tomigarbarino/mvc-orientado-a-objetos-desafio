import test from "ava";
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";
import * as jsonfile from "jsonfile";

const originalContacts = [...contactsObject];

test.afterEach.always(() => {
  jsonfile.writeFileSync(__dirname + "/contacts.json", originalContacts);
});

test("Testeo el load del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  t.deepEqual(contactsObject, model.getAll());
});

test("Testeo el addOne del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact);
  const allContacts = model.getAll();
  t.deepEqual(allContacts[allContacts.length - 1], mockContact);
});

test("Testeo el save del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact);
  model.save();
  const allContacts = model.getAll();
  const lastContact = allContacts[allContacts.length - 1];
  t.deepEqual(lastContact, mockContact);
});

test("Testeo el getOneById del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 31,
    name: "Marce",
  };
  model.addOne(mockContact);
  const one = model.getOneById(31);
  t.deepEqual(one, mockContact);
});
