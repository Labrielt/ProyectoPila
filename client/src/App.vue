<template  >
  <v-app id="inspire" style="background-color:  black;">
    <v-navigation-drawer fixed v-model="drawer"
     app style="background-color:  rgba(173, 173, 173, 0.288);  color: white;">
        <v-list  dense>

        <router-link v-bind:to="{name: 'Inicio'}" class="side_bar_link">
          <v-list-item  style="color: white;"  >
            <v-list-item-action>
              <v-icon color="white">home</v-icon>
            </v-list-item-action>
            <v-list-item-content >Inicio</v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link v-bind:to="{name: 'Categoria'}" class="side_bar_link">
          <v-list-item  style="color: white;"  >
            <v-list-item-action>
              <v-icon color="white">list</v-icon>
            </v-list-item-action>
            <v-list-item-content >Categorias</v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link v-bind:to="{name: 'Contacto'}" class="side_bar_link">
          <v-list-item style="color: white;">
            <v-list-item-action>
              <v-icon color="white">code</v-icon>
            </v-list-item-action>
            <v-list-item-content>Sobre Nosotros</v-list-item-content>
          </v-list-item>
        </router-link>
        </v-list>

    </v-navigation-drawer>

    <v-app-bar color="gray" dark fixes app>
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer">
      <v-icon>menu</v-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Inicio</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text color="white" v-bind:to="{name: 'Login'}">
          <v-icon>account_circle</v-icon>
          Iniciar Sesión</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text color="white" v-bind:to="{name: 'AgregarLibro'}">
          <v-icon>add_circle</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <div id="app" style="margin-top: -10px;">
          <router-view/>
        </div>
      </v-container>
    </v-main>

    <v-footer color="black"  class="white--text" app>
      <span >&copy; 2023</span>
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
