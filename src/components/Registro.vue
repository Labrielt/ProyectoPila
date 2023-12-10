<template>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs5>
          <v-card>
            <v-card-title class="text-center">Registrate</v-card-title>
            <v-card-text>
              <v-form v-model="valido" ref="formulario" lazy-validation>
                <v-text-field v-model="nombre" label='Nombre'
                :rules="reglasNombre" required></v-text-field>
                <v-text-field v-model="email" label='Correo electrónico'
                :rules="reglasCorreo" required></v-text-field>
                <v-text-field v-model="contrasena" label='Contraseña'
                type='password'
                :rules='reglasCorreo' required></v-text-field>
                <v-text-field v-model="contrasenaconfirmacion"
                label="Confirma tu contraseña" type='password'
                :rules='reglasContrasenaConfirmacion' required></v-text-field>
                <v-btn  @click="registro" :disabled="!valido"
                >registrarse</v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions >
              <v-btn @click="login" text color="purple">¿Tienes cuenta? Inicia session</v-btn>
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
      contrasena: '',
      contrasenaconfirmacion: '',
      reglasNombre: [
        v => !!v || 'Ingresa tu Nombre de Usuario',
      ],
      reglasCorreo: [
        v => !!v || 'Ingresa tu correo',
      ],
      reglasContrasena: [
        v => !!v || 'Ingresa tu contraseña',
      ],
      reglasContrasenaConfirmacion: [
        v => !!v || 'Confirma tu Contraseña',
      ],
    };
  },
  methods: {
    registro() {
      this.$swal(
        'Grandioso!',
        'Ya tienes una cuenta',
        'success',
      );
      this.$router.push({ name: 'login' });
      this.$refs.formulario.reset();
    },
    login() {
      this.$router.push('/login');
    },
  },
};
</script>

