<script>

</script>

<template>
    <div class="introProjet">
       <h2 class="nomProjet">Projet Credit General Banque</h2>
       <div>
            <h3>Compétences mises en oeuvre : </h3>
            <ul class="competences">
                <li>Gérer le patrimoine informatique</li> 
                <li>Répondre aux incidents et aux demandes d’assistance et d’évolution</li>
                <li>Développer la présence en ligne de l’organisation</li>
                <li>Travailler en mode projet</li>
                <li>Mettre à disposition des utilisateurs un service informatique</li>
                <li>Organiser son développement professionnel</li>
            </ul>
        </div>
        <p class="descriptionProjet">
            Projet d'api REST pour les virements en lots réalisé dans le cadre
            de ma deuxième année de BTS, afin de mettre en pratique les connaissances acquises en
            dévelopemment java, gestion de version / projet et cybersécurité.
        </p>
    </div>

    <div class="content">
            
            <img class="image" src="..\assets\CGB\logo.png" alt="logo cgb"/>

            <div class="listTechno">
                <p class="texteTechno">Technologies utilisées : </p>
                <div class="listeT">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                    <i class="devicon-spring-original colored"></i>
                    <i class="devicon-git-plain colored"></i>
                    <i class="devicon-postman-plain colored"></i>
                </div>
            </div>

            <p class="texteExplicatif">
                L'application est une API REST réalisée avec le framework java spring boot. 
                Sa fonctionnalité principale est de permettre la réalisation de virements simples.
                J'ai utilisé l'outil Postman afin de tester les différentes requêtes :
            </p>

            <img class="image" src="..\assets\CGB\postman_CGB.png" alt="requête de transfert avec postman"/>

            <p class="texteExplicatif">
                Il est également possible de supprimer un virement qui a été fait. 
            </p>

            <img class="image" src="..\assets\CGB\suppVirCGB.png" alt="requête de suppresion d'un virement"/>

            <!--
            <p class="texteExplicatif">
                Il a fallu intégrer la possibilité d'effectuer des virements en lots, comme ceci :
            </p>

            <img class="image" src="..\assets\CGB\lotsCGB.png" alt="requête de virements en lot"/>

            <p class="texteExplicatif">
                Et la possibilité d'assigner différents rôles avec des droits de requêtes différents :
            </p>  

            <img class="image" src="..\assets\CGB\rolesCGB.png" alt="roles"/>
            -->

       </div>
    


</template>

<style scoped>

    i {
        font-size: 5em;
    }

    .listTechno {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5cap;
    }

    .texteTechno {
        width: 40%;
        text-align: center;
    }

    .listeT {
        width: 100%;
        height: 6cap;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

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
        text-align: center;
    }

    .competences {
        color: rgb(153, 247, 178);
    }


</style>