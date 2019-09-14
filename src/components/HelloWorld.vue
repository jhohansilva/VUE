<template>
  <div class="hello">
    <h1>Deezer API</h1>
    <h3>Canciones por artista</h3>
    <div class="busqueda">
      <label>Artista:</label>
      <input type="text" v-model="artista" />
      <button v-on:click="filterData()">Buscar</button>
    </div>
    <ul v-loading=true>
      <li v-for="(item,index) in items.slice(0, cantidad)" :key="index">
        <div class="img-preview" style="margin-right: 10px;">
          <img :src="item.album.cover_small" />
        </div>
        <div class="descrip">
          <b>{{ item.title }}</b>
          <br />
          <span>Duración: {{ item.duration.toString().toHHMMSS() }}</span>
          <br />
          <span>Albúm: {{ item.album.title }}</span>

          <br />
          <audio :src="item.preview" preload="none" controls></audio>
        </div>
      </li>
    </ul>
    <button v-on:click="mostrarMas()">Mostrar más...</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "consultaCanciones",
  created() {
    // axios
    //   .get(
    //     `https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.artista}`,
    //     {
    //       headers: {
    //         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //         "x-rapidapi-key":
    //           "0582757109msh175aa52bbe104a7p104799jsn7e282369ac23"
    //       }
    //     }
    //   )
    //   .then(response => {
    //     this.items = response.data.data;
    //   });
  },
  data() {
    return {
      items: [],
      artista: "Eminem",
      cantidad: 5
    };
  },
  methods: {
    filterData: function() {
      axios
        .get(
          `https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.artista}`,
          {
            headers: {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key":
                "0582757109msh175aa52bbe104a7p104799jsn7e282369ac23"
            }
          }
        )
        .then(response => {
          this.items = response.data.data;
        });
    },
    mostrarMas: function() {
      this.cantidad += 5;
    }
  }
};

String.prototype.toHHMMSS = function() {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  width: 40%;
  margin: 0 auto;
}
li {
  margin: 20px 0px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0px 2px 10px #00000036;
  display: flex;
}
a {
  color: #42b983;
}

.descrip {
  text-align: left;
  font-size: 14px;
}

.descrip span {
  font-size: 12px;
}

.busqueda {
  margin: 10px auto;
}

input,
button {
  padding: 5px 12px;
  margin-left: 10px;
}
</style>
