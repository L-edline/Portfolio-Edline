<script>

</script>

<template>
    <div class="introProjet">
        <h2 class="nomProjet">Projet Nolark</h2>
        <div>
            <h3>Compétences mises en oeuvre : </h3>
            <ul class="competences">
                <li>Gérer le patrimoine informatique</li>
                <li>Développer la présence en ligne de l’organisation</li>
                <li>Travailler en mode projet</li> 
                <li>Organiser son développement professionnel</li>
            </ul>
        </div>
        <p class="descriptionProjet">
            Projet de site de vente de casques pour moto réalisé dans le cadre
            de ma première année de BTS, afin de nous initier au bases du développement web
        </p>

        <div class="content">
            
            <img class="image" src="..\assets\Nolark\PageAccueil.png" alt="page d'accueil de Nolark"/>
            
            <p class="texteExplicatif">
                L'un des premiers projets réalisés durant le BTS, il s'agit d'un projet de site de vents de casques pour moto,
                construit avec HTML, CSS et JavaScript dans sa version classique, auquel nous avons rajouté du
                PHP afin de récupérer les casques dans une base de données
            </p>

            <img class="image" src="..\assets\Nolark\Casques.png" alt="page d'accueil de Nolark"/>
       </div>
       
    </div>

</template>

<style scoped>

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