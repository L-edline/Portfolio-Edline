<script setup>

</script>

<template>

    <div class="header">
        <div class="el left">
            <router-link to="/CV" class="routeur">
                    <p>Curriculum Vitae</p>
            </router-link>
        </div>

        <div class="el center">
            <router-link to="/" class="routeur">
                    <p>Accueil</p>
            </router-link>
        </div>

        <div class="el right">
            <router-link to="/mentions" class="routeur">
                    <p>Mentions Légales</p>
            </router-link>
        </div>
    </div>

</template>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        border-style: solid;
        border-color: black;
        border-left: none;
        border-right: none;
        border-top: none;
        border-width: 0.1cap;
    } 

    .el {
        padding-left: 0.5cap;
        padding-right: 0.5cap;
    }

    .routeur {
        color: rgb(76, 189, 76);
        text-decoration: none;
    }

    @media (max-width: 600px) {
        .header {
            justify-content: center;
        } 
    }
</style>