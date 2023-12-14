
<template>

  <v-layout row wrap>

    <H1 class="mt"> El Laberinto de Libros </H1>

      <v-carousel
        height="400"
        hide-delimiters
        progress="primary"
        style="margin-top: 5%;"
        >
        <v-carousel-item
        src="https://i.pinimg.com/originals/8d/be/96/8dbe966e815f9aa53bd12d9bb640b83c.gif" >
            <div class="d-flex fill-height justify-center align-center flex-column"
             style="background: rgba(0, 0, 0, 0.5); position: absolute; width: 100%; height: 100%;">
              <div class="text-h2" style="color: white;">
                 Bienvenido
              </div>
              <div class="text-h3" style="color: white;">
                 Disfruta de Nuestra coleccion
              </div>
            </div>
        </v-carousel-item>

        <v-carousel-item  src="https://i.pinimg.com/originals/77/01/6d/77016dc7f0b329c9197796587a65cebe.gif" >
            <div class="d-flex fill-height justify-center align-center flex-column"
             style="background: rgba(0, 0, 0, 0.5); position: absolute; width: 100%; height: 100%;">
              <div class="text-h2" style="color: white;">
                 Puedes hacerte una Cuenta
              </div>
              <div class="text-h3" style="color: white;">
                 Mira a tu izquierda , veras que no es ahi
              </div>
            </div>
        </v-carousel-item>

        <v-carousel-item
         src="https://i.pinimg.com/originals/42/88/b0/4288b0367a47ca15e89aeab9862717c8.gif" >
            <div class="d-flex fill-height justify-center align-center flex-column"
             style="background: rgba(0, 0, 0, 0.5); position: absolute; width: 100%; height: 100%;">
              <div class="text-h2" style="color: white;">
                  Hazte con una Nueva Historia
              </div>
              <div class="text-h3" style="color: white;">
                 Que puede acompañarte de por vida
              </div>
            </div>
        </v-carousel-item>
      </v-carousel>

      <div class="mt" style="background-color: rgba(160, 159, 159, 0.285);
       justify-content:space-evenly; display: flex; margin-top: 10%;">
        <div class="d-flex fill-height  flex-column " style="padding: 10%; align-items: start;">
          <H3> Categorias</H3>
          <p> Explora Nuestras Categorias</p>
          <v-btn :to="'/categorias'"> Explorar</v-btn>
        </div>
        <img style="width:50%"
        src="https://cdn.pixabay.com/photo/2019/05/14/21/50/storytelling-4203628_1280.jpg">
      </div>

    <H3 class="mt" style="margin-top: 5%; margin-bottom: 1%;"> Lista de Libros</H3>
    <v-flex   class="mt" v-for="libro in paginatedLibros" :key="libro.id" xs6>
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

    <v-pagination style="margin-top: 5%;"
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
