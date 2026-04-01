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
       <h2 class="nomProjet">Formulaire de Comité de Conformité</h2>
       <div>
            <h3>Compétences mises en oeuvre : </h3>
            <ul class="competences">
                <li>Gérer le patrimoine informatique (B1.1)</li>
                <li>Répondre aux incidents et aux demandes d’assistance et d’évolution (B1.2)</li>
                <li>Travailler en mode projet (B1.4)</li>
                <li>Mettre à disposition des utilisateurs un service informatique (B1.5)</li>
                <li>Organiser son développement professionnel (B1.6)</li>
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
            
            <p class="texte">
                Le formulaire a été réalisé avec Laravel, vueJS et InertiaJS.
                Il comprends un système d'authentification complet. 
                Une fois complété, le formulaire est envoyé vers l'API de TPM qui s'occupera de la demande.
            </p>

            <p class="texteExplicatif">
                L'application possède également une partie réservée aux administrateurs, qui permet la gestion des formulaires envoyés,
                la création de nouveaux agents de TPM, l'envoi de mail résumés et le renouvellement du token de l'api.
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
                    <img class="image" src="..\assets\CDC\Accueil.png" alt="Accueil de l'application"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\CDC\API.jpg" alt="Api de TPM"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\CDC\DiagrammeFonctionnel.png" alt="Diagramme fonctionnel de l'application"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\CDC\Admin.png" alt="composant admin"/>.
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