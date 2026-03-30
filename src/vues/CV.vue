<script setup>
    import FooterApp from '@/composants/FooterApp.vue'
    import HeaderApp from '@/composants/HeaderApp.vue';
    import { VuePDF, usePDF } from '@tato30/vue-pdf'

    const { pdf } = usePDF('CV_louis_edline.pdf')
</script>

<template>
    <HeaderApp/>
    <div class="page">
        <h1 class="titre">CV de Louis EDLINE</h1>

        <div class="content">
            <div class="cv">
                <VuePDF :pdf="pdf" />
            </div>
        </div>
    </div>

    <FooterApp/>
</template>

<style scoped>

    .titre {
        background: repeating-linear-gradient(
            -45deg, 
            rgb(60, 60, 59) 2px, 
            rgb(44, 44, 43) 3px, 
            rgb(60, 60, 59) 4px, 
            rgb(60, 60, 59) 7px
        );
        margin: 0;
        padding: 1cap;
        border-style: solid;
        border-color: black;
        border-left: none;
        border-right: none;
        border-top: none;
        border-width: 0.1cap;
        text-align: center;
    }

    .content {
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

</style>