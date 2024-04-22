class Game {
    // Private fields
    #id; #name; #year; #platform;

    //Constructor
    constructor(id, name, year, platform) {
        this.#id = id;
        this.#name = name;
        this.#year = year;
        this.#platform = platform;
    }

    //Getters
    getId() { return this.#id; }
    getName() { return this.#name; }
    getYear() { return this.#year; }
    getPlatform() { return this.#platform; }
}

Vue.createApp({
    data() {
        return {
            appName: "Games App",
            userName: "Orlando Palmeira",
            games: [
                new Game(1, "Super Mario Bros", 1985, "NES"),
                new Game(2, "The Legend of Zelda", 1986, "NES"),
                new Game(3, "Metroid", 1986, "NES"),
                new Game(4, "Final Fantasy", 1987, "NES"),
                new Game(5, "Pokemon Red", 1996, "Game Boy"),
                new Game(6, "Super Mario 64", 1996, "Nintendo 64"),
                new Game(7, "The Legend of Zelda: Ocarina of Time", 1998, "Nintendo 64")
            ]
        }
    }
}).mount("#gamesApp")


    