<template >
  <v-layout row wrap >
    <v-tabs >
      <v-tab class="dark"
       v-for="categoria in categorias" :key="categoria.id">
        {{ categoria.nombre }}
      </v-tab>

      <v-tab-item  class="dark"
       v-for="categoria in categorias" :key="categoria.nombre">
        <v-layout row wrap style="padding: 10px;">
          <v-flex v-for="subcategoria in paginatedSubcategorias"
           :key="subcategoria.id" xs12 sm6 md4 lg3  style="padding: 10px;">
            <v-card >
              <v-card-title class="contenedor">
                <v-btn color="primary" :to="`categorias/${categoria.nombre}`" >
                  {{ subcategoria.titulo }}
                </v-btn>
                <span>
                  <v-icon>menu_book</v-icon>
                  {{ subcategoria.numLibros }} Libros
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
export default {
  data() {
    return {
      categorias: [
        { nombre: 'Generos' },
        { nombre: 'Autores' },
        { nombre: 'Idioma' },
        { nombre: 'Editoriales' },
      ],
      subcategorias: [
        { titulo: 'Gabriel Garcia Marquez', numLibros: '8' },
        { titulo: 'J.K. Rowling', numLibros: '7' },
        { titulo: 'Haruki Murakami', numLibros: '15' },
        { titulo: 'Jane Austen', numLibros: '6' },
        { titulo: 'Stephen King', numLibros: '50' },
        { titulo: 'Agatha Christie', numLibros: '66' },
        { titulo: 'George Orwell', numLibros: '9' },
        { titulo: 'Toni Morrison', numLibros: '11' },
        { titulo: 'Isabel Allende', numLibros: '23' },
        { titulo: 'Leo Tolstoy', numLibros: '4' },
      ],
      currentPage: 1,
      itemsPerPage: 8,
    };
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
