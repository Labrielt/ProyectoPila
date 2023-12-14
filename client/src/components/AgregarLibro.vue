<template>
  <v-layout align-center justify-center>
    <v-flex xs6 >
      <v-card >
          <v-card-title class="titulo_azul">Agregar Libro</v-card-title>
          <v-card-text>
            <v-form v-model="valido" ref="formulario" lazy-validation>
              <v-text-field
                label="Titulo :"
                v-model="titulo"
                :rules="reglasTitulo"
                required
              ></v-text-field>

              <v-text-field
                label="Sinopisis :"
                v-model="sinopsis"
                required
                :rules="reglasSinopsis"
              ></v-text-field>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Autor :"
                    v-model="autor"
                    :rules="reglasAutor"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="ISBN :"
                    v-model="isbn"
                    :rules="reglasISBN"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Genero :"
                    v-model="genero"
                    :rules="reglasGenero"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Editorial :"
                    v-model="editorial"
                    :rules="reglasEditorial"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Idioma :"
                    v-model="idioma"
                    :rules="reglasIdioma"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Precio :"
                    v-model="precio"
                    :rules="reglasPrecio"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Numero de paginas :"
                    v-model="paginas"
                    :rules="reglasPaginas"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Año de publicacion :"
                    v-model="anhopub"
                    :rules="reglasPublicacion"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-file-input label="Portada"></v-file-input>

              <v-btn color="primary" @click="guardar" :disabled="!valido">Guardar</v-btn>
              <v-btn @click="limpiar">Limpiar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
    </v-flex>

  </v-layout>
</template>


<script>
import axios from 'axios';

export default {
  data: () => ({
    valido: true,
    titulo: '',
    sinopsis: '',
    autor: '',
    isbn: '',
    genero: '',
    idoma: '',
    precio: '',
    paginas: '',
    anhopub: '',
    reglasTitulo: [
      v => !!v || 'El libro es requerido',
    ],
    reglasSinopsis: [
      v => !!v || 'Sinopsis de pelicula requerida',
    ],
    reglasAutor: [
      v => !!v || 'Autor es requerido',
    ],
    reglasISBN: [
      v => !!v || 'ISBN es requerido',
    ],
    reglasEditorial: [
      v => !!v || 'Editorial es requerida',
    ],
    reglasIdioma: [
      v => !!v || 'Idioma es requerido',
    ],
    reglasGenero: [
      v => !!v || 'Genero del libro es requerido',
      v => (v && v.length <= 80) || 'Genero debe ser menor o igual a 80 carateres',
    ],
    reglasPrecio: [
      v => !!v || 'El Precio es requerido',
    ],
    reglasPublicacion: [
      v => !!v || 'Año de publicacion es requerido',
    ],
    reglasPaginas: [
      v => !!v || 'Numero de paginas requerido',
    ],
  }),

  methods: {
    guardar() {
      if (this.$refs.formulario.validate()) {
        return axios({
          method: 'post',
          data: {
            nombre: this.nombre,
            sinopsis: this.sinopsis,
            anhopub: this.anhopub,
            genero: this.genero,
          },
          url: 'http://localhost:8081/peliculas',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(() => {
            this.$swal(
              'Grandioso!',
              'Pelicula Guardada satisfactoriamentos',
              'success',
            );
            this.$router.push({ name: 'Inicio' });
            this.$refs.formulario.reset();
          })
          .catch(() => {
            this.$swal();
          });
      }

      return true;
    },
    limpiar() {
      this.$refs.formulario.reset();
    },
  },
};
</script>
