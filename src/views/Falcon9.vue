<template>
  <div class="Falcon9">
    <navbar />
    <div class="video">
      <h1>
        Falcon 9 & Dragon & to
        <br />Return Astronauts
        <br />to Space
      </h1>
      <!--  -->
      <v-layout row justify-center>
        <i class="far fa-play-circle video" @click.stop="dialogfvideo = true"></i>

        <v-dialog v-model="dialogfvideo" max-width="590">
          <v-card>
            <v-card-title class="headline">LANDING LEGS</v-card-title>

            <v-card-text>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2ZL0tbOZYhE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-layout>
      <!--  -->
    </div>

    <!-- FALCON 9 content -->
    <div class="black">
      <section class="fALCON9">
        <span class="porder">Falcon 9</span>
        <div class="fALCON9Content">
          <div class="firstRow">
            <p>
              Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. Falcon 9 is the first orbital class rocket capable of
              <a
                href="https://www.spacex.com/news/2013/03/31/reusability-key-making-human-life-multi-planetary"
              >reflight. SpaceX believes rocket</a> reusability is the key breakthrough needed to reduce the cost of access to space and enable people to live on other planets.
              <br />
              <br />Falcon 9 was designed from the ground up for maximum reliability. Falcon 9’s simple two-stage configuration minimizes the number of separation events -- and with nine first-stage engines, it can safely complete its mission even in the event of an engine shutdown.
            </p>
          </div>
          <div class="firstRow">
            <p>Falcon 9 made history in 2012 when it delivered Dragon into the correct orbit for rendezvous with the International Space Station, making SpaceX the first commercial company ever to visit the station. Since then Falcon 9 has made numerous trips to space, delivering satellites to orbit as well as delivering and returning cargo from the space station for NASA. Falcon 9, along with the Dragon spacecraft, was designed from the outset to deliver humans into space and under an agreement with NASA, SpaceX is actively working toward this goal.</p>
          </div>

          <div class="firstRow">
            <ul>
              <li>Falcon 9 Pricing</li>
              <li>Launch Manifest</li>
              <li>Falcon 9 User's Guide</li>
            </ul>
            <img
              src="https://www.spacex.com/sites/all/themes/spacex2012/images/falcon9/falcon9-render_same_size_file.png"
              class="spacesHipSmall"
            />
          </div>
        </div>
      </section>
      <section class="spaceShepInformation">
        <img
          src="https://www.spacex.com/sites/all/themes/spacex2012/images/falcon9/falcon9-render_same_size_file.png"
          class="mainspacesHip"
        />
        <!-- popup -->
        <!--  -->
        <v-layout row justify-center>
          <v-btn class="one" color="primary" dark @click.stop="dialog = true">
            <i class="fas fa-plus plus"></i>
          </v-btn>

          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="headline">Use Google's location service?</v-card-title>

              <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
            </v-card>
          </v-dialog>
        </v-layout>
        <!--  -->
        <!--  -->
        <v-layout row justify-center>
          <v-btn class="two" color="primary" dark @click.stop="dialogTow = true">
            <i class="fas fa-plus plus"></i>
          </v-btn>

          <v-dialog v-model="dialogTow" max-width="290">
            <v-card>
              <v-card-title class="headline">Use Google's location service?</v-card-title>

              <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta sapiente dolores perspiciatis quos praesentium recusandae et provident saepe optio. Atque esse, pariatur saepe culpa illum delectus. Itaque, earum quae?</v-card-text>
            </v-card>
          </v-dialog>
        </v-layout>
        <!--  -->

        <!--  -->
        <v-layout row justify-center>
          <v-btn
            class="three"
            color="primary"
            dark
            @click.stop="dialogThree = true"
          >Inside Interstage</v-btn>

          <v-dialog v-model="dialogThree" max-width="600">
            <v-card>
              <v-card-title class="headline">Use Google's location service?</v-card-title>

              <v-card-text>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/wkdReoxGHG8"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-layout>
        <!--  -->

        <!--  -->
        <v-layout row justify-center>
          <v-btn class="four" color="primary" dark @click.stop="dialogfour = true">
            <i class="fas fa-plus plus"></i>
          </v-btn>

          <v-dialog v-model="dialogfour" max-width="290">
            <v-card>
              <v-card-title class="headline">GRID FINS</v-card-title>

              <v-card-text>Falcon 9’s first stage is equipped with hypersonic grid fins which manipulate the direction of the stage’s lift during reentry.</v-card-text>
            </v-card>
          </v-dialog>
        </v-layout>
        <!--  -->
        <!--  -->
        <v-layout row justify-center>
          <v-btn class="five" color="primary" dark @click.stop="dialogfive = true">
            <i class="fas fa-plus plus"></i>
          </v-btn>

          <v-dialog v-model="dialogfive" max-width="290">
            <v-card>
              <v-card-title class="headline">FALCON 9 STRUCTURE</v-card-title>

              <v-card-text>Falcon 9’s walls are made of aluminum-lithium alloy, a material made stronger and lighter than aluminum by the addition of lithium.</v-card-text>
            </v-card>
          </v-dialog>
        </v-layout>
        <!--  -->

        <!--  -->
        <v-layout row justify-center>
          <v-btn class="six" color="primary" dark @click.stop="dialogfsix = true">
            <i class="fas fa-plus plus"></i>
          </v-btn>

          <v-dialog v-model="dialogfsix" max-width="290">
            <v-card>
              <v-card-title class="headline">LANDING LEGS</v-card-title>

              <v-card-text>Falcon 9 was designed from the beginning to be fully reusable, and carries landing legs which will land the rocket safely on Earth after takeoff.</v-card-text>
            </v-card>
          </v-dialog>
        </v-layout>
        <!--  -->

        <!--  -->
        <v-layout row justify-center>
          <v-btn class="seven" color="primary" dark @click.stop="dialogfseven = true">
            <i class="fas fa-plus plus"></i>
          </v-btn>

          <v-dialog v-model="dialogfseven" max-width="290">
            <v-card>
              <v-card-title class="headline">OCTAWEB</v-card-title>

              <v-card-text>The nine Merlin engines that power the Falcon 9 first stage are arranged in an Octaweb structure, with eight engines surrounding one center engine.</v-card-text>
            </v-card>
          </v-dialog>
        </v-layout>
        <!--  -->

        <!--  -->
        <v-layout row justify-center>
          <v-btn class="eight" color="primary" dark @click.stop="dialogfeight = true">
            <i class="fas fa-plus plus"></i>
          </v-btn>

          <v-dialog v-model="dialogfeight" max-width="290">
            <v-card>
              <v-card-title class="headline">MERLIN ENGINE</v-card-title>

              <v-card-text>The Merlin engine that powers the first stage of Falcon 9 is developed and manufactured in-house by SpaceX</v-card-text>
            </v-card>
          </v-dialog>
        </v-layout>
        <!--  -->
        <!-- popup -->
        <span class="payload font">PAYLOAD</span>
        <p>
          Falcon 9 delivers payloads to space aboard the
          <br />Dragon spacecraft or inside a composite fairing.
        </p>
        <h3 class="h3">Dragon Spacecraft</h3>
        <p class="tech-details">
          Dragon carries cargo in the spacecraft’s
          <br />pressurized capsule and unpressurized trunk,
          <br />which can also accommodate secondary payloads.
          <br />In the future, Dragon will carry astronauts in the
          <br />pressurized capsule as well.
        </p>
        <a class="link-arrow text-xsmall" href="/dragon">Learn More About Dragon</a>
        <h3 class="h3">Composite Fairing</h3>
        <p class="tech-details">
          The payload fairing is for the delivery of satellites
          <br />to destinations in low Earth orbit (LEO),
          <br />geosynchronous transfer orbit (GTO) and beyond.
        </p>
        <a
          class="link-arrow text-xsmall"
          href="/falcon-heavy#payload"
        >See Composite Fairing on Falcon Heavy</a>
        <span class="interstage font">INTERSTAGE</span>
        <p>
          The interstage is a composite structure that
          <br />connects the first and second stages and holds
          <br />the release and separation system. Falcon 9 uses
          <br />an all-pneumatic stage separation system for low-
          <br />shock, highly reliable separation that can be
          <br />tested on the ground, unlike pyrotechnic systems
          <br />used on most launch vehicles.
        </p>
        <span class="firstStage font">FIRST STAGE</span>
        <p>
          Falcon 9’s first stage incorporates nine Merlin
          <br />engines and aluminum-lithium alloy tanks
          <br />containing liquid oxygen and rocket-grade
          <br />kerosene (RP-1) propellant. After ignition, a hold
          <br />-before-release system ensures that all engines
          <br />are verified for full-thrust performance before the
          <br />rocket is released for flight. Then, with thrust
          <br />greater than five 747s at full power, the Merlin
          <br />engines launch the rocket to space. Unlike
          <br />airplanes, a rocket's thrust actually increases with
          <br />altitude; Falcon 9 generates more than 1.7 million
          <br />pounds of thrust at sea level but gets up to over
          <br />1.8 million pounds of thrust in the vacuum of
          <br />space.&nbsp;The first stage engines are gradually
          <br />throttled near the end of first-stage flight to limit
          <br />launch vehicle acceleration as the rocket’s mass
          <br />decreases with the burning of fuel.
        </p>
        <span class="stat itms">Engines</span>
        <span class="Burn itms">Burn Time</span>
        <div class="row">
          <span class="number">9</span>
          <span class="number">162sec</span>
          <div class="row itms">
            <span class="Thrust">Thrust At Sea Level</span>
          </div>
          <span class="number">7,607kN</span>
          <span class="number small">1,710,000 lbf</span>
        </div>
        <div class="row itms">
          <span class="Thrust">Thrust In Vacuum</span>
        </div>
        <span class="number">8,227kN</span>
        <span class="number small">1,849,500 lbf</span>
        <img
          src="https://www.spacex.com/sites/spacex/files/images/falcon9/falcon9-merlin-engines-solo.png"
          class="engen-img"
        />
        <section class="rightSection">
          <img src="https://www.spacex.com/sites/spacex/files/dragon-graphic3.png" class="spaceTop" />

          <img
            src="https://www.spacex.com/sites/spacex/files/images/falcon9/fairing-graphic.png"
            class="spacePus"
          />

          <div class="row">
            <span class="spanhead">FIG. 1</span>

            <span>FIG. 2</span>
          </div>

          <span class="secondstage font">SECOND STAGE</span>
          <p>
            The second stage, powered by a single Merlin
            <br />vacuum engine, delivers Falcon 9’s payload to
            <br />the desired orbit. The second stage engine ignites
            <br />a few seconds after stage separation, and can be
            <br />restarted multiple times to place multiple payloads
            <br />into different orbits. For maximum reliability, the
            <br />second stage has redundant igniter systems. Like
            <br />the first stage, the second stage is made from a
            <br />high-strength aluminum-lithium alloy.
            <br />
            <br />
            <br />
          </p>

          <span class="stat itms">Engines</span>
          <span class="Burn itms">Burn Time</span>
          <div class="row">
            <span class="number">9</span>
            <span class="number">162sec</span>
          </div>
          <span class="ninemerlin font">NINE MERLIN ENGINES</span>
          <p class="endOfSpacShep">
            The second stage, powered by a single Merlin
            <br />vacuum engine, delivers Falcon 9’s payload to
            <br />the desired orbit. The second stage engine ignites
            <br />a few seconds after stage separation, and can be
            <br />restarted multiple times to place multiple payloads
            <br />into different orbits. For maximum reliability, the
            <br />second stage has redundant igniter systems. Like
            <br />the first stage, the second stage is made from a
            <br />high-strength aluminum-lithium alloy.
          </p>
        </section>
      </section>

      <div class="table">
        <h4 style="width: 100%">TECHNICAL OVERVIEW</h4>
        <!--rocketNmber-->
        <div class="rocketNmber">
          <h5>HEIGHT</h5>
        </div>
        <div class="rocketNmber">
          <h5>MASS</h5>
        </div>
        <div class="rocketNmber">
          <h5>PAYLOAD TO LEO</h5>
        </div>
        <div class="rocketNmber">
          <h5>PAYLOAD TO MARS</h5>
        </div>
        <!--rocketNmber-->
        <!-- numbers -->
        <div class="numbers">
          <h5>70m229.6 ft</h5>
        </div>
        <div class="numbers">
          <h5>549,054kg1,207,920 lbT</h5>
        </div>
        <div class="numbers">
          <h5>22,800kg50,265 lb</h5>
        </div>
        <div class="numbers">
          <h5>4,020kg8,860lb</h5>
        </div>
        <!-- numbers -->
        <!--rocketNmber-->
        <div class="rocketNmber">
          <h5>DIAMETER</h5>
        </div>
        <div class="rocketNmber">
          <h5>STAGES</h5>
        </div>
        <div class="rocketNmber">
          <h5>PAYLOAD TO GTO</h5>
        </div>
        <div class="rocketNmber"></div>
        <!--rocketNmber-->
        <!-- numbers -->
        <div class="numbers">
          <h5>3.7m12 ft</h5>
        </div>
        <div class="numbers">
          <h5>2</h5>
        </div>
        <div class="numbers">
          <h5>8,300kg18,300 lb</h5>
        </div>
        <div class="numbers"></div>
        <!-- numbers -->
      </div>

      <!--  -->
      <section class="black LOCATIONS container">
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
      dialog: false,
      dialogTow: false,
      dialogThree: false,
      dialogfour: false,
      dialogfive: false,
      dialogfsix: false,
      dialogfseven: false,
      dialogfeight: false,
      dialogfvideo: false
    };
  }
};
</script>






