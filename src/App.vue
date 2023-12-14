<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>

        <router-link v-bind:to="{name: 'Inicio'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content>Inicio</v-list-item-content>
          </v-list-item>
        </router-link>

        <v-list-group >

          <template v-slot:activator>
              <v-list-item-action>
                <v-icon>list</v-icon>
              </v-list-item-action>
              <v-list-item-content>Categorias</v-list-item-content>
          </template>

          <router-link v-bind:to="{ name: 'Categoria',
           params: { categoria: 'genero' }}" class="side_bar_link">
            <v-list-item>
              <v-list-item-action>
                <v-icon>auto_stories</v-icon>
              </v-list-item-action>
              <v-list-item-content>Generos</v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link v-bind:to="{ name: 'Categoria',
           params: { categoria: 'Autor' }}" class="side_bar_link">
            <v-list-item>
              <v-list-item-action>
                <v-icon>person_3</v-icon>
              </v-list-item-action>
              <v-list-item-content>Autor</v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link v-bind:to="{ name: 'Categoria',
           params: { categoria: 'idioma' }}" class="side_bar_link">
            <v-list-item>
              <v-list-item-action>
                <v-icon>language</v-icon>
              </v-list-item-action>
              <v-list-item-content>Idioma</v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link v-bind:to="{ name: 'Categoria',
           params: { categoria: 'editorial' }}" class="side_bar_link">
            <v-list-item>
              <v-list-item-action>
                <v-icon>apartment</v-icon>
              </v-list-item-action>
              <v-list-item-content>Editorial</v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-group>

        <router-link v-bind:to="{name: 'Contacto'}" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>contact_mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>Contacto</v-list-item-content>
          </v-list-item>
        </router-link>
        </v-list>

    </v-navigation-drawer>

    <v-app-bar color="indigo" dark fixes app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
      <v-icon>menu</v-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Inicio</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text color="white" v-bind:to="{name: 'Login'}">
          <v-icon>account_circle</v-icon>
          Inciar session</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text color="white" v-bind:to="{name: 'AgregarLibro'}">
          <v-icon>add_circle</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <div id="app">
          <router-view/>
        </div>
      </v-container>
    </v-main>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2023</span>
    </v-footer>

  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>
