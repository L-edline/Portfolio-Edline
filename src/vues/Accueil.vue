<script setup>
    import ProjetNolark from '@/composants/ProjetNolark.vue' 
    import ProjetGSB from '@/composants/ProjetGSB.vue' 
    import {ref} from 'vue'

    let typeProjet = ref('formation')
    let projet = ref('rien')

</script>

<template>
    <div class="page">
        <div class="intro">
            <h1>Portfolio de Louis EDLINE</h1>
            <h3>Développeur Web | Java </h3>
        </div>

        <div class="presentation">
            <img class="photo" src="..\assets\photo.jpg" alt="Photo de Louis EDLINE"/>
            <p class="texteLinkedin">
                Autrefois simple passionné du numérique et du développement,
                j'en ai aujourd'hui fait mon métier. <br>
                Vous découvrirez sur mon portfolio
                mon CV ainsi que les différents projets que j'ai pu accomplir au cours de
                ma formation ou de mon travail, et ceux réalisés ailleurs.
            </p>
        </div>

        <div class="wrapperCenter">
            <div class="typeProjet">
                <div class="tileType" @click="typeProjet = 'formation'" style="cursor: pointer">
                    <p class="legende">Projets en formation</p>
                </div>

                <div class="tileType" @click="typeProjet = 'perso'" style="cursor: pointer">
                    <p class="legende">Projets personnels</p> 
                </div>

                <div class="tileType" @click="typeProjet = 'entreprise'" style="cursor: pointer">
                    <p class="legende">Projets en entreprise</p> 
                </div>
            </div>
        </div>

        <div class="projets">
            <div class="wrapperCenter">
                <div v-if="typeProjet === 'formation'" class="listeProjets formation">
                    <div class="tile" @click="projet = 'Nolark'" style="cursor: pointer">
                        <p class="legende">Site de Nolark</p>
                    </div>

                    <div class="tile" @click="projet = 'GSB'" style="cursor: pointer">
                        <p class="legende">Application GSB</p> 
                    </div>
                </div>

                <div v-if="typeProjet === 'entreprise'" class="listeProjets entreprise">
                    <div class="tile" @click="projet = 'cdc'" style="cursor: pointer">
                        <p class="legende">Formulaire de CDC</p>
                    </div>
                </div>

                <div v-if="typeProjet === 'perso'" class="listeProjets perso">
                    <div class="tile" @click="projet = 'pokedex'" style="cursor: pointer">
                        <p class="legende">Pokedex depuis API</p>
                    </div>
                </div>
            </div>


            <div v-if="projet === 'Nolark'"> <ProjetNolark/> </div>
            <div v-else-if="projet === 'GSB'"> <ProjetGSB/> </div>
            <div v-else></div>

        </div>
    </div>
</template>

<style>

    body {
        background-color: rgb(60, 60, 59);
        color: rgb(76, 189, 76);
        font-family: 'Arial';
    }

    .wrapperCenter {
        display: flex;
        justify-content: center;
    }

    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
    } 

    h1 {
        margin: 1cap;
    }


    .presentation {
        display: flex;
        margin-top: 5cap;
        margin-bottom: 3cap;
    }

    .photo {
        width: 13cap;
        margin-top: 2cap;
        height: fit-content;
    }   

    .texteLinkedin {
        margin-left: 3cap;
        margin-top: 2cap;
        width: 30cap;
    }

    .typeProjet {
        display: flex;
        margin-bottom: 2cap;
        margin-top: 2cap;
    }

    .tileType {
        margin-right: 2cap;
        margin-left: 2cap;
        text-align: center;
        border-style: solid;
        padding: 1.3cap;
        border-radius: 0.5cap;
        background-color: rgb(221, 214, 214);
        color: black;
    }

    .tile {
        margin-right: 2cap;
        margin-left: 2cap;
        text-align: center;
        border-style: solid;
        padding: 0.8cap;
        border-radius: 0.5cap;
        background-color: rgb(76, 189, 76);
        color: black;
    }

    .legende {
        margin: 0px;
    }

    .listeProjets {
        display: flex;
    }


</style>