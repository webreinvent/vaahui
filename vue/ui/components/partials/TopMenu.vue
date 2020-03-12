<template>

        <b-navbar>
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                    Home
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'bue.index' }">
                    Buefy
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'bulma.index' }">
                    Bulma
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'docs.index' }">
                    Docs
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'pagelayouts.layoutv1' }">
                    Page Layouts
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'blocks.indexblocks' }">
                    Blocks
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'blocks.cheatsheet' }">
                    Cheat Sheet
                </b-navbar-item>
                <b-navbar-dropdown label="Ui Guide">
                    <b-navbar-item tag="router-link" :to="{ name: 'bue.index' }">
                        Buefy
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ name: 'bulma.index' }">
                        Bulma
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ name: 'docs.index' }">
                        Docs
                    </b-navbar-item>
                    <hr class="navbar-divider">
                    <b-navbar-item tag="router-link" :to="{ name: 'blocks.indexblocks' }">
                        Blocks
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ name: 'pagelayouts.layoutv1' }">
                        Page Layouts
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ name: 'blocks.cheatsheet' }">
                        Cheat Sheet
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>

</template>

