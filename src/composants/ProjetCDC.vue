<script>

</script>

<template>
    <div class="introProjet">
       <h2 class="nomProjet">Formulaire de Comité de Conformité</h2>
       <div>
            <h3>Compétences mises en oeuvre : </h3>
            <ul class="competences">
                <li>Gérer le patrimoine informatique</li>
                <li>Répondre aux incidents et aux demandes d’assistance et d’évolution</li>
                <li>Travailler en mode projet</li>
                <li>Mettre à disposition des utilisateurs un service informatique</li>
                <li>Organiser son développement professionnel</li>
            </ul>
        </div>
        <p class="descriptionProjet">
            Projet de formulaire de demande de comité de conformité 
            réalisé dans le cadre de mon stage de première année de BTS 
            au sein de la métropole TPM.
        </p>
    </div>

    <div class="content">

            <div class="listTechno">
                <p class="texteTechno">Technologies utilisées : </p>
                <div class="listeT">
                    <i class="devicon-laravel-original colored"></i>
                    <i class="devicon-vuejs-plain-wordmark colored"></i>
                    <i class="devicon-inertiajs-plain-wordmark colored"></i>
                    <i class="devicon-mysql-plain-wordmark"></i>
                    <i class="devicon-git-plain colored"></i>
                </div>
            </div>

            <img class="image" src="..\assets\CDC\Accueil.png" alt="Accueil de l'application"/>
            
            <p class="texteExplicatif">
                Le formulaire consiste en une série de champs qui seront envoyés à l'API de TPM : 
            </p>

            <img class="image" src="..\assets\CDC\API.jpg" alt="Api de TPM"/>

            <p class="texteExplicatif">
                Voici le diagramme fonctionnel de l'application :
            </p>

            <img class="image" src="..\assets\CDC\DiagrammeFonctionnel.png" alt="Diagramme fonctionnel de l'application"/>

            <p class="texteExplicatif">
                Et voici la partie Admin de l'application, qui permet la gestion des formulaires envoyés,
                la création de nouveaux agents de TPM, l'envoi de mail résumés et le renouvellement du token de l'api.
            </p>

            <img class="image" src="..\assets\CDC\Admin.png" alt="page d'accueil de Nolark"/>.
       </div>
    
</template>

<style scoped>

    i {
        font-size: 5em;
        color: white;
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