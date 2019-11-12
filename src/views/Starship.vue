<template>
  <div>
    <navbar />
    <div class="hero">
      <div class="content">
        <h1>
          SERVICE TO EARTH ORBIT, THE
          MOON, MARS AND BEYOND
        </h1>
      </div>
    </div>

    <!-- FALCON 9 content -->
    <div class="black">
      <div class="container">
        <section class="fALCON9">
          <span class="porder">Starship</span>
          <div class="fALCON9Content">
            <div class="firstRow">
              <p
                class="tech-details"
              >SpaceX's Starship spacecraft and Super Heavy rocket (collectively referred to as Starship) represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship will be the world's most powerful launch vehicle</p>
            </div>
            <div class="firstRow">
              <p>ever developed, with the ability to carry in excess of 100 metric tonnes to Earth orbit. Drawing on an extensive history of launch vehicle and engine development programs, SpaceX has been rapidly iterating on the design of Starship with orbital-flight targeted for 2020.</p>
            </div>
          </div>
        </section>
        <video loop muted autoplay playsinline>
          <source
            src="https://www.spacex.com/sites/spacex/files/01_starshipspinvertwide_2mbs_1.mp4"
            type="video/mp4"
          />
        </video>
        <section class="spaceShepInformation">
          <span class="payload font">STARSHIP</span>
          <p class="tech-details">
            Starship is the fully reusable second stage and has an integrated
            <br />payload section. Starship serves as a large, long-duration spacecraft
            <br />capable of carrying passengers or cargo to Earth orbit, planetary
            <br />destinations, and between destinations on Earth.
          </p>
          <span class="stat itms">DIAMETER</span>
          <span class="Burn itms">HEIGHT</span>
          <div class="row">
            <span class="number">
              9m
              <span class="number small">/30 ft</span>
            </span>
            <span class="number">
              50 m
              <span class="number small">/160 ft</span>
            </span>
          </div>
          <!--  -->
          <span class="stat itms">PROPELLANT CAPACITY</span>
          <span class="Burn itms">PAYLOAD CAPACITY</span>
          <div class="row">
            <span class="number">
              1200 t
              <span class="number small">/2.4 Mlb</span>
            </span>
            <span class="number margin">
              100+ t
              <span class="number small">/220+ klb</span>
            </span>
          </div>
          <span class="payload font">SUPER HEAVY</span>
          <p class="tech-details">
            The first stage, or booster, of our next-generation launch vehicle has a
            <br />gross liftoff mass of over 3 million kg and uses sub-cooled liquid>
            <br />methane and liquid oxygen (CH4/LOX) propellants. The booster will
            <br />return to land at the launch site on its 6 legs.
          </p>

          <span class="stat itms">DIAMETER</span>
          <span class="Burn itms">HEIGHT</span>
          <div class="row">
            <span class="number">
              9m
              <span class="number small">/30 ft</span>
            </span>
            <span class="number">
              68 m
              <span class="number small">/160 ft</span>
            </span>
          </div>
          <!--  -->
          <span class="stat itms">PROPELLANT CAPACITY</span>
          <span class="Burn itms">PAYLOAD CAPACITY</span>
          <div class="row">
            <span class="number">
              3300 t
              <span class="number small">/6.6 Mlb</span>
            </span>
            <span class="number margin">
              72 MN
              <span class="number small">/16 Mlbf</span>
            </span>
          </div>
        </section>
      </div>
      <iframe
        width="100%"
        height="1000px"
        src="https://www.youtube.com/embed/wzFQJUzoUvM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <v-tabs v-model="tab" background-color="white" color="white" grow>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat color="white">
            <v-card-text>
              <div class="shafllLink1">
                <p class="shafllContent1 tech-details">
                  <span class="stat block">DIAMETER</span>
                  The Starship payload fairing is 9 m in diameter and ~19 m high,
                  <br />resulting in the largest usable payload volume of any current or in
                  <br />development launcher. This payload volume can be configured for both
                  <br />crew and cargo.
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat color="white">
            <v-card-text>
              <div class="shafllLink2">
                <p class="shafllContent2 tech-details">
                  <span class="stat block">DIAMETER</span>
                  The Starship payload fairing is 9 m in diameter and ~19 m high,
                  <br />resulting in the largest usable payload volume of any current or in
                  <br />development launcher. This payload volume can be configured for both
                  <br />crew and cargo.
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat color="white">
            <v-card-text>
              <div class="shafllLink3">
                <p class="shafllContent2 tech-details">
                  <span class="stat block">DIAMETER</span>
                  The Starship payload fairing is 9 m in diameter and ~19 m high,
                  <br />resulting in the largest usable payload volume of any current or in
                  <br />development launcher. This payload volume can be configured for both
                  <br />crew and cargo.
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat color="white">
            <v-card-text>
              <div class="shafllLink4">
                <p class="shafllContent2 tech-details">
                  <span class="stat block">DIAMETER</span>
                  The Starship payload fairing is 9 m in diameter and ~19 m high,
                  <br />resulting in the largest usable payload volume of any current or in
                  <br />development launcher. This payload volume can be configured for both
                  <br />crew and cargo.
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat color="white">
            <v-card-text>
              <div class="shafllLink5">
                <p class="shafllContent2 tech-details">
                  <span class="stat block">DIAMETER</span>
                  The Starship payload fairing is 9 m in diameter and ~19 m high,
                  <br />resulting in the largest usable payload volume of any current or in
                  <br />development launcher. This payload volume can be configured for both
                  <br />crew and cargo.
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <!--  -->
      <section class="RAPTOR">
        <h2 style="color: #fff; margin-bottom:35px">RAPTOR ENGINE</h2>
        <p style="color: #fff;">
          Raptor is a full-flow, staged combustion rocket engine powered by
          <br />cryogenic methane and liquid oxygen (LOX), rather than the RP-1
          <br />kerosene and LOX used in SpaceX’s prior Merlin engine family. The
          <br />Super Heavy booster is powered by 37 Raptors, while Starship is
          <br />powered by 6.
        </p>

        <span class="stat itms">DIAMETER</span>
        <span class="Burn itms">HEIGHT</span>
        <div class="row">
          <span class="number">
            1.3m
            <span class="number small">/4ft</span>
          </span>
          <span class="number margin">
            3.1
            <span class="number small">/16 Mlbf</span>
          </span>
        </div>
        <!--  -->
        <span class="stat itms">THRUST</span>
        <div class="row">
          <span class="number">
            2 MN
            <span class="number small">/440 klbf</span>
          </span>
        </div>
      </section>
      <section class="black LOCATIONS">
        <h2 style="color: #fff; margin-bottom:35px">LOCATIONS</h2>
        <div class="cards">
          <div class="card">
            <div class="image">
              <img src="https://www.spacex.com/sites/spacex/files/locations_0000_mcgreggor.jpg" />
            </div>
            <div class="contentCard">
              <span>TEST FACILITY</span>
              <h2>MCGREGOR, TX</h2>
              <p>
                SpaceX’s rocket and spacecraft test site. In
                McGregor, SpaceX is testing its powerful new
                engine, Raptor, and other components that
                will power and enable the development of
                Starship and Super Heavy.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="https://www.spacex.com/sites/spacex/files/locations_0001_texas.jpg" />
            </div>
            <div class="contentCard">
              <span>BUILD/LAUNCH FACILITY</span>
              <h2>CAMERON COUNTY, TX</h2>
              <p>SpaceX’s build and launch site for its Starship test articles and spacecraft. Simultaneous operations for Starship are underway concurrently at this site and in Florida.</p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="https://www.spacex.com/sites/spacex/files/locations_0002_florida.jpg" />
            </div>
            <div class="contentCard">
              <span>BUILD/LAUNCH FACILITY</span>
              <h2>SPACE COAST, FLORIDA</h2>
              <p>SpaceX’s build and launch site for its Starship test articles and spacecraft. Simultaneous operations for Starship are underway concurrently at this site and in South Texas.</p>
            </div>
          </div>
        </div>
      </section>
      <v-carousel hide-delimiters height="100vh">
        <v-carousel-item v-for="(item,i) in images" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
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
      tab: null,
      items: [
        "OVERVIEW",
        "SATELLITES",
        "SPACE STATION MISSIONS",
        "MOON MISSIONS",
        "INTERPLANETARY TRANSPORT"
      ],
      images: [
        {
          src:
            "https://www.spacex.com/sites/spacex/files/starship_mk1_night_v2.jpg"
        },
        {
          src:
            "https://www.spacex.com/sites/spacex/files/starship_image_0008_9.jpg"
        },
        {
          src: "https://www.spacex.com/sites/spacex/files/raptorfiring2.png"
        },
        {
          src:
            "https://www.spacex.com/sites/spacex/files/starship_image_0006_7_new.jpg"
        },
        {
          src:
            "https://www.spacex.com/sites/spacex/files/starship_image_0007_8_new.jpg"
        }
      ]
    };
  }
};
</script>






