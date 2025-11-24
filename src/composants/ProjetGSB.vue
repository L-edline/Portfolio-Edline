<script>

</script>

<template>
    <div class="introProjet">
       <h2 class="nomProjet">Projet Galaxy Swiss Bourdin</h2>
       <p class="descriptionProjet">
            Projet de site de gestion des frais de visiteurs médicaux réalisé dans le cadre
            de ma deuxième année de BTS, afin de mettre en pratique les connaissances acquises en
            dévelopemment web, gestion de version / projet ou cybersécurité.
       </p>
    </div>

    <div class="content">
            
            <img class="image" src="D:\Projets\Portfolio-Edline\src\assets\GSB\Connexion.png"/>
            
            <p class="texteExplicatif">
                La première étape fut de distinguer les visiteurs médicaux qui indiquent leurs frais, et
                les comptables qui valident et mettent en paiement (ou pas) ces frais. Pour cela, j'ai utilisé une vue
                dans la base de données.
            </p>

            <img class="image" src="D:\Projets\Portfolio-Edline\src\assets\GSB\ConnecteComptable.png" alt="page d'accueil de Nolark"/>

            <p class="texteExplicatif">
                Une fois connecté en temps que comptable, j'ai accès à deux fonctionnalités : la validation
                d'une fiche de frais d'un visiteur tel mois, et la mise en paiement des fiches de frais validées.
            </p>

            <img class="image" src="D:\Projets\Portfolio-Edline\src\assets\GSB\ValiderFicheFrais.png" alt="page d'accueil de Nolark"/>

            <p class="texteExplicatif">
                Dans le premier onglet, on choisis un visiteur puis un mois pour afficher la fiche de frais. On 
                sépare les frais forfaitisés, que l'on peut modifier si une erreur a été commise
                par le visiteur, et les frais hors forfait, que l'on peut corriger si erreur, supprimer si non acceptables, ou 
                reporter au mois suivant si les justificatifs n'ont pas été reçus. Une fois tout en ordre, on peut valider la 
                fiche de frais.
            </p>

            <img class="image" src="D:\Projets\Portfolio-Edline\src\assets\GSB\paiementFrais.png" alt="page d'accueil de Nolark"/>

            <p class="texteExplicatif">
                Dans le deuxième onglet, on choisis une fiche de frais à rembourser.
                Le comptable effectue les opérations de son côté, et indique que la fiche est 
                remboursée quand il a fini.
            </p>
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

</style>