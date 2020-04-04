<template>



        <b-navbar  class="has-shadow" :fixed-top="true">
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>

            <template slot="start"  >


                <b-navbar-item>
                    Dashboard
                </b-navbar-item>

            </template>

            <template slot="end">

                <b-navbar-item>
                    User
                </b-navbar-item>


            </template>
        </b-navbar>

</template>

<script>

    export default {
        computed:{
            root() {return this.$store.getters['root/state']},
        },
    }

</script>
