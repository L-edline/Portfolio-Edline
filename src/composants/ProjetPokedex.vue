<script>

</script>

<template>
    <div class="introProjet">
       <h2 class="nomProjet">Outil d'aide au jeu depuis une API</h2>
       <div>
            <h3>Compétences mises en oeuvre : </h3>
            <ul class="competences">
                <li>Travailler en mode projet</li>
                <li>Mettre à disposition des utilisateurs un service informatique</li>
                <li>Organiser son développement professionnel</li>
            </ul>
        </div>
        <p class="descriptionProjet">
            Projet de mise en forme de l'API pokéAPI réalisé en premier lieu pour m'exercer, en
            créant une sorte d'encyclopédie, qui a évolué en aide au jeu avec fonction de tri
            par caractéristiques puis outil de calcul de synergie défensive d'une composition d'équipe.
            Ce projet est amené à évoluer dans le futur.
        </p>
    </div>

    <div class="content">
            
            <img class="image" src="..\assets\Pokedex\Accueil.png" alt="Accueil"/>
            
            <p class="texteExplicatif">
                La page d'accueil permet d'accéder aux différentes catégories de l'application,
                comme par exemple la liste des pokemons (la principale), affichée depuis l'APIs, 
                qu'il est possible de trier par leur nom et/ou par les différentes caractéristiques
                qu'ils peuvent avoir :
            </p>

            <img class="image" src="..\assets\Pokedex\ListePoke.png" alt="Liste des pokémon"/>

            <p class="texteExplicatif">
                Chaque "tuile" amène vers une page détaillée avec toutes les informations de pokéAPI
                et des informations d'une autre API concernant toutes les manières de jouer ce pokemon de la 
                manière la plus efficace dans les différents tiers compétitifs de la communauté. Ce schéma 
                liste -> détail est utilisé dans tout les onglets correspondant aux catégories de pokéAPI.
            </p>

            <img class="image" src="..\assets\Pokedex\DetailPoke.png" alt="Detail d'un pokémon"/>

            <p class="texteExplicatif">
                Une évolution de cette encyclopédie fut l'ajout d'un outil permettant de tester
                la viabilité défensive d'une équipe, soit en sélectionnant les 6 pokémon dans une liste
                déroulante, soit en important l'équipe entière avec le format normé utilisé par la communauté.
            </p>

            <img class="image" src="..\assets\Pokedex\teambuilder.png" alt="Outil de construction d'équipe"/>
            <img class="image" src="..\assets\Pokedex\teambuilderPaste.png" alt="Outil de construction d'équipe par import"/>
       </div>

</template>

<style scoped>

    .nomProjet {
        text-align: center;
    }

    .introProjet {
        margin-top: 5cap;
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .image {
        width: 55%;
    }

    .texteExplicatif {
        width: 40%;
        text-align: center;
        margin-top: 3cap;
        margin-bottom: 3cap;
    }

    .descriptionProjet {
        width: 75%;
    }

    .competences {
        color: rgb(153, 247, 178);
    }


</style>