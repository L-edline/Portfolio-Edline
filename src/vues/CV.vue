<script setup>
    import FooterApp from '@/composants/FooterApp.vue' 
    import { VuePDF, usePDF } from '@tato30/vue-pdf'

    const { pdf } = usePDF('CV_louis_edline.pdf')
</script>

<template>
    <div class="page">
        <h1>Mon CV</h1>
    
        <router-link to="/" class="routeur">
            <h2>Retour au portfolio</h2>
        </router-link>
        
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
    }

    .routeur {
        color: green;
    }
</style>