<style scoped>
.block {
  display: block;
}
.v-card-text,
.v-tab-item,
.v-card__text {
  padding: 0 !important;
  margin: 0 !important;
}
.shafllLink1,
.shafllLink2,
.shafllLink3,
.shafllLink4,
.shafllLink5 {
  position: relative;
  background-position: center center;
  background-size: cover;
  height: 650px;
}
.shafllLink1 {
  background-image: url("https://www.spacex.com/sites/spacex/files/starship_uses.jpg");
}
.shafllLink2 {
  background-image: url("https://www.spacex.com/sites/spacex/files/capabilities_satellite.gif");
}
.shafllLink3 {
  background-image: url("https://www.spacex.com/sites/spacex/files/capabilities_iss.gif");
}
.shafllLink4 {
  background-image: url("https://www.spacex.com/sites/spacex/files/capabilities_moon.gif");
}
.shafllLink5 {
  background-image: url("https://www.spacex.com/sites/spacex/files/capabilities_interplanetary.gif");
}
.shafllContent1 {
  float: right;
  padding: 200px !important;
}
.shafllContent2 {
  float: left;
  padding: 200px !important;
}

.RAPTOR {
  background-image: url("https://www.spacex.com/sites/spacex/files/raptor_0.jpg");
  background-position: center center;
  background-size: cover;
  height: 650px;
  padding: 200px;
}
video {
  width: 1123px;
}
.hero {
  position: relative;
  height: 60vh;
}
.LOCATIONS {
  padding: 200px;
}
.content {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  color: #fff;
  font-family: "Brandon Grotesque", "brandon-grotesque-n3", "brandon-grotesque",
    Helvetica, sans-serif;
  font-weight: 100;
  /* line-height: 1; */
  font-size: 50px;
  letter-spacing: -1px;
}
i {
  font-size: 50px;
}
a {
  text-decoration: none;
  color: #fff;
}
.porder {
  font-size: 50px;
  text-transform: uppercase;
  border-bottom: 1px dashed #fff;
  padding-right: 620px;
}
.fALCON9Content {
  display: flex;
  color: #fff;
}

