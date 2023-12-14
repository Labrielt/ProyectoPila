<template>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs10 md8 lg6  mt-8>
          <v-card>
            <v-card-title class="titulo_form">Registrate</v-card-title>
            <v-card-text>
              <v-form v-model="valido" ref="formulario" lazy-validation>
                <v-text-field
                label="Nombre"
                v-model="nombre"
                required
                :rules="reglasNombre"
                ></v-text-field>
                <v-text-field
                label="Email"
                v-model="email"
                :rules="reglasEmail"
                required
                ></v-text-field>
                <v-text-field
                label="Contraseña"
                v-model="contrasenha"
                :rules="reglasContrasenha"
                required
                type="password"
                ></v-text-field>
                <v-text-field
                label="Confirmar Contraseña"
                v-model="confirmar_contrasenha"
                :rules = "reglasContrasenhaConfirmacion"
                required
                type="password"
                ></v-text-field>
                <v-btn color="primary"
                @click="enviar"
                :disabled="!valido"
                >Enviar</v-btn>
                <v-btn @click="limpiar">Limpiar</v-btn>
              </v-form>
            </v-card-text>
              <v-btn @click="login" text color="primary">Inicia session</v-btn>
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
      nombre: '',
      email: '',
      contrasenha: '',
      confirmar_contrasenha: '',
      reglasEmail: [
        v => !!v || 'Email requerido',
        v => /\S+@\S+\./.test(v) || 'El email debe ser válido',
      ],
      reglasNombre: [
        v => !!v || 'Ingresa tu Nombre de Usuario',
      ],
      reglasContrasenha: [
        v => !!v || 'Ingresa tu contraseña',
      ],
      reglasContrasenhaConfirmacion: [
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

