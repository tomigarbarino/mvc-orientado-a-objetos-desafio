import * as jsonfile from "jsonfile";
import * as path from "path";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const filepath = path.resolve(__dirname, './contacts.json');
    const json = jsonfile.readFileSync(filepath);
    this.data = json;
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    this.data.push(contact);
  }

  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }

  getOneById(id: number): Contact | undefined {
    const encontrado = this.data.find((contacto: Contact) => {
      return contacto.id === id;
    });
    return encontrado;
  }
}

export { ContactsCollection };
