<template>
  <v-layout row wrap>
    <v-breadcrumbs :items="breadcrumbItems" color="white">
        <template v-slot:prepend>
          <v-icon  size="small" icon="$vuetify"></v-icon>
        </template>
     </v-breadcrumbs>
    <v-tabs >
      <v-tab v-for="categoria in categorias" :key="categoria.id"
       class="dark" >
        {{ categoria.nombre }}
      </v-tab>

      <v-tab-item  class="dark"
       v-for="categoria in categorias" :key="categoria.id">
        <v-layout row wrap>
          <v-flex  xs12  md6   class="mt" v-for="libro in paginatedLibros" :key="libro.id" >
            <v-card  :href="`/libros/${libro.titulo}`" class="libro" >
              <div style="display: flex;">
                <img class="imagen" src="../assets/logo.png" alt="Portada">
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
                    {{ libro.descripcion }}
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
export default {
  data() {
    return {
      categorias: [
        {
          id: 1,
          nombre: 'Ficción',
          numLibros: 25,
        },
        {
          id: 2,
          nombre: 'Ciencia Ficción',
          numLibros: 15,
        },
        {
          id: 3,
          nombre: 'Romance',
          numLibros: 30,
        },
      ],
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
  methods: {
  },
};
</script>