<style scoped>
/* .v-content__wrap{
    color: rgba(255,255,255,0.65);
    background-color: #000;
    background-repeat: repeat-x;
    background-image: url(https://desktop.github.com/images/star-bg.svg),linear-gradient(#191c20, #000000 15%);
    background-position: center 0, 0 0, 0 0;
} */

.Falcon9 {
  /* position: relative; */
  /* height: 3000px */
}
.video {
  /* margin: auto; */
  text-align: center;
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 200px;
}

h1 {
  color: #fff;
  font-family: "Brandon Grotesque", "brandon-grotesque-n3", "brandon-grotesque",
    Helvetica, sans-serif;
  font-weight: 100;
  line-height: 1;
  font-size: 50px;
  letter-spacing: -1px;
  margin-bottom: 50px;
}
i {
  font-size: 50px;
}
a {
  text-decoration: none;
  color: #fff;
}

.fALCON9 {
  height: 500px;
  background: #000;
  color: #fff;
  margin-top: 40%;
  padding: 30px 100px 30px 300px;
  /* height: 3000px                                            ....................................................*/
}
.porder {
  font-size: 50px;
  text-transform: uppercase;
  border-bottom: 1px dashed #fff;
  padding-right: 620px;
}
.fALCON9Content {
  display: flex;
}
.firstRow {
  flex-basis: calc(30% - 20px);
  display: inline-block;
  margin: 10px;
  padding-right: 30px;
  position: relative;
}
.firstRow p {
  color: #a5a6a7;
}
.firstRow ul {
  width: 400px;
}
.firstRow li {
  list-style: none;
  background: #21272b;
  color: #a5a6a7;
  margin: 5px;
  text-align: right;
  padding: 13px 20px;
  display: block;
  border-radius: 2px;
}
.firstRow li:hover {
  background: #21272be3;
}

