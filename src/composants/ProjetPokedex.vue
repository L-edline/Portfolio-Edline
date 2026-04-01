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
       <h2 class="nomProjet">Outil d'aide au jeu depuis une API</h2>
       <div>
            <h3>Compétences mises en oeuvre : </h3>
            <ul class="competences">
                <li>Travailler en mode projet (B1.4)</li>
                <li>Mettre à disposition des utilisateurs un service informatique (B1.5)</li>
                <li>Organiser son développement professionnel (B1.6)</li>
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
            
            <p class="texte">
                Projet d'aide au jeu réalisé avec Laravel, vueJS et InertiaJS. 
                L'application est composée de différentes listes contenant les éléments de l'API.
                Chaque élément, quand cliqué, redirige vers une page détaillée créée dynamiquement.
            </p>


            <p class="texteExplicatif">
                Une évolution de cette encyclopédie fut l'ajout d'un outil permettant de tester
                la viabilité défensive d'une équipe, soit en sélectionnant les 6 pokémon dans une liste
                déroulante, soit en important l'équipe entière avec le format normalisé utilisé par la communauté.
            </p>

            <swiper
                :slidesPerView="1"
                :spaceBetween="0"
                :keyboard="{
                    enabled: true,
                }"
                
                :pagination="{
                    clickable: true,
                    dynamicBullets: true,
                }"
                :rewind="true"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide>
                    <img class="image1" src="..\assets\Pokedex\Accueil.png" alt="Accueil"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\Pokedex\ListePoke.png" alt="Liste des pokémon"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\Pokedex\DetailPoke.png" alt="Detail d'un pokémon"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\Pokedex\teambuilder.png" alt="Outil de construction d'équipe"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\Pokedex\teambuilderPaste.png" alt="Outil de construction d'équipe par import"/>
                </swiper-slide>
            </swiper>
       </div>

</template>

<style scoped>

    .mySwiper {
        background-color: rgb(140, 139, 139);
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

    .image1 {
        width: 69%;
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