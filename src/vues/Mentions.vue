<script setup>
    import FooterApp from '@/composants/FooterApp.vue'
    import HeaderApp from '@/composants/HeaderApp.vue';
    import { VuePDF, usePDF } from '@tato30/vue-pdf'

    const { pdf } = usePDF('CV_louis_edline.pdf')
</script>

<template>
    <HeaderApp/>
    <div class="page">
        <h1 class="titre">Mentions légales</h1>
        <div class="content">

            <div class="paragraphe">
                <p class="titreparagraphe">créateur, éditeur et propriétaire du site</p>
                <div class="texte">
                    <p>Directeur de publication : Louis Edline</p>
                    <p>Statut : Particulier</p>
                    <p>E-mail : louis.edline.pro@gmail.com</p>
                    <p>Site internet : <a class="texte" href="https://l-edline.github.io/Portfolio-Edline/">l-edline.github.io/Portfolio-Edline</a></p>
                </div> 
            </div>

            <div class="paragraphe">
                <p class="titreparagraphe">hébergeur</p>
                <div class="texte">
                    <p>Ce site est hébergé par GitHub, Inc.</p>
                    <p>Siège social : 88 Colin P. Kelly Jr St - San Francisco - CA - Etats-Unis</p>
                </div> 
            </div>

            <div class="paragraphe">
                <p class="titreparagraphe">Confidentialité</p>
                <div class="texte">
                    <p>Ce site ne collecte aucune donnée personnelle.</p>
                    <p>Ainsi, ce site ne traite aucune donnée personnelle.</p> 
                </div> 
            </div>

            <div class="paragraphe">
                <p class="titreparagraphe">Propriété intellectuelle</p>
                <div class="texte">
                    <p>L’ensemble du contenu présent sur ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de l’éditeur, sauf mention contraire.</p>
                    <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.</p>
                    <p>Les logos des différentes technologies proviennent du site <a class="texte" href="https://devicon.dev/">devicon.dev</a>.</p> 
                </div> 
            </div>
            
            <div class="paragraphe">
                <p class="titreparagraphe">Responsabilité</p>
                <div class="texte">
                    <p>Les informations fournies sur ce site le sont à titre indicatif. 
                        L’éditeur s’efforce de fournir des informations aussi précises que possible, 
                        mais ne saurait garantir l’exactitude, la complétude et l’actualité des informations diffusées.</p>
                    <p>L’éditeur ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour.</p>
                </div> 
            </div>

            <div class="paragraphe">
                <p class="titreparagraphe">Données personnelles</p>
                <div class="texte">
                    <p>Ce site ne collecte aucune donnée personnelle.</p>
                    <p>Aucun formulaire de contact, système de création de compte ou outil de suivi n’est présent sur ce site.</p>
                </div> 
            </div>

            <div class="paragraphe">
                <p class="titreparagraphe">Droit applicable</p>
                <div class="texte">
                    <p>Ce site est soumis au droit français.</p>
                    <p>En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.</p>
                </div> 
            </div>

        </div>
    </div>

    <FooterApp/>
</template>

<style scoped>
    .content {
        margin-top: 3cap;
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 15cap;
        margin-right: 15cap;
    }

    .titre {
        text-transform: uppercase;
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

    .titreparagraphe {
        text-transform: uppercase;
        font-size: large;
        font-weight: bold;
    }

    .texte {
        color: white;
    }

    @media (max-width: 600px) {
        .content {
        margin-top: 3cap;
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 1cap;
        margin-right: 1cap;
    }
    }
</style>