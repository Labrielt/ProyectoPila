<template>
      <v-layout align-center justify-center>
        <v-flex xs10 md8 lg6  mt-10>
          <v-card>
            <v-card-title class="titulo_form"> Iniciar sesión</v-card-title>
            <v-card-text>
              <v-form v-model="valido" ref="formulario" lazy-validation>
                <v-text-field v-model='email' label='Correo electrónico'
                :rules='reglasCorreo' required></v-text-field>
                <v-text-field v-model='password' label='Contraseña'
                type='password' :rules='reglasContrasena' required></v-text-field>

                <v-btn color="primary"
                @click="login"
                :disabled="!valido"
                >Entrar</v-btn>
                <v-btn @click="limpiar">Limpiar</v-btn>
              </v-form>
            </v-card-text>
              <v-btn @click="registro" text color='primary'>
              Regístrate Aqui</v-btn>
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
      email: '',
      password: '',
      reglasCorreo: [
        v => !!v || 'Ingresa tu correo',
      ],
      reglasContrasena: [
        v => !!v || 'Ingresa tu contraseña',
      ],
    };
  },
  methods: {
    async login() {
      // Verificar la validez del formulario
      if (!this.$refs.formulario.validate()) {
        this.$swal('Error', 'Por favor, completa el formulario correctamente', 'error');
        return;
      }
      try {
        const response = await axios.post('http://localhost:8081/libros/login', {
          email: this.email,
          password: this.password,
        });

        if (response.data.success) {
          this.$swal('Grandioso!', 'Sesión iniciada', 'success');
          this.$router.push({ name: 'Inicio' });
          this.$refs.formulario.reset();
        } else {
          this.$swal('Error', 'Credenciales incorrectas', 'error');
        }
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
        this.$swal('Error', 'Error interno del servidor', 'error');
      }
    },

    registro() {
      this.$router.push('./registro');
    },

    limpiar() {
      this.email = '';
      this.password = '';
      this.valido = true;
      this.$refs.formulario.reset();
    },
  },
};
</script>

