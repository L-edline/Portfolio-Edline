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
       <h2 class="nomProjet">Projet Credit General Banque</h2>
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
            Projet d'api REST pour les virements en lots réalisé dans le cadre
            de ma deuxième année de BTS, afin de mettre en pratique les connaissances acquises en
            dévelopemment java, gestion de version / projet et cybersécurité.
        </p>
    </div>

    <div class="content">
        
            <div class="listTechno">
                <p class="texteTechno">Technologies utilisées :</p>
                <div class="listeT">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                    <i class="devicon-spring-original colored"></i>
                    <i class="devicon-git-plain colored"></i>
                    <i class="devicon-postman-plain colored"></i>
                </div>
            </div>

            <p class="texteExplicatif">
                L'application est une API REST réalisée avec le framework java spring boot. 
                Sa fonctionnalité principale est de permettre la réalisation de virements.
                J'ai utilisé l'outil Postman afin de tester les différentes requêtes 
                (Création et suppression de transferts).
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
                    <img class="image" src="..\assets\CGB\postman.png" alt="interface de l'outil postman"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\CGB\controleurPost.png" alt="controleur POST"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\CGB\service.png" alt="service"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\CGB\test.png" alt="test unitaire"/>
                </swiper-slide>
            </swiper>
       </div>
    


</template>

<style scoped>

    .mySwiper {
        background-color: rgb(222, 222, 222);
    }

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