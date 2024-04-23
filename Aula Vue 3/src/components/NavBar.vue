<template>
    <nav>
        <p>{{ userName }}</p>
        <ul id="menu">
            <li>
                <router-link to="/listGames">All Games</router-link>
            </li>
            <li v-if="userName !== ''">
                <router-link :to="'/listGames/' + userName">My Games</router-link>
            </li>
            <li v-if="userName !== ''">
                <router-link to="/addGame">Add Game</router-link>
            </li>
            <li v-if="userName !== ''">
                <router-link to="/">Logout</router-link>
            </li>
            <li v-else>
                <router-link to="/">Login</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['userName']
}
</script>

<style scoped>
/* Estilo do nav */
nav {
    grid-area: nav;
    background-color: var(--light-background);
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    /* exemplo de aninhamento de seletores */
    &>p {
        margin: 0;
    }

    & ul {
        margin: 0;
        padding: 0;
    }
}


/* Estilo base do menu */
#menu>li {
    list-style-type: none;
    display: inline;
    margin-left: var(--small-margin);

    a {
        text-decoration: none;
        color: black;
        background-color: aliceblue;
        padding: 5px;
    }
}

/* Estilo do menu para écran pequeno */
@media screen and (max-width: 350px) {
    #menu>li {
        display: block;
    }

}

#menu>li>a:hover {
    background-color: lightblue;
}

#menu>li>a.router-link-active {
    background-color: lightblue;
}
</style>