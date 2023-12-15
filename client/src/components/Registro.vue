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
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081';

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
    async registro() {
      try {
        // Mostrar en la consola los datos que se van a enviar
        // eslint-disable-next-line no-console
        console.log('Datos a enviar:', {
          nombre: this.nombre,
          email: this.email,
          contrasenha: this.contrasenha,
        });

        // Enviar los datos al servidor para el registro
        const respuesta = await axios.post('/api/registro', {
          nombre: this.nombre,
          email: this.email,
          contrasenha: this.contrasenha,
        });

        // Mostrar en la consola la respuesta del servidor
        // eslint-disable-next-line no-console
        console.log(respuesta.data);

        // Manejar la respuesta del servidor
        if (respuesta.data.mensaje === 'Registro exitoso') {
          // Registro exitoso, mostrar mensaje y redirigir al usuario
          this.$swal('Grandioso!', 'Registro exitoso', 'success');
          this.$router.push({ name: 'login' });
          // Limpiar el formulario si es necesario
          this.$refs.formulario.reset();
        } else {
          // El servidor respondió con un mensaje de error, mostrarlo al usuario
          this.$swal('Error', respuesta.data.mensaje, 'error');
        }
      } catch (error) {
        // Mostrar en la consola cualquier error que ocurra durante la solicitud
        // eslint-disable-next-line no-console
        console.error(error);
        // Mostrar un mensaje de error al usuario
        this.$swal('Error', 'Ha ocurrido un error durante el registro', 'error');
      }
    },
    login() {
      this.$router.push('/login');
    },
  },
};
</script>

