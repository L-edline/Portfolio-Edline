<script setup>

</script>

<template>

    <div class="footer">
        <h4 class="res titre">Informations de contact</h4>

        <div class="el">
            <p class="contact">Ledline@portfolio:~$ Mail</p>
            <p class="contact res">louis.edline.pro@gmailcom</p>
        </div>

        <div class="el">
            <p class="contact">Ledline@portfolio:~$ Telephone</p>
            <p class="contact res">06 83 64 88 13</p>
        </div>

        <div class="el">
            <p class="contact">Ledline@portfolio:~$ Github</p>
            <p class="contact res"><a class="res" href="https://github.com/L-edline">L-edline</a></p>
        </div>

        <div class="el">
            <p class="contact">Ledline@portfolio:~$ LinkedIn</p>
            <p class="contact res"><a class="res" href="https://linkedin.com/in/louis-edline-5656b9354">Louis Edline</a></p>
        </div>
    </div>

</template>

<style scoped>
    .footer {
        background-color: rgb(0, 0, 0);
        height: 300px;
        margin-top: 5cap;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .contact {
        margin: 0px;
        margin-top: 2px;
        margin-bottom: 2px;
    }

    .res {
        color: white;
        margin-bottom: 5px;
    }

    .titre {
        margin: 0px;
        margin-bottom: 30px;
    }

    .el {
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>