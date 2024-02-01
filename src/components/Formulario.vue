<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Marca:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.brand"
          pattern="[A-Za-z0-9]+"
          placeholder="NISSAN"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Modelo:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.model"
          pattern="[A-Za-z0-9]+"
          placeholder="2023"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Año de fabricacion:"
        label-for="input-6"
      >
        <b-form-input
          id="input-3"
          v-model="form.fecha"
          type="date"
          placeholder=""
          required
        ></b-form-input>
        <div
          v-if="formErrors.fecha"
          class="text-danger"
          :style="{ 'font-weight': 'bold', 'font-style': 'italic' }"
        >
          {{ formErrors.fecha }}
        </div>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Numero de Serie:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.number"
          pattern="[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}"
          placeholder="XXXX000-00XX"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" style="margin-top: 10px" variant="primary"
        >Submit</b-button
      >
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </b-form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "#",
          to: "Inicio",
        },
        {
          text: "Formulario",
          href: "#",
          to: "Formulario",
        },
        {
          text: "Paginación",
          href: "#",
          to: "Paginacion",
        },
        {
          text: "",
          href: "",
          to: "",
        },
      ],
      form: {},
      show: true,
      formErrors: {},
    };
  },
  methods: {
    onSubmit(event) {
      this.formErrors = {};
      const fechaActual = new Date();
      const fechaNac = new Date(this.form.fecha);

      if (fechaNac.getFullYear() >= fechaActual.getFullYear()) {
        this.formErrors.fecha = "FECHA NO PERMITIDA";
      }
      if (Object.keys(this.formErrors).length > 0) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      alert("FORMULARIO ENVIADO CORRECTAMENTE");
      

      var url = "http://localhost:8080/api/vehiculos";
      var data = this.form ;

      console.log(data)

      fetch(url, {
        method: "POST", 
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
    },
  },
};
</script>
  
<style></style>