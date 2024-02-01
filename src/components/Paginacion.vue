<template>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
      <b-table
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    ></b-table>

    <div>
      Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sortBy: 'age',
        sortDesc: false,
        fields: [
          { key: 'MARCA', sortable: true },
          { key: 'MODELO', sortable: true },
          { key: 'AÑO', sortable: true },
          { key: 'NUMERO DE SERIE', sortable: true }
        ],
        items: [
          
        ],
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
            text:"Paginación",
            href: "#",
            to: "Paginacion"
          },
          {
            text:"",
            href: "",
            to: ""
          }
        ],
      };
    },
  };
  </script>
  
  <style>
  </style>