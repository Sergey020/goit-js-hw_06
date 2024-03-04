class Storage {
    #items;
    constructor ({items}) {
        this.#items = items;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        return this.#items = newItem.push(this.#items);
    }
}