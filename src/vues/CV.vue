<script setup>
    import FooterApp from '@/composants/FooterApp.vue' 
    import { VuePDF, usePDF } from '@tato30/vue-pdf'

    const { pdf } = usePDF('CV_louis_edline.pdf')
</script>

<template>
    <div class="page">
        <h1>CV de Louis EDLINE</h1>
        
        <div class="lienretour">
            <router-link to="/" class="routeur">
                <h2>Retour au portfolio</h2>
            </router-link>
        </div>
        
        <div class="cv">
            <VuePDF :pdf="pdf" />
        </div>
    </div>

    <FooterApp/>
</template>

<style scoped>
    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cv {
        width: 100%;
        overflow: auto;
        display: flex;
        justify-content: center;
    }

    .routeur {
        color: rgb(0, 0, 0);
        text-decoration: none;
    }

    .lienretour {
        display: flex;
        justify-content: center;
        margin-bottom: 2cap;
        background-color: wheat;
        padding-left: 1cap;
        padding-right: 1cap;
        border-style: solid;
        border-color: black;
        border-radius: 1cap;
    }

</style>