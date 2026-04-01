<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import '../style.css';
    import { Mousewheel, Keyboard, Pagination } from 'swiper/modules';

    export default {
        components: {
        Swiper,
        SwiperSlide,
        },
        setup() {
            return {
                modules: [Mousewheel, Keyboard, Pagination],
            };
        },
    };
</script>

<template>
    <div class="introProjet">
        <h2 class="nomProjet">Projet Galaxy Swiss Bourdin</h2>
        <div>
            <h3>Compétences mises en oeuvre : </h3>
            <ul class="competences">
                <li>Gérer le patrimoine informatique (B1.1)</li> 
                <li>Répondre aux incidents et aux demandes d’assistance et d’évolution (B1.2)</li>
                <li>Développer la présence en ligne de l’organisation (B1.3)</li>
                <li>Travailler en mode projet (B1.4)</li>
                <li>Mettre à disposition des utilisateurs un service informatique (B1.5)</li>
                <li>Organiser son développement professionnel (B1.6)</li>
            </ul>
        </div>
        <p class="descriptionProjet">
            Projet de site de gestion des frais de visiteurs médicaux réalisé dans le cadre
            de ma deuxième année de BTS, afin de mettre en pratique les connaissances acquises en
            dévelopemment web, gestion de version / projet et cybersécurité.
        </p>
    </div>

    <div class="content">

            <div class="listTechno">
                <p class="texteTechno">Technologies utilisées : </p>
                <div class="listeT">
                    <i class="devicon-php-plain colored"></i>
                    <i class="devicon-mariadb-original-wordmark"></i>
                    <i class="devicon-html5-plain-wordmark colored"></i>
                    <i class="devicon-bootstrap-plain colored"></i>
                    <i class="devicon-git-plain colored"></i>
                </div>
            </div>

            <p class="texte">
                Il s'agit d'un projet réalisé principalement avec PHP (et HTML) en suivant le pattern
                "Modèle - Vue - Contrôleur" (MVC). Il fait appel à une base de données Mariadb.
            </p>

            <p class="texteExplicatif">         
                L'application se décline en une version "visiteur médical" et une version "comptable". 
                Les principales fonctionnalités rajoutées sont la possibilité pour un comptable de valider ou non
                une fiche de frais, la possibilité de la mettre en paiement, ainsi qu'un certain nombre de tâches diverses
                (génération de la documentation, sécurisation des mots de passe avec un hash, optimisation, etc...).
            </p>

            <swiper
                :slidesPerView="1"
                :spaceBetween="0"
                :keyboard="{
                    enabled: true,
                }"
                :pagination="{
                    clickable: true,
                }"
                :rewind="true"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >
            <swiper-slide>
                <img class="image" src="..\assets\GSB\Connexion.png" alt="page de connexion de GSB"/>
            </swiper-slide>
            <swiper-slide>
                <img class="image" src="..\assets\GSB\ConnecteComptable.png" alt="page d'accueil comptable de GSB"/>
            </swiper-slide>
            <swiper-slide>
                <img class="image" src="..\assets\GSB\ValiderFicheFrais.png" alt="Valider une fiche de frais"/>
            </swiper-slide>
            <swiper-slide>
                <img class="image" src="..\assets\GSB\paiementFrais.png" alt="Suivre le paiement d'une fiche de frais"/>
            </swiper-slide>
        </swiper>
  
       </div>
    


</template>

<style scoped>

    .mySwiper {
        background-color: rgb(255, 255, 255);
    }

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
        width: 100%;
    }

    .texteExplicatif {
        width: 40%;
        text-align: center;
        margin-top: 3cap;
        margin-bottom: 3cap;
    }

    .texte {
        width: 40%;
        text-align: center;
    }

    .descriptionProjet {
        width: 75%;
        text-align: center;
    }

    .competences {
        color: rgb(153, 247, 178);
    }

</style>