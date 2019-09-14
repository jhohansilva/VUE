<template>
  <div class="hello">
    <h1>Deezer API</h1>
    <h3>Búsqueda de música</h3>
    <div class="busqueda">
      <vs-input label-placeholder="Artista o canción" v-model="artista" />
      <vs-button color="primary" type="filled" v-on:click="filterData()">Buscar</vs-button>
    </div>
    <ul>
      <li v-for="(item,index) in items.slice(0, cantidad)" :key="index">
        <div class="img-preview" style="margin-right: 10px;">
          <img :src="item.album.cover_small" />
        </div>
        <div class="descrip">
          <b>{{ item.title }}</b>
          <br />
          <span>Artista: {{ item.artist.name }}</span>
          <br />
          <span>Duración: {{ item.duration.toString().toHHMMSS() }}</span>
          <br />
          <span>Albúm: {{ item.album.title }}</span>

          <br />
          <audio :src="item.preview" preload="none" controls></audio>
        </div>
      </li>
    </ul>
    <vs-button color="primary" type="border" v-on:click="mostrarMas()">Mostrar más...</vs-button>
  </div>
</template>

<script>
import axios from "axios";
import "../components/style.deezer.css";

export default {
  name: "consultaCanciones",
  created() {
    // Document ready
  },
  data() {
    return {
      items: [],
      artista: "",
      cantidad: 5
    };
  },
  methods: {
    filterData: function() {
      this.$vs.loading();
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
          this.$vs.loading.close();
          this.cantidad = 5;
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