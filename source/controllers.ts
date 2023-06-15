import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
  }

  loadContacts() {
    this.contacts.load();
  }

  processOptions(options: ContactsControllerOptions): any {
    const { action, params } = options;
    
    if (action === "get") {
      this.loadContacts();
      return params.id ? this.contacts.getOneById(params.id) : this.contacts.getAll();
    }

    if (action === "save" && params) {
      this.contacts.addOne(params);
      this.contacts.save();
      return params;
    }

    return null;
  }
}

export { ContactsController };