.spacesHipSmall {
  width: 30px;
  height: 400px;
  top: -60px;
  left: 100px;
  position: absolute;
}

.mainspacesHip {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 43%;
  width: 150px;
  height: 100%;
  padding-bottom: 50px;
}

.font {
  font-size: 30px;
  margin-bottom: 30px;
  color: #fff;
  display: block;
}
.interstage {
  margin-top: 50px;
}
.firstStage {
  margin-top: 100px;
}
.tech-details {
  font-size: 15px;
  /* font-style: normal; */
  color: #fff;
  line-height: 25px;
  margin: 20px 0 40px 0;
  padding-right: 15px;
}
.link-arrow {
  color: #3569a4;
}
.link-arrow:hover {
  text-decoration: underline;
}
.itms {
  display: inline-block;
  text-transform: uppercase;
  font-size: 15px;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: #fff;
}

.stat {
  /* width: 62px !important; */
  margin-right: 50px;
  width: 100px;
  color: #fff;
  margin-bottom: 35px;
}
.Burn {
  width: 200px;
}

.row {
  display: block;
}
.small {
  font-size: 15px !important;
  color: #888 !important;
}
.number {
  line-height: 40px !important;
  font-size: 25px;
  font-weight: 100;
  width: 100px;
  color: #fff;
  margin-right: 30px;
}
.engen-img {
  display: block;
  margin-top: 50px;
}
.spaceShepInformation {
  position: absolute;
  top: 100vh;
}
.rightSection {
  position: absolute;
  top: 0;
  right: 200px;
}
.spaceTop {
  width: 120px;
}
.spacePus {
  margin-left: 100px;
}
.spanhead {
  color: #fff;
  margin-right: 200px;
}

.secondstage {
  margin-top: 50px;
}
.ninemerlin {
  position: absolute;
  bottom: 190px;
}
.endOfSpacShep {
  margin-top: 900px;
}
.numbers {
  flex-basis: calc(25% - 20px);
  display: inline-block;
  margin: 10px;
  /* margin:auto; */
}
.cards {
  display: flex;
  flex-wrap: wrap;
}
.card {
  flex-basis: calc(33.3333% - 20px);
  display: inline-block;
  background-color: #000;
  margin: 0;
  padding: 0;
  margin: auto;
}
.card .image img {
  width: 100%;
}
.card .contentCard {
  padding: 15px 0;
  color: #fff;
}
.card .contentCard span {
  margin-bottom: 5px;
  color: #8b939b;
  text-transform: uppercase;
}
.card .contentCard h2 {
  margin-bottom: 10px;
}
</style>

