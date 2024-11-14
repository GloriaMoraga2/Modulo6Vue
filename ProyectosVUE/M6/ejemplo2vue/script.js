const app = new Vue({
  el: "#app",
  data() {
    return {
      nombre: "Pedro",
      apellidos: "El escamoso",
      direccion: "El canelo 845",
      telefono: "123456789",
      correo: "pedro@micorreo.cl",
      foto: "https://st.depositphotos.com/1158845/3239/i/450/depositphotos_32391649-stock-photo-businessman-outdoor-in-the-city.jpg",
      educacion: [
        {
          institucion: "Colegio San Fernando",
          anio: "1999-2006",
          descripcion:
            "Lorem ipsum dolor sit amet, quo ei simul congue exerci...",
        },
        {
          institucion: "Colegio San Pedro Nolasco",
          anio: "2007-2011",
          descripcion:
            "Lorem ipsum dolor sit amet, quo ei simul congue exerci...",
        },
        {
          institucion: "Universidad de Deustro",
          anio: "2012-2013",
          descripcion:
            "Lorem ipsum dolor sit amet, quo ei simul congue exerci...",
        },
        {
          institucion: "Universidad Federico Santa María",
          anio: "2014-2018",
          descripcion:
            "Lorem ipsum dolor sit amet, quo ei simul congue exerci...",
        },
      ],
    };
  },
});
