<template>
  <div class="Home">
    <navbar />
    <v-carousel hide-controls height="600">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <h3 class="SPACEXDESIGNS">this is simple version of spacex website and i use spacex API</h3>

    <div class="cards">
      <div class="card">
        <div class="image">
          <img src="https://www.spacex.com/sites/spacex/files/home_block_reusable.jpg" />
        </div>
        <div class="content">
          <h4>REUSABILITY: WORLD’S FIRST REFLIGHT OF AN ORBITAL CLASS ROCKET</h4>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="https://www.spacex.com/sites/spacex/files/home_block_commercial_crew.jpg" />
        </div>
        <div class="content">
          <h4>REUSABILITY: WORLD’S FIRST REFLIGHT OF AN ORBITAL CLASS ROCKET</h4>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="https://www.spacex.com/sites/spacex/files/multiplanetary_thumbnail.jpg" />
        </div>
        <div class="content">
          <h4>REUSABILITY: WORLD’S FIRST REFLIGHT OF AN ORBITAL CLASS ROCKET</h4>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import navbar from "../components/navbar.vue";
export default {
  components: {
    navbar
  },
  data() {
    return {
      items: [
        {
          src: "https://www.spacex.com/sites/spacex/files/demo1_iss2_v2.jpg"
        },
        {
          src: "https://www.spacex.com/sites/spacex/files/nasa_astronauts3.jpg"
        },
        {
          src: "https://www.spacex.com/sites/spacex/files/bfrlunar_v2.jpg"
        }
      ]
    };
  }
};
</script>

<style >
.Home {
  background: #fff;
  height: 1500px;
}
.SPACEXDESIGNS {
  margin: 0;
  font-family: "Brandon Grotesque", "brandon-grotesque-n7", "brandon-grotesque",
    Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-style: normal;
  line-height: 0.8;
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 18px;
  color: #000;
  text-align: center;
}
.cards {
  display: flex;
  flex-wrap: wrap;
}
.card {
  flex-basis: calc(25% - 20px);
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 10px;
  border-radius: 4px;
  padding: 30px;
  overflow: hidden;
  margin: auto;
}
.card .image img {
  width: 100%;
}
.card .content {
  padding: 15px;
  color: #000;
}
</style>