.spacesHipSmall {
  width: 30px;
  height: 400px;
  top: -60px;
  left: 100px;
  position: absolute;
}
/* spaceShepInformation */
.spaceShepInformation {
  margin-top: 15%;
  padding: 30px 100px 30px 200px;
  position: relative;
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
  font-size: 13px;
  font-style: normal;
  color: #7d7d7d;
  line-height: 20px;
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
  width: 62px !important;
  margin-right: 30px;
  width: 80px;
}
.Burn {
  width: 200px;
}
.row[data-v-4e8cc784] {
  margin-top: 50px;
  width: 300px;
}
.row {
  display: block;
}
.small {
  font-size: 15px !important;
  color: rgb(117, 117, 117) !important;
}
.number {
  line-height: 40px !important;
  font-size: 50px;
  font-weight: 100;
  color: #fff;
  margin-right: 30px;
}
.engen-img {
  display: block;
  margin-top: 50px;
}
/* spaceShepInformation */

/* .rightSection */
.rightSection {
  /* float: right */
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

/* popup */
.plus {
  font-size: 11px;
}
.theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  border-radius: 50%;
  min-width: 0px !important;
}
.one {
  position: absolute;
  left: 45%;
  top: 0;
}
.two {
  position: absolute;
  left: 50%;
  top: 10%;
}
.three {
  position: absolute;
  left: 43%;
  top: 25%;
  width: 150px;
  border-radius: 0% !important;
}
.four {
  position: absolute;
  left: 49%;
  top: 36%;
}
.five {
  position: absolute;
  left: 49%;
  top: 56%;
}
.six {
  position: absolute;
  left: 43%;
  top: 85%;
}
.seven {
  position: absolute;
  left: 49%;
  bottom: 2%;
}
.eight {
  position: absolute;
  left: 43%;
  bottom: 1%;
}

/* popup */
/* table */

.table {
  background: #0b0b0b;
  margin: 200px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
}
.rocketNmber {
  flex-basis: calc(25% - 20px);
  display: inline-block;
  margin: 10px;
  margin-top: 35px;
  padding-top: 30px;
  margin: auto;
  border-bottom: 1px solid #fff;
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

