# react-challenge-01
Reto 01: Curso Práctico de React JS

## Platzi Maps

Tenemos un proyecto web, donde debemos trabajar con la API de Google de mapas, tenemos que mostrar en un Mapa las ubicaciones de las oficinas de Platzi.

![Google-maps](https://raw.githubusercontent.com/gndx/react-challenge-01/master/screenshot.png?token=ACQQY5TB2DOOKO5CD7LURB25UFNGK)

### Instalación
```
npm install
```

### Ejecución
```
npm run start
```

### Server
```
npm run server
```

### Compilar
```
npm run build
```

### Documentación
Importar React y el paquete [google-maps-react](https://www.npmjs.com/package/google-maps-react)

```javascript
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
```
Creamos un componente llamado MapContainer donde vamos a crear la lógica para crear un nuevo mapa.

```javascript
const MapContainer = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={5}
      initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
    >
      <Marker
        position={{ lat: 19.4267261, lng: -99.1718706 }}
      />
    </Map>
  );
}
```

Utilizamos GoogleApiWrapper que es un HOC (Higher-Order component) acepta un objeto que contiene el apiKey.

```javascript
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);
```

## RETO

### Primer problema
Necesitamos que nuestra aplicación tenga una sección de contacto con un mapa de Google Maps, donde puedas tener un botón que oculta o muestra el botón.

1) Convertir el componente 'MapContainer.jsx' a Clase
2) Añadir 'show' en 'false' en el estado de la aplicación
3) Agregar un botón que muestre y oculte el mapa.

### Segundo Problema

Tenemos por defecto en nuestra Mapa la Ubicación de Platzi HQ México, debemos de añadir al mapa la Ubicación de Platzi HQ Bogotá.

1) Leer la documentación de '[google-maps-react](https://www.npmjs.com/package/google-maps-react)' para implementar multiples Markers
2) Agrega Platzi HQ Bogotá: LAT: 4.6560716 LON: -74.0595918

### Tercer Problema

Ahora utiliza la API propuesta

Para ejecutar la Fake API debes de correr el siguiente comando:

```bash
npm run server
```

1) Inicia y analiza el funcionamiento de la FAKE API de 'locations'
2) Haz un llamado a la API desde el proyecto por medio de fetch
3) Por medio de 'props' pasa al componente 'MapContainer.jsx' el resultado de la consulta a la FAKE API.
4) Itera por cada una de las ubicaciones que tiene Platzi y muéstralas en el Mapa.

### Cuarto Problema (Opcional)

Ahora que tenemos nuestra aplicación Funcionando, utiliza la documentación del paquete instalado para aprender e implementar un 'InfoWindow' por cada ubicación de Platzi

1) Leer la documentación de '[google-maps-react](https://www.npmjs.com/package/google-maps-react)' para implementar 'InfoWindow'
2) Implementa un 'InfoWindow' por cada ubicación debes de utilizar la información de la FAKE API.
3) Muestra el nombre de la oficina de Platzi al dar clic en el Maker.


### Enviar solución de reto
Debes de crear un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Contribuir
Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [react-challenge-01](https://github.com/gndx/react-challenge-01/)

### Licencia
react-challenge-01 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
