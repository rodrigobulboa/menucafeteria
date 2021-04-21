<template>
  <div>
    <b-card no-body header="Menú Cafetería Rigo">
      <b-list-group flush>
        <b-list-group-item v-for="producto of productos" :key="producto.id">
          {{ producto.nombre }} - {{ producto.precio }} - {{ producto.descripcion }} - {{ producto.foto }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
    <b-form @submit.prevent>
      <label>Nombre:</label>
      <b-form-input
        type="text"
        placeholder="Descripción del producto"
        v-model="nombre"
      ></b-form-input>
      <b-form-text>Nombre del Producto</b-form-text>
      <label>Descripción:</label>
      <b-form-textarea
        row="3"
        max-rows="8"
        placeholder="Descripción del producto"
        v-model="descripcion"
      ></b-form-textarea>
      <b-form-text>Descripción larga del producto</b-form-text>
      <label>precio:</label>
      <b-form-textarea
        row="3"
        max-rows="8"
        placeholder="Precio del producto"
        v-model="precio"
      ></b-form-textarea>
      <b-form-text>Precio del producto</b-form-text>
      <label>Foto:</label>
      <b-form-textarea
        row="3"
        max-rows="8"
        placeholder="Foto del producto"
        v-model="foto"
      ></b-form-textarea>
      <b-form-text>Foto del producto</b-form-text>
      <br>
      <b-button @click="grabar()">Grabar</b-button> <!-- esto es un methods (metodo) -->
    </b-form>
  </div>
</template>

<script>
import { db } from "@/db.js";

export default {
  name: "Menu",
  data() {
    return {
      productos: [],
      nombre: "",
      precio: 0,
      descripcio: "",
      foto: "",
    };
  },
  methods: {
    grabar() {
      db.collection("productos").add({
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio,
        foto: this.foto,
      });
      this.nombre = "";
      this.descripcion = "";
      this.precio = 0;
      this.foto = "";
    },
  },
  firestore: {
    productos: db.collection("productos"),
  },
};
</script>