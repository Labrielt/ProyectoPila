<template>
  <v-layout row xs10 class="mt-5">
    <v-flex xs12 lg9  class="mt-5">
      <!-- Libro -->
      <v-card>
        <v-layout row>
          <v-flex xs12 md4 style="display: flex; justify-content: center; align-items: center;">
            <img src='@/assets/logo.png'>
          </v-flex>
          <v-flex xs12 md8>
            <v-card-title>{{ libro.titulo }}</v-card-title>
            <v-card-subtitle>{{ libro.autor }} &middot; {{ libro.genero }}</v-card-subtitle>

            <!--  iconos -->
            <v-layout row style="justify-content: space-between;
             margin-top: 1%;  margin-bottom: 1%;">
              <v-flex xs2>
                <v-layout column align-center>
                  <v-icon>mdi-currency-usd</v-icon>
                  <div>{{ libro.precio }}</div>
                </v-layout>
              </v-flex>
              <v-flex xs2>
                <v-layout column align-center>
                  <v-icon>mdi-file-document-outline</v-icon>
                  <div>{{ libro.paginas }} pag</div>
                </v-layout>
              </v-flex>
              <v-flex xs2>
                <v-layout column align-center>
                  <v-icon>mdi-calendar</v-icon>
                  <div>{{ libro.anhopub }}</div>
                </v-layout>
              </v-flex>
              <v-flex xs2>
                <v-layout column align-center>
                  <div>ISBN</div>
                  <div>{{ libro.isbn }}</div>
                </v-layout>
              </v-flex>
              <v-flex xs2>
                <v-layout column align-center>
                  <v-icon>public</v-icon>
                  <div>{{ libro.idioma }} </div>
                </v-layout>
              </v-flex>
            </v-layout>

            <v-card-text>{{ libro.sinopsis }}</v-card-text>

          </v-flex>
        </v-layout>

      </v-card>

      <!-- Sección de reseñas existentes -->
      <v-card class="mt-10" >
        <v-card-title>Reseñas</v-card-title>
        <v-card-text>
          <!-- Lista de reseña -->
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(reseña, index) in reseñas" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ reseña.usuario }}</v-list-item-title>
                  <v-rating
                    style="height: 20% ; "
                    hover
                    readonly
                    :length="5"
                    :size="20"
                    :value="reseña.calificacion"
                    color="black"
                  />
                  <v-list-item-subtitle>{{ reseña.comentario }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>

      <!-- nueva reseña -->
      <v-card style="margin-top: 30px;">
        <v-card-title>Dejar una Reseña</v-card-title>
        <v-card-text>
          <v-form v-model="valido" ref="formulario" lazy-validation>
            <v-text-field
            label='Tu Reseña'
            :rules="reglasResena" required>
           </v-text-field>
           <div class="columna">
             <v-card-title> Califica el libro :</v-card-title>
            <v-rating  style="height: 20%;"
              hover :length="5" :size="30"
              :value="3"  color="black"
            />
           </div>
            <v-btn class="mt-5"  @click="dejarReseña" color='primary' :disabled="!valido"
            >Publicar Reseña</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 lg3 class="mt-5">
      <!-- Formulario de compra -->
      <v-card>
        <v-card-title>Formulario de Compra</v-card-title>
        <v-card-text>
          <v-form v-model="valido" ref="formulario" lazy-validation>
            <v-subheader>Precio a Pagar</v-subheader>
            <div>${{ libro.precio }}</div>
            <v-text-field  label='Dirección de Envío'
            :rules="reglasDireccion" required></v-text-field>
            <v-select label='Opciones de Pago'
            :items="opcionesPago" :rules="reglasPago"
            required></v-select>
            <v-btn @click="comprarLibro" color='primary'
            :disabled="!valido" >Comprar</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      valido: true,
      libro: {
        titulo: 'Título del Libro',
        autor: 'Autor del Libro',
        genero: 'Genero del Libro',
        editorial: 'planeta',
        idioma: 'Ingles',
        ISBN: '1234567890',
        sinopsis: 'Lorem ipsum dolor sit amet, consectetur'
          + 'adipiscing elit.Phasellus porta libero ut orci cursus'
          + 'aliquam. Pellentesque a dolor sodales orci vulputate'
          + 'pulvinar et eget tortor. Donec congue mi in pretium '
          + 'lacinia. Nunc sed condimentum metus. Class aptent taciti sociosqu ad litora',
        precio: 19.99,
        numPaginas: 300,
        anoPublicacion: 2022,
      },
      compra: {
        direccion: '',
        opcionPago: '',
      },
      opcionesPago: ['Tarjeta de crédito', 'Transferencia bancaria', 'PayPal'],
      reseñas: [
        { usuario: 'Usuario 1',
          comentario: 'Excelente libro. Lo recomiendo totalmente.',
          calificacion: 4,
        },
        { usuario: 'Usuario 2',
          comentario: 'Una historia fascinante. No pude dejar de leerlo.',
          calificacion: 5,
        },
      ],
      nuevaReseña: {
        usuario: '',
        comentario: '',
      },
      reglasDireccion: [
        v => !!v || 'Ingresa la Dirrecion',
      ],
      reglasPago: [
        v => !!v || 'Ingresa opcion de pago',
      ],
      reglasResena: [
        v => !!v || 'La reseña esta vacia',
      ],
    };
  },
  mounted() {
    // Obtén el ID del libro desde los parámetros de la ruta
    const libroId = this.$route.params.id;
    this.cargarLibro(libroId);
  },
  methods: {
    async cargarLibro(id) {
      try {
        const respuesta = await axios.get(`http://localhost:8081/libros/id/${id}`);
        this.libro = respuesta.data;
      } catch (error) {
        this.snackbar = true;
      }
    },
    comprarLibro() {
      this.$swal(
        'Comprado!',
        'Disfruta de tu nuevo libro',
        'success',
      );
    },
    dejarReseña() {

    },
  },
};
</script>
