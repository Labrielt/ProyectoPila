<template>
  <v-layout row wrap style="margin-top: 10px;">
    <v-flex xs9>
      <!-- Libro -->
      <v-card>
        <v-layout row>
          <v-flex xs8 md4>
            <img src='@/assets/logo.png' >
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
                  <div>{{ libro.numPaginas }} pag</div>
                </v-layout>
              </v-flex>
              <v-flex xs2>
                <v-layout column align-center>
                  <v-icon>mdi-calendar</v-icon>
                  <div>{{ libro.anoPublicacion }}</div>
                </v-layout>
              </v-flex>
              <v-flex xs2>
                <v-layout column align-center>
                  <div>ISBN</div>
                  <div>{{ libro.ISBN }}</div>
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

      <br>

      <!-- Sección de reseñas existentes -->
      <v-card>
        <v-card-title>Reseñas</v-card-title>
        <v-card-text>
          <!-- Lista de reseña -->
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(reseña, index) in reseñas" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ reseña.usuario }}</v-list-item-title>
                  <v-list-item-subtitle>{{ reseña.comentario }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>

      <br>

      <!-- nueva reseña -->
      <v-card>
        <v-card-title>Dejar una Reseña</v-card-title>
        <v-card-text>
          <v-form v-model="valido" ref="formulario" lazy-validation>
            <v-textarea
            label='Tu Reseña'
            :rules="reglasResena" required></v-textarea>
            <v-btn  @click="dejarReseña" color='primary' :disabled="!valido"
            >Publicar Reseña</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs3>
      <!-- Formulario de compra -->
      <v-card>
        <v-card-title>Formulario de Compra</v-card-title>
        <v-card-text>
          <v-form v-model="valido" ref="formulario" lazy-validation>
            <v-subheader>Precio a Pagar</v-subheader>
            <div>{{ libro.precio }}</div>
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
        { usuario: 'Usuario 1', comentario: 'Excelente libro. Lo recomiendo totalmente.' },
        { usuario: 'Usuario 2', comentario: 'Una historia fascinante. No pude dejar de leerlo.' },
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
  methods: {
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
