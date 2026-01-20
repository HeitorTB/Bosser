<template>
    <h1><router-link to="/"><img src="../assets/logo.png"></router-link></h1> 
    <nav>
        <ol>
            <li><router-link to="/About">About</router-link></li>
            <li><router-link to="/Programação">Programação</router-link></li>
            <li><router-link to="/palestras">Palestras</router-link></li>
        </ol>
    </nav>
</template>
<style scoped>
    ol{
        display: flex;
        list-style-type: none;
        justify-content: center;
    }
    li a{   
        color: black;
        display: inline-block;
        padding: 1em;
    }
    li a:hover{
        background-color: black;
        color: aliceblue;
    }
</style>