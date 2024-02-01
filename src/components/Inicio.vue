<template>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
      <p>ESTAS EN EL INICIO</p>
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