<template>
  <v-layout align-center justify-center>
    <v-flex  xs12 md10 lg8  mt-10>
      <v-card >
          <v-card-title class="titulo_form">Agregar Libro</v-card-title>
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
              <v-file-input label="Portada" v-model="portada"></v-file-input>

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
    idioma: '',
    precio: '',
    paginas: '',
    anhopub: '',
    portada: null,
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
        const formData = new FormData();
        formData.append('portada', this.portada);
        formData.append('titulo', this.titulo);
        formData.append('sinopsis', this.sinopsis);
        formData.append('autor', this.autor);
        formData.append('isbn', this.isbn);
        formData.append('genero', this.genero);
        formData.append('idioma', this.idioma);
        formData.append('precio', this.precio);
        formData.append('paginas', this.paginas);
        formData.append('anhopub', this.anhopub);
        formData.append('editorial', this.editorial);

        return axios.post('http://localhost:8081/libros/anadir', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(() => {
            this.$swal(
              '¡Maravilloso!',
              'Libro guardado satisfactoriamente',
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
