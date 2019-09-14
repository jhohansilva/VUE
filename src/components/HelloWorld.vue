<template>
  <div class="hello">
    <h1>Deezer API</h1>
    <h3>Canciones por artista</h3>
    <ul>
      <li v-for="(item,index) in items" :key="index">
        <div class="img-preview" style="margin-right: 10px;">
          <img :src="item.artist.picture_small" />
        </div>
        <div class="descrip">
          {{ item.title }}
          <br />
          Duración: {{ item.duration }}
          <br />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "consultaCanciones",
  created() {
    axios
      .get("https://deezerdevs-deezer.p.rapidapi.com/search?q=David Guetta", {
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "0582757109msh175aa52bbe104a7p104799jsn7e282369ac23"
        }
      })
      .then(response => {
        this.items = response.data.data;
        console.log(this.items);
      });
  },
  data() {
    return {
      items: []
    };
  }
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
  width: 60%;
  margin: 0 auto;
}
li {
  margin: 20px 0px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 2px 10px #00000036;
  display: flex;
}
a {
  color: #42b983;
}
</style>
