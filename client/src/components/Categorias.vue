<template >
  <v-layout row wrap >
    <v-tabs >
      <v-tab class="dark"
       v-for="categoria in categorias" :key="categoria.id" @click="seleccionarCategoria(categoria)">
        {{ categoria.nombre }}
      </v-tab>

      <v-tab-item  class="dark"
       v-for="categoria in categorias" :key="categoria.nombre">
        <v-layout row wrap style="padding: 10px;">
          <v-flex v-for="subcategoria in paginatedSubcategorias"
           :key="subcategoria.id" xs12 sm6 md4 lg3  style="padding: 10px;">
            <v-card >
              <v-card-title class="contenedor">
                <v-btn color="primary" :to="`categorias/${categoria.nombre}/${subcategoria._id}`">
                  {{ subcategoria._id }}
                </v-btn>
                <span>
                  <v-icon>menu_book</v-icon>
                  {{ subcategoria.numLibros }}
                  {{ subcategoria.numLibros === 1 ? 'Libro' : 'Libros' }}
                </span>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs>
    <v-pagination v-model="currentPage" class="mt-5"
    :length="Math.ceil(subcategorias.length / itemsPerPage)"></v-pagination>
  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categorias: [
        { nombre: 'Generos' },
        { nombre: 'Autores' },
        { nombre: 'Idioma' },
        { nombre: 'Editoriales' },
      ],
      subcategorias: [],
      currentPage: 1,
      itemsPerPage: 8,
    };
  },
  mounted() {
    this.obtenerGeneros();
  },
  methods: {
    async obtenerGeneros() {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/libros/generos',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.subcategorias = respuesta.data;
        })
        .catch(() => {
        });
    },
    async obtenerAutores() {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/libros/autores',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.subcategorias = respuesta.data;
        })
        .catch(() => {
        });
    },
    async obtenerIdiomas() {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/libros/idiomas',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.subcategorias = respuesta.data;
        })
        .catch(() => {
        });
    },
    async obtenerEditoriales() {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/libros/editoriales',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.subcategorias = respuesta.data;
        })
        .catch(() => {
        });
    },
    async seleccionarCategoria(categoria) {
      this.categoriaSeleccionada = categoria;
      switch (categoria.nombre) {
        case 'Generos':
          await this.obtenerGeneros();
          break;
        case 'Autores':
          await this.obtenerAutores();
          break;
        case 'Idioma':
          await this.obtenerIdiomas();
          break;
        case 'Editoriales':
          await this.obtenerEditoriales();
          break;
        default:
          // Manejo para otras categorías si es necesario
          break;
      }
    },
  },
  computed: {
    paginatedSubcategorias() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.subcategorias.slice(startIndex, endIndex);
    },
  },

};
</script>
