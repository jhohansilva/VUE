<template>
  <div class="cuerpo">

    <div class="contenedor-titulo">
      <img class="logo" src="../assets/logo-apple.png">
      <a>Mac</a>
      <a>iPad</a>
      <router-link to="Catalogo">iPhone</router-link>
      <a>Watch</a>
      <router-link to="/">TV</router-link>
      <a>Music</a>
      <a>Soporte</a>
      <a>Dónde comprar</a>

    </div>
    <div class="primero">
      <h1 style="font-weight:bolder">iPhone X</h1>
      <p class="texto-1">Diseño todo pantalla. La mayor duracion de batería en un iPhone.<br> El rendimiento más rápido. Fotos con calidad de estudio
      </p>
      <a class="ref" href="https://www.apple.com/co/iphone-xr/">Más información ></a>
    </div>
    <div>
      <img class="imagen-1" src="../assets/iphonexr.png">
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cuerpo {
  display: flex;
  flex-direction: column;
  margin: 0px !important
}

.contenedor-titulo {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: rgba(45, 45, 45, 0.98);
  ;
  color: white;
}

.contenedor-titulo a {
  color: white;
  font-size: 13px;
  font-weight: 700;
  font: Verdana;
  margin: 20px
}

.logo {
  max-width: 15px;
  max-height: 15px;
  margin: 20px
}

.primero {
  margin-top: 20px
}

.texto-1 {
  text-align: center;
  font-size: 25px
}

.ref {
  color: #0070c9;
  margin-top: 30px;
  text-decoration: none;
}
</style>
