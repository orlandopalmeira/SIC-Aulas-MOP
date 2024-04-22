class Game {
    // private fields
    #name; #year;
    // constructor
    constructor(aName, aYear) {
        this.#name = aName;
        this.#year = aYear;
    }

    get name() {
        return this.#name;
    }

    /**
     * @param {any} value
     */
    set name(value) {
        this.#name = value;
    }

    get year() {
        return this.#year;
    }
    
    set year(value) {
        this.#year = value;
    }
    
    // method
    moreRecent(game) {
        return this.#year > game.year;
    }
}
