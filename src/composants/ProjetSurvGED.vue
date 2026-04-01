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
       <h2 class="nomProjet">Projet "Surveillance GED"</h2>
       <div>
            <h3>Compétences mises en oeuvre : </h3>
            <ul class="competences">
                <li>Gérer le patrimoine informatique (B1.1)</li>
                <li>Répondre aux incidents et aux demandes d’assistance et d’évolution (B1.2)</li>
                <li>Travailler en mode projet (B1.4)</li>
                <li>Organiser son développement professionnel (B1.6)</li>
            </ul>
        </div>
        <p class="descriptionProjet">
            Projet de surveillance de la Gestion Electronique des documents
            réalisé dans le cadre de mon stage de deuxième année de BTS 
            au sein de la Caisse Nationale Militaire de Sécurité Sociale.
        </p>
    </div>

    <div class="content">
            
            <div class="listTechno">
                <p class="texteTechno">Technologies utilisées : </p>
                <div class="listeT">
                    <i class="devicon-symfony-original-wordmark"></i>
                    <i class="devicon-oracle-original colored"></i>
                    <i class="devicon-microsoftsqlserver-plain-wordmark colored"></i>
                    <i class="devicon-git-plain colored"></i>
                </div>
            </div>

            <p class="texte">
                Ce projet a été réalisé avec le framework Symfony, et fait appel à des bases de données Oracle et SQL Server.
            </p>
            
            <p class="texteExplicatif">
                L'application est composée de deux parties : un rapport journalier envoyé par mail tout les jours
                vers 19h à une liste de personnes concernées, et des vérifications tout les quarts d'heures qui envoient une
                alerte par mail en cas d'echec.
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
                    <img class="image" src="..\assets\GED\schemaGED.png" alt="schéma fonctionnel de l'app"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\GED\commanddef.png" alt="definition de la commande"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\GED\commandbody.png" alt="corps de la commande"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\GED\dataservicedef.png" alt="definition du dataservice"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\GED\fonctiongetdata.png" alt="exemple de fonction"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\GED\getdata.png" alt="fonction principale"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\GED\sendmailhead.png" alt="recuperation des donnees"/>
                </swiper-slide>
                <swiper-slide>
                    <img class="image" src="..\assets\GED\sendmail.png" alt="envoi du mail"/>
                </swiper-slide>
            </swiper>
       </div>
    
</template>

<style scoped>

    .mySwiper {
        background-color: rgb(25, 26, 28);
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