<template>
  <div class="careers">
    <navbar />
    <div class="hero">
      <v-flex xs12 sm6 offset-sm3>
        <v-card-text>
          <div class="heroImage">
            <h2>Road to the Red Planet</h2>
            <p>SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not. Today SpaceX is actively developing the technologies to make this possible, with the ultimate goal of enabling human life.</p>
          </div>
        </v-card-text>
      </v-flex>
    </div>

    <!--  -->
    <div class="jops">
      <v-flex xs12 sm6 offset-sm3>
        <v-card-text>
          <h4>FIND YOUR FUTURE</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, beatae necessitatibus? Totam facilis officia, animi minima expedita veritatis, culpa saepe obcaecati numquam incidunt a excepturi, consectetur vero atque voluptate perferendis.</p>

          <v-container>
            <v-layout row wrap>
              <v-flex xs12 lg5 mb-3>
                <v-expansion-panel popout>
                  <v-expansion-panel-content v-for="(item,i) in 4" :key="i">
                    <template v-slot:header>
                      <div>job description</div>
                    </template>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>

              <v-flex xs12 lg5 offset-lg2>
                <v-expansion-panel inset>
                  <v-expansion-panel-content v-for="(item,i) in 4" :key="i">
                    <template v-slot:header>
                      <div>job description</div>
                    </template>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-flex>
    </div>

    <div class="servse">
      <div class="cards">
        <div class="card">
          <div class="image">
            <img
              src="https://www.spacex.com/sites/all/themes/spacex2012/images/icons/engineering-icon.png"
            />
          </div>
          <div class="content">
            <h4>ENGINEERING</h4>
            <p
              class="content"
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptatum nisi illo quam velit esse, quas dolorum consequatur maxime deleniti eum doloremque aspernatur placeat laboriosam a tenetur delectus. Aliquid, maiores!</p>
          </div>
        </div>

        <div class="card">
          <div class="image">
            <img
              src="https://www.spacex.com/sites/all/themes/spacex2012/images/icons/manufacturing-icon.png"
            />
          </div>
          <div class="content">
            <h4>MANUFACTURING</h4>

            <p
              class="content"
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptatum nisi illo quam velit esse, quas dolorum consequatur maxime deleniti eum doloremque aspernatur placeat laboriosam a tenetur delectus. Aliquid, maiores!</p>
          </div>
        </div>

        <div class="card">
          <div class="image">
            <img
              src="https://www.spacex.com/sites/all/themes/spacex2012/images/icons/operations-icon.png"
            />
          </div>
          <div class="content">
            <h4>OPERATIONS</h4>
            <p
              class="content"
            >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptatum nisi illo quam velit esse, quas dolorum consequatur maxime deleniti eum doloremque aspernatur placeat laboriosam a tenetur delectus. Aliquid, maiores!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="ourPlace">
      <v-flex xs12 lg10 offset-lg2>
        <v-carousel hide-delimiters height="600">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
        <h2>WE ARE SPACEX</h2>
        <p>
          SpaceX is like Special Forces… we do the missions that others think are impossible. We have goals that are absurdly ambitious by
          <br />any reasonable standard, but we’re going to make them happen. We have the potential here at SpaceX to have an incredible
          <br />effect on the future of humanity and life itself. – Elon Musk
        </p>
      </v-flex>
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
            "https://www.spacex.com/sites/all/themes/spacex2012/images/careers-slideshow/career_images__8.jpg?0411"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/careers-slideshow/career_images__1.jpg?0411"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/careers-slideshow/career_images__2.jpg?0411"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/careers-slideshow/career_images__3.jpg?0411"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/careers-slideshow/career_images__4.jpg?0411"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/careers-slideshow/career_images__5.jpg?0411"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/careers-slideshow/career_images__6.jpg?0411"
        }
      ]
    };
  }
};
</script>




<style scoped>
.hero {
  background-image: url("https://www.spacex.com/sites/all/themes/spacex2012/images/careers/mars_transition.jpg");
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center 75px;
  background-color: #000;
}
h2 {
  line-height: 80px;
  white-space: nowrap;
  margin: 0;
  font-weight: 300;
  line-height: 1;
  margin-top: 335px;
  font-size: 50px;
  color: white;
  letter-spacing: -1px;
  text-transform: uppercase;
  text-align: center;
}
h4 {
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 16px;
  padding: 0 40px;
  color: #3a3a3a;
  text-align: center;
}
p {
  font-size: 14px;
  line-height: 24px;
  padding: 0 100px;
  margin-top: 0;
  color: #bbb;
  text-align: center;
  margin-top: 35px;
}
.jops {
  background-color: #f0f0f0;
  padding: 100px;
}
.jops p {
  color: #000;
}
.theme--light.v-expansion-panel .v-expansion-panel__container:hover {
  background: rgba(0, 0, 0, 0.87);
  color: #fff;
}
.servse {
  background: #202020;
  display: flex;
  flex-wrap: wrap;
}
.cards {
  display: flex;
  flex-wrap: wrap;
}
.card {
  flex-basis: calc(33.333% - 20px);
  display: inline-block;
  background-color: #202020;
  box-shadow: none;
  margin: 10px;
}

.card .image img {
  width: 13%;
  margin: auto;
  display: block;
}
.card h4 {
  padding: 15px;
  color: #fff;
}

.card .content {
  padding: 15px;
  color: #fff;
}

.ourPlace {
  background: #000;
}
.ourPlace h2 {
  margin-top: 35px;
}
.ourPlace p {
  padding-bottom: 35px;
}
.flex.offset-lg2 {
  margin: auto;
}
</style>
