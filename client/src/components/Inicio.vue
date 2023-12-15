
<template>

  <v-layout row wrap>

    <H1 class="mt"> El Laberinto de Libros </H1>

      <v-carousel
        height="400"
        hide-delimiters
        progress="primary"
        class="mt-5"
        >
        <v-carousel-item
        src="https://i.pinimg.com/originals/8d/be/96/8dbe966e815f9aa53bd12d9bb640b83c.gif" >
            <div class="carusel_items"
            >
              <div class="text-h2">
                 Bienvenido
              </div>
              <div class="text-h3">
                 Disfruta de Nuestra coleccion
              </div>
            </div>
        </v-carousel-item>

        <v-carousel-item  src="https://i.pinimg.com/originals/77/01/6d/77016dc7f0b329c9197796587a65cebe.gif" >
            <div class="carusel_items">
              <div class="text-h2">
                 Puedes hacerte una Cuenta
              </div>
              <div class="text-h3">
                 Mira a tu izquierda , veras que no es ahi
              </div>
            </div>
        </v-carousel-item>

        <v-carousel-item
         src="https://i.pinimg.com/originals/42/88/b0/4288b0367a47ca15e89aeab9862717c8.gif" >
            <div class="carusel_items">
              <div class="text-h2">
                  Hazte con una Nueva Historia
              </div>
              <div class="text-h3">
                 Que puede acompañarte de por vida
              </div>
            </div>
        </v-carousel-item>
      </v-carousel>

      <div class="seccion_itsb">
        <div class=" seccion_tsb">
          <H3> Categorias</H3>
          <p> Explora Nuestras Categorias</p>
          <v-btn :to="'/categorias'"> Explorar</v-btn>
        </div>
        <img style="width:50%"
        src="https://cdn.pixabay.com/photo/2019/05/14/21/50/storytelling-4203628_1280.jpg">
      </div>

    <H3 class="margen_tb"> Lista de Libros</H3>
    <v-flex  xs12  lg6 styles="padding: 10px;"
     v-for="libro in paginatedLibros" :key="libro.id" class="mt">
      <v-card  :href="`/libros/${libro._id}`"  class="libro">
        <div class="d-flex">
          <img class="imagen" :src="libro.portada" alt="Portada"> <!-- "../assets/logo.png" -->
          <div>
            <v-card-title primary-title >
              <div>
                <div class="headline">
                  <h5> {{ libro.titulo }}</h5>
                </div>
                <span>{{ libro.genero }} &middot; {{ libro.autor }}</span>
              </div>
            </v-card-title>
            <v-card-text>
              {{ libro.sinopsis }}
            </v-card-text>
          </div>
        </div>
      </v-card>
    </v-flex>

    <v-pagination style="margin-top: 5%;"
      v-model="currentPage"
      :length="Math.ceil(libros.length / itemsPerPage)"
    ></v-pagination>

  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Libros',
  data() {
    return {
      tab: null,
      libros: [],
      currentPage: 1,
      itemsPerPage: 4,

    };
  },
  mounted() {
    this.obtenerLibros();
  },
  methods: {
    async obtenerLibros() {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/libros/ver',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.libros = respuesta.data;
        })
        .catch(() => {
        });
    },
  },
  computed: {
    paginatedLibros() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.libros.slice(startIndex, endIndex);
    },
  },
};

</script>
