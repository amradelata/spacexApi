<template>
  <div>
    <navbar />
    <div class="hero">
      <div class="content">
        <h1>
          FIRST PRIVATE SPACECRAFT TO
          <br />THE SPACE STATION
        </h1>
      </div>
    </div>

    <!-- FALCON 9 content -->
    <div class="black">
      <div class="container">
        <section class="fALCON9">
          <span class="porder">Dragon</span>
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
            src="https://www.spacex.com/sites/spacex/files/spinningdragon_web4x3_text_callouts_v04_fix_1.mp4"
            type="video/mp4"
          />
        </video>
        <section class="spaceShepInformation">
          <span class="payload font">OVERVIEW</span>
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
        </section>
      </div>
      <iframe
        width="100%"
        height="758px"
        src="https://www.youtube.com/embed/78ATfCaBn6E"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <section class="astronaut">
        <div class="content">
          <h3>THE SUIT</h3>
          <p>
            Designed in-house by SpaceX, each custom-tailored suit is meant to
            <br />provide a pressurized environment for all crew members aboard
            <br />Dragon in atypical situations such as cabin depressurization. This suit
            <br />also routes communications and cooling systems to the astronauts
            <br />aboard during regular flight. Additional features include the following:
          </p>
          <ul>
            <li>3D printed space suit helmet</li>
            <li>Touchscreen compatible gloves</li>
            <li>Flame resistant outer layer</li>
            <li>Hearing protection during ascent and reentry</li>
            <li>Single connection point between the suit and vehicle</li>
            <li>Heel sliders securing feet to footrest</li>
          </ul>
        </div>
      </section>
      <!--  -->
      <v-carousel hide-delimiters height="100vh">
        <v-carousel-item v-for="(item,i) in images" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>

      <!--  -->
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
            "https://www.spacex.com/sites/all/themes/spacex2012/images/dragon/slideshow/Dragon_Carousel_0006_3.jpg"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/dragon/slideshow/Dragon_Carousel_0007_2.jpg"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/dragon/slideshow/Dragon_Carousel_0008_1.jpg"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/dragon/slideshow/Dragon_Carousel_0001_8.jpg"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/dragon/slideshow/Dragon_Carousel_0000_9.jpg"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/dragon/slideshow/Dragon_Carousel_0002_7.jpg"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/dragon/slideshow/Dragon_Carousel_0003_6.jpg"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/dragon/slideshow/Dragon_Carousel_0004_5.jpg"
        },
        {
          src:
            "https://www.spacex.com/sites/all/themes/spacex2012/images/dragon/slideshow/Dragon_Carousel_0005_4.jpg"
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

.astronaut {
  background-image: url(https://www.spacex.com/sites/spacex/files/suit_not_compressedv2_1_0.jpg);
  position: relative;
  background-position: center center;
  background-size: cover;
  height: 100vh;
}
.astronaut .content {
  text-align: left;
  position: absolute;
  left: 400px;
}
.astronaut .content h3 {
  font-size: 25px;
  margin-bottom: 35px;
}
.astronaut .content p {
  font-family: Arial, sans-serif;
  font-weight: normal;
  line-height: 24px;
  text-transform: none;
}
.astronaut .content li {
  margin-bottom: 20px;
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

