<template>
  <v-layout row wrap>
    <v-breadcrumbs :items="breadcrumbItems" color="white">
        <template v-slot:prepend>
          <v-icon  size="small" icon="$vuetify"></v-icon>
        </template>
     </v-breadcrumbs>
    <v-tabs >
      <v-tab v-for="categoria in categorias" :key="categoria._id"
       @click="cambiarCategoria(categoria._id)"
       class="dark">
      {{ categoria._id }}
    </v-tab>

      <v-tab-item  class="dark"
       v-for="categoria in categorias" :key="categoria._id">
        <v-layout row wrap>
          <v-flex  xs12  md6   class="mt" v-for="libro in paginatedLibros" :key="libro._id" >
            <v-card  :href="`/libros/${libro._id}`" class="libro" >
              <div style="display: flex;">
                <img class="imagen" :src="libro.portada" alt="Portada">
                <div>
                  <v-card-title primary-title>
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
        </v-layout>

      </v-tab-item>
    </v-tabs>
    <v-pagination class="mt-5"
        v-model="currentPage"
        :length="Math.ceil(libros.length / itemsPerPage)"
        ></v-pagination>
  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categorias: [],
      libros: [
        {
          id: 1,
          titulo: 'Libro 1',
          autor: 'Autor 1',
          genero: 'Genero 1',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur'
          + 'adipiscing elit.Phasellus porta libero ut orci cursus'
          + 'aliquam. Pellentesque a dolor sodales orci vulputate'
          + 'pulvinar et eget tortor. Donec congue mi in pretium '
          + 'lacinia. Nunc sed condimentum metus. Class aptent taciti sociosqu ad litora',
          imagen: '../assets/logo.png',
        },
        {
          id: 2,
          titulo: 'Libro 2',
          autor: 'Autor 2',
          genero: 'Genero 2',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur'
          + 'adipiscing elit.Phasellus porta libero ut orci cursus'
          + 'aliquam. Pellentesque a dolor sodales orci vulputate'
          + 'pulvinar et eget tortor. Donec congue mi in pretium '
          + 'lacinia. Nunc sed condimentum metus. Class aptent taciti sociosqu ad litora',
          imagen: '../assets/logo.png',
        },
        {
          id: 1,
          titulo: 'Libro 1',
          autor: 'Autor 1',
          genero: 'Genero 1',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur'
          + 'adipiscing elit.Phasellus porta libero ut orci cursus'
          + 'aliquam. Pellentesque a dolor sodales orci vulputate'
          + 'pulvinar et eget tortor. Donec congue mi in pretium '
          + 'lacinia. Nunc sed condimentum metus. Class aptent taciti sociosqu ad litora',
          imagen: '../assets/logo.png',
        },
        {
          id: 2,
          titulo: 'Libro 12',
          autor: 'Autor 2',
          genero: 'Genero 2',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur'
          + 'adipiscing elit.Phasellus porta libero ut orci cursus'
          + 'aliquam. Pellentesque a dolor sodales orci vulputate'
          + 'pulvinar et eget tortor. Donec congue mi in pretium '
          + 'lacinia. Nunc sed condimentum metus. Class aptent taciti sociosqu ad litora',
          imagen: '../assets/logo.png',
        },
        {
          id: 1,
          titulo: 'Libro 102',
          autor: 'Autor 1',
          genero: 'Genero 1',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur'
          + 'adipiscing elit.Phasellus porta libero ut orci cursus'
          + 'aliquam. Pellentesque a dolor sodales orci vulputate'
          + 'pulvinar et eget tortor. Donec congue mi in pretium '
          + 'lacinia. Nunc sed condimentum metus. Class aptent taciti sociosqu ad litora',
          imagen: '../assets/logo.png',
        },
        {
          id: 2,
          titulo: 'Libro 92',
          autor: 'Autor 2',
          genero: 'Genero 2',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur'
          + 'adipiscing elit.Phasellus porta libero ut orci cursus'
          + 'aliquam. Pellentesque a dolor sodales orci vulputate'
          + 'pulvinar et eget tortor. Donec congue mi in pretium '
          + 'lacinia. Nunc sed condimentum metus. Class aptent taciti sociosqu ad litora',
          imagen: '../assets/logo.png',
        },
      ],
      currentPage: 1,
      itemsPerPage: 4,
    };
  },
  mounted() {
    const nombreCategoria = this.$route.params.subcategoria;
    const categoria = this.$route.params.idSubcategoria;
    if (nombreCategoria === 'Autores') {
      this.obtenerAutores();
      this.obtenerLibrosPorAutor(categoria);
    }
    if (nombreCategoria === 'Generos') {
      this.obtenerGeneros();
      this.obtenerLibrosPorGenero(categoria);
    }
    if (nombreCategoria === 'Idioma') {
      this.obtenerIdiomas();
      this.obtenerLibrosPorIdioma(categoria);
    }
    if (nombreCategoria === 'Editoriales') {
      this.obtenerEditoriales();
      this.obtenerLibrosPorEditorial(categoria);
    }
  },
  methods: {
    async obtenerLibrosPorAutor(autor) {
      try {
        const respuesta = await axios.get(`http://localhost:8081/libros/librosPorAutor/${autor}`);
        this.libros = respuesta.data;
      } catch (error) {
        this.snackbar = true;
      }
    },
    async obtenerLibrosPorGenero(genero) {
      try {
        const respuesta = await axios.get(`http://localhost:8081/libros/librosPorGenero/${genero}`);
        this.libros = respuesta.data;
      } catch (error) {
        this.snackbar = true;
      }
    },
    async obtenerLibrosPorIdioma(idioma) {
      try {
        const respuesta = await axios.get(`http://localhost:8081/libros/librosPorIdioma/${idioma}`);
        this.libros = respuesta.data;
      } catch (error) {
        this.snackbar = true;
      }
    },
    async obtenerLibrosPorEditorial(editorial) {
      try {
        const respuesta = await axios.get(`http://localhost:8081/libros/librosPorEditorial/${editorial}`);
        this.libros = respuesta.data;
      } catch (error) {
        this.snackbar = true;
      }
    },
    async obtenerGeneros() {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/libros/generos',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          this.categorias = respuesta.data;
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
          this.categorias = respuesta.data;
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
          this.categorias = respuesta.data;
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
          this.categorias = respuesta.data;
        })
        .catch(() => {
        });
    },
    cambiarCategoria(categoria) {
      const nombreCategoria = this.$route.params.subcategoria;
      switch (nombreCategoria) {
        case 'Autores':
          this.obtenerLibrosPorAutor(categoria);
          break;
        case 'Generos':
          this.obtenerLibrosPorGenero(categoria);
          break;
        case 'Idioma':
          this.obtenerLibrosPorIdioma(categoria);
          break;
        case 'Editoriales':
          this.obtenerLibrosPorEditorial(categoria);
          break;
        default:
          break;
      }
    },

  },
  computed: {
    paginatedLibros() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.libros.slice(startIndex, endIndex);
    },
    breadcrumbItems() {
      const routeSegments = this.$route.path.split('/').filter(segment => segment !== '');
      let path = '';
      const items = [];

      routeSegments.forEach((segment) => {
        path += `/${segment}`;
        items.push({
          text: segment,
          disabled: false,
          href: path,
        });
      });

      return items;
    },
  },
};
</script>
