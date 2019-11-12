<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- footer -->
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <router-link to="/">
            <img src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png" width="100" />
          </router-link>
          <a class="white--text" href="https://twitter.com/spacex">twetter</a>
          <a class="white--text" href="http://www.youtube.com/spacex">YouTube</a>
          <a class="white--text" href="http://www.flickr.com/spacexphotos">Flickr</a>
          <a class="white--text" href="http://www.instagram.com/spacex">Instagram</a>

          <v-spacer></v-spacer>
          <span class="white--text">© 2019 Space Exploration Technologies Corp.</span>
        </v-card-title>
      </v-card>
    </v-footer>
    <!-- footer -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.v-content__wrap {
  color: rgba(255, 255, 255, 0.65);
  background-color: #24292e;
  background-image: url("https://desktop.github.com/images/star-bg.svg"),
    linear-gradient(#191c20, #24292e 15%);
  background-repeat: repeat-x;
  background-position: center 0, 0 0, 0 0;
}

a {
  text-decoration: none;
  margin-right: 20px;
}

.teal {
  background-color: #0b0b0b !important;
}
.container {
  max-width: 900px;
}
</style>

