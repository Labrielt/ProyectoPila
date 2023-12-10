<template>
      <v-layout row wrap >
      <v-flex v-for="categoria in categorias" :key="categoria.id" xs12 sm6 md4 lg3>
        <v-card>
          <v-card-title>{{ categoria.nombre }}</v-card-title>
          <v-card-subtitle>{{ categoria.numLibros }} libros</v-card-subtitle>
          <v-card-actions class="d-flex justify-center">
            <v-btn :to="`/categorias/${categoria.nombre}`" color="primary">Ver libros</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
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
    };
  },
};
</script>
