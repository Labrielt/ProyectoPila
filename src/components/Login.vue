<template>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs5>
          <v-card>
            <v-card-title class="text-center">Iniciar sesión</v-card-title>
            <v-card-text>
              <v-form v-model="valido" ref="formulario" lazy-validation>
                <v-text-field v-model='email' label='Correo electrónico'
                :rules='reglasCorreo' required></v-text-field>
                <v-text-field v-model='password' label='Contraseña'
                type='password' :rules='reglasContrasena' required></v-text-field>
                <v-btn  @click="login" :disabled="!valido"
                >Iniciar session</v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="registro" text color='primary'>
              ¿No tienes una cuenta? Regístrate</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </template>

<script>
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
    login() {
      this.$swal(
        'Grandioso!',
        'Session Iniciada',
        'success',
      );
      this.$router.push({ name: 'Inicio' });
      this.$refs.formulario.reset();
    },
    registro() {
      this.$router.push('/registro');
    },
  },
};
</script>

