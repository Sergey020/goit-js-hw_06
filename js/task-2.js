class Storage {
    #items;
    constructor (items) {
        this.#items = items;
    }

    //console.log(this.#items);

    getItems() {
        console.log(this.#items);
        return this.#items;
    }
    addItem(newItem) {
    this.#items.push(newItem);
    }
removeItem(itemToRemove) {
    this.#items.forEach((item, indexOfItem) => {
       if (item === itemToRemove) {
       this.#items.splice(indexOfItem,1);
       } 
    })
}
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
