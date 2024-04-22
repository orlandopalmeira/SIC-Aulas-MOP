<template>
    <div class="grid-container">
        <header>{{ appTitle }}</header>
        <NavBar :userName="userName" />
        <router-view :games="games" @remove="removeGame" @login="onLogin" @updateList="fetchGames" />
        <footer>
            <p>Games Library &copy; 2024</p>
        </footer>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
    components: {
        NavBar
    },
    data: function () {
        return {
            appTitle: "Games Library",
            userName: "",
            games: []
        }
    },
    methods: {
        removeGame(gameId) {
            const url = `http://localhost:3000/games/${gameId}`;
            const request = {
                method: "DELETE"
            };
            fetch(url, request)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response not ok");
                }
                return response.json();
            })
            .then(() => this.games = this.games.filter(game => game.id !== gameId))
            .catch(error => console.error("Error deleting game", error));
        },
        onLogin(userName) {
            this.userName = userName;
            this.$router.push({name: "ListGamesUser", params: {user: userName}});
        },
        fetchGames(user) {
            fetch("http://localhost:3000/games")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response not ok");
                }
                return response.json();
            })
            .then(data => this.games = data.filter(game => user === '' || game.user === user))
            .catch(error => console.error("Error loading games", error));
        }
    },
    created() {
        this.fetchGames(this.userName);
    },
    watch: { 
        userName(newUserName) {  // If userName changes, fetch games again
            this.fetchGames(newUserName);
            
        }
    }
}
</script>

<style>
:root {
    font-family: Arial, sans-serif;
    --light-background: #d7d4d4;
    --dark-background: #33333366;
    --small-margin: 5px;
}

* {
    box-sizing: border-box;
}

/* Estrutura da página */

@media screen and (width <=650px) {
    .grid-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "header"
        "nav"
        "aside"
        "main"
        "footer";
    }
    
    main {
        margin-right: 0px;
    }
    
    aside {
        margin-bottom: var(--small-margin);
    }
    
    #addGame {
        display: none;
    }
}

@media screen and (width >=651px) {
    .grid-container {
        display: grid;
        grid-template-columns: 10% 60% 20% 10%;
        grid-template-rows: auto;
        grid-template-areas:
        ". header header ."
        ". nav    nav    ."
        ". main   aside  ."
        ". footer footer .";
    }
    
    main {
        margin-right: var(--small-margin);
    }
    
    #addGame {
        display: flex;
        flex-direction: column;
        width: auto;
        
        &>input {
            width: 100%;
        }
        
        &>button {
            width: 100%;
            margin-top: var(--small-margin);
        }
    }
}

/* Estilos dos elementos */

/* Estilo do header */
header {
    grid-area: header;
    padding: 10px;
    font-size: 1.25em;
    font-weight: bold;
    padding-left: 0;
}


/* Estilo do menu para écran pequeno */
@media screen and (max-width: 350px) {
    .ycol {
        display: none;
    }
}

/* Estilo do main */
main {
    grid-area: main;
    min-width: 250px;
    
    &>table {
        width: 100%;
        border-collapse: collapse;
        
        & tr {
            border: 1px solid var(--dark-background);
        }
        
        & th,
        td {
            text-align: left;
            padding-left: 5px;
        }
        
        & th {
            background-color: var(--dark-background);
        }
    }
}

/* Estilo do aside */
aside {
    grid-area: aside;
    background-color: var(--light-background);
    padding: 10px;
    border-radius: 5%;
    width: auto;
    
    p {
        margin-top: 0;
    }
    
    select {
        width: 100%;
        margin-bottom: var(--small-margin);
    }
}

/* Estilo do footer */
footer {
    grid-area: footer;
    background-color: var(--light-background);
    padding: 10px;
    margin-top: var(--small-margin);
    text-align: center;
    font-size: .75em;
    padding: 3px;
    
    p {
        margin: 0;
    }
}
</style>
