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
        <h2 class="nomProjet">Projet Nolark</h2>
        <p class="descriptionProjet">
            Projet de site de vente de casques pour moto réalisé dans le cadre
            de ma première année de BTS, afin de nous initier aux bases du développement web
        </p> 
    </div>
    <div class="content">
            
            <div class="listTechno">
                <p class="texteTechno">Technologies utilisées : </p>
                <div class="listeT">
                    <i class="devicon-html5-plain-wordmark colored"></i>
                    <i class="devicon-css3-plain-wordmark colored"></i>
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-php-plain colored"></i>
                    <i class="devicon-mysql-plain-wordmark"></i>
                </div>
            </div> 

            <div class="texteExplicatif">
                L'un des premiers projets réalisés durant le BTS, il s'agit d'un projet de site de vente de casques pour moto,
                construit avec HTML, CSS et JavaScript dans sa version classique.

                <p>Par la suite, j'ai réalisé une deuxième version du site avec PHP qui récupère les casques de manière dynamique dans une base de données mysql.</p>
            </div>

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
                    <img class="image" src="..\assets\Nolark\PageAccueil.png" alt="Page d'accueil de Nolark"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\Nolark\Casques.png" alt="Page des casques"/>
                </swiper-slide>
            </swiper>
       </div>

</template>

<style scoped>

    .mySwiper {
        background-color: rgb(237, 237, 237);
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