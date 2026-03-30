<script>

</script>

<template>
    <div class="introProjet">
       <h2 class="nomProjet">Projet "Surveillance GED"</h2>
       <div>
            <h3>Compétences mises en oeuvre : </h3>
            <ul class="competences">
                <li>Gérer le patrimoine informatique</li>
                <li>Répondre aux incidents et aux demandes d’assistance et d’évolution</li>
                <li>Travailler en mode projet</li>
                <li>Organiser son développement professionnel</li>
            </ul>
        </div>
        <p class="descriptionProjet">
            Projet de surveillance de la Gestion Electronique des documents
            réalisé dans le cadre de mon stage de deuxième année de BTS 
            au sein de la Caisse Nationale Militaire de Sécurité Sociale.
        </p>
    </div>

    <div class="content">
            
            
            <p class="texteExplicatif">
                L'application est composée de deux parties : un rapport journalier envoyé par mail tout les jours
                vers 19h à une liste de personnes cocernées, et des vérifications tout les quarts d'heures qui envoient une
                alerte par mail en cas d'echec.
            </p>

            <img class="image" src="..\assets\GED\schemaGED.png" alt="schéma fonctionnel de l'app"/>
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
        text-align: center;
    }

    .competences {
        color: rgb(153, 247, 178);
    }


</style>