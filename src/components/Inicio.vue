
<template>

  <v-layout row wrap>

    <H1> TITULO DE LA PAGINA</H1>

      <v-carousel
        height="400"
        hide-delimiters
        progress="primary"
        >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          >
          <v-sheet
            height="100%"
          >
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                {{ slide }} Slide
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>


    <H3 class="mt"> Lista de Libros</H3>
    <v-flex class="mt" v-for="libro in paginatedLibros" :key="libro.id" xs6>
      <v-card>
        <div style="display: flex;">
          <img src="../assets/logo.png" alt="Portada">
          <div>
            <v-card-title primary-title>
              <div>
                <div class="headline">
                  <v-btn text :to="`/libros/${libro.titulo}`">{{ libro.titulo }}</v-btn>
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
    <v-pagination
      v-model="currentPage"
      :length="Math.ceil(libros.length / itemsPerPage)"
    ></v-pagination>

  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
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
          id: 2,
          titulo: 'Libro 404',
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
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
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
  },
};

</script>
