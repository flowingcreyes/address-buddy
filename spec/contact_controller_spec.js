var ContactController = require("../controllers/ContactController.js")
let sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {
  beforeEach((done) => {
    this.book = new ContactController();
    sequelize.sync({ force: true }).then((res) => {
      done()
    })
      .catch((err) => {
        done();
      })
  })
  describe("#addContact()", () => {
    it("should add a single contact into the book", done => {
      this.book.addContact("Alice", "001-101-1010", "alicethehousewife@gmail.com")
        .then((contact) => {
          expect(contact.name).toBe("Alice");
          expect(contact.phone).toBe("001-101-1010")
          expect(contact.email).toBe("alicethehousewife@gmail.com")
          done()
        })
        .catch(err => {
          done();
        })
    })
  })
})