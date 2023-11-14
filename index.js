function agregar(contacto) {
    for (let i = 0; i < contacto.length; i++) {
      contacto.push([i]);
    }
    console.log(
      "Agregando contactos nuevo: " + "\n*****************************"
    );
  }
  function eliminar(){
    contacto.push(contacto);
  }
  function mostrar() {
    for (let i = 0; i < contacto.length; i++) {
      console.log(contacto[i].datosCompletos);
    }
  }
   console.log(
    "Lista de contactos" +
      "\n*****************************"
  );
  let contacto = [
    {
      id: 1,
      nombre: "Steven",
      apellido: "Martinez",
      telefono: 95632240,
      ubicaciones: {
        ciudad: "Tegucigalpa",
        direccion: "Col la era",
      },
      get datosCompletos() {
        return (
          "Contacto N°: " +
          this.id +
          "\nNombre: " +
          this.nombre +
          "\nApellido: " +
          this.apellido +
          "\nTelefono: " +
          this.telefono +
          "\nCiudad: " +
          this.ubicaciones.ciudad +
          "\nDireccion: " +
          this.ubicaciones.direccion +
          "\n*****************************"
        );
      },  
    },
  
    {
      id: 2,
      nombre: "cristiano",
      apellido: "ronaldo",
      telefono: 7777777,
      ubicaciones: {
        ciudad: "funchal",
        direccion: "ahi en algun lugar de portugal",
      },
      get datosCompletos() {
        return (
          "Contacto N°: " +
          this.id +
          "\nNombre: " +
          this.nombre +
          "\nApellido: " +
          this.apellido +
          "\nTelefono: " +
          this.telefono +
          "\nCiudad: " +
          this.ubicaciones.ciudad +
          "\nDireccion: " +
          this.ubicaciones.direccion +
          "\n*****************************"
        );
      },
    },
  ];
  
  mostrar();
  
  agregar(
    (contacto[2] = {
      id: 3,
      nombre: "leonel",
      apellido: "messi",
      telefono: 1010101010,
      ubicaciones: {
        ciudad: "Rosario",
        direccion: "por argentina",
      },
      get datosCompletos() {
        return (
          "Contacto N°: " +
          this.id +
          "\nNombre: " +
          this.nombre +
          "\nApellido: " +
          this.apellido +
          "\nTelefono: " +
          this.telefono +
          "\nCiudad: " +
          this.ubicaciones.ciudad +
          "\nDireccion: " +
          this.ubicaciones.direccion +
          "\n*****************************"
        );
      },
    })
  );
  
  mostrar();
  eliminar(2);
  mostrar();