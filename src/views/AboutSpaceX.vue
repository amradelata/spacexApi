<template>
  <div class="AboutSpaceX">
    <navbar />
    <div class="hero">
      <h2>
        SpaceX designs, manufactures and launches advanced rockets and spacecraft.
        <br />The company was founded in 2002 to revolutionize space technology, with the
        <br />ultimate goal of enabling people to live on other planets.
      </h2>
    </div>
    <div class="quick-facts">
      <!-- <h3>Quick Facts about SpaceX:</h3> -->
      <table>
        <tbody>
          <tr>
            <th>Founded</th>
            <th>Vehicles</th>
            <th>Vehicles</th>
            <th>Launches Contracted</th>
            <th>Employees</th>
            <th>Employees</th>
          </tr>
          <tr>
            <td>2002</td>
            <td>3</td>
            <td>100+</td>
            <td>100+</td>
            <td>6,000+</td>
            <td>6,000+</td>
          </tr>
        </tbody>
      </table>
    </div>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card-text>
          <div class="cards">
            <div class="card">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/A0FZIwabctw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="card">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Ndpxuf-uJHE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </v-card-text>
      </v-flex>
    </v-layout>

    <div class="gray">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card-text>
            <h4>MAKING HISTORY</h4>
            <p>SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low Earth orbit, which it first accomplished in 2010. The company made history again in 2012 when its Dragon spacecraft became the first commercial cargo to and from the International Space Station.</p>
            <br />
            <p>
              SpaceX successfully achieved the historic first reflight of an orbital class rocket in 2017, and the company now regularly launches flight-proven rockets. In 2018,
              <br />SpaceX began launching Falcon Heavy, the world’s most powerful operational rocket by a factor of two.
            </p>

            <v-carousel hide-delimiters>
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>

            <h4 class="h4">ADVANCING THE FUTURE</h4>

            <p>As one of the world’s fastest growing providers of launch services, SpaceX has secured over 100 missions to its manifest, representing over $12 billion on contract. These include commercial satellite launches as well as US government missions. SpaceX’s Dragon spacecraft is flying numerous cargo resupply missions to the space station under a series of Commercial Resupply Services contracts. Dragon was designed from the outset to carry humans to space and will soon fly astronauts under NASA’s Commercial Crew Program.</p>
            <br />
            <p>Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, capable of carrying humans to Mars and other destinations in the solar system</p>
          </v-card-text>
        </v-flex>
      </v-layout>
    </div>
    <div class="map">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card-text>
            <div class="mapImg"></div>
          </v-card-text>
        </v-flex>
      </v-layout>
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
          src:
            "https://www.spacex.com/sites/spacex/files/styles/featured_news_widget_image/public/field/image/crs6_landing_990.jpg?itok=h08Qef1D"
        },
        {
          src:
            "https://www.spacex.com/sites/spacex/files/styles/featured_news_widget_image/public/field/image/dm1_docking_01.jpg?itok=d29E7C8n"
        },
        {
          src:
            "https://www.spacex.com/sites/spacex/files/styles/featured_news_widget_image/public/field/image/dragonapproachingiss.jpg?itok=DA0Lg-jz"
        },
        {
          src:
            "https://www.spacex.com/sites/spacex/files/styles/featured_news_widget_image/public/field/image/fh_hangar_02.jpg?itok=Lvlf9ZRp"
        }
      ]
    };
  }
};
</script>





<style scoped>
.AboutSpaceX {
  background-color: #fff;
}

.hero {
  background-image: url("https://www.spacex.com/sites/spacex/files/spacex_about_company_01_0.jpg");
  background-size: cover;
  background-position: center center;
  height: 50vh;
}

h2 {
  display: block;
  text-align: center;
  line-height: 1.3em;
  padding-top: 140px;
  color: #fff;
  font-size: 32px;
  text-transform: none;
  font-weight: 100;
}

.quick-facts {
  background-color: #181c1f;
  margin: auto;
  width: 1000px;
  height: 80px;
  padding: 0 30px;
}

table {
  display: inline-block;
}
th {
  padding-right: 100px;
  text-align: center;
}
.card {
  flex-basis: calc(50% - 20px);
  display: inline-block;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 10px;
}

v-carousel {
  margin-bottom: 50px;
}
.gray {
  padding-top: 30px;
  padding-bottom: 40px;
  background-color: #e0e0e0;
  color: #3a3a3a;
}
h4 {
  font-size: 25px;
  line-height: 1.2em;
}

.h4 {
  font-size: 25px;
  line-height: 1.2em;
  margin-top: 50px;
}
.mapImg {
  background-image: url("https://www.spacex.com/sites/all/themes/spacex2012/images/spacex/spacex_company_map.png?20180620");
  background-size: cover;
  background-position: center center;
  /* width: 990px; */
  /* height: 965px; */
  height: 100vh;
}
</style>
