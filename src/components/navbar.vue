<template>
  <div class="ghjasd">
    <nav>
      <v-toolbar dark app id="nav">
        <router-link to="/">
          <img src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png" />
        </router-link>

        <ul id="nav-primary">
          <li>
            <router-link to="/Falcon9">Falcon 9</router-link>
          </li>
          <li>
            <router-link to="/FalconHeavy">Falcon Heavy</router-link>
          </li>
          <li>
            <router-link to="/Dragon">Dragon</router-link>
          </li>
          <li>
            <router-link to="/Starship">Starship</router-link>
          </li>
        </ul>

        <ul id="nav-secondary">
          <li>
            <router-link to="/api">API Data</router-link>
          </li>
          <li>
            <router-link to="/AboutSpaceX">About SpaceX</router-link>
          </li>
          <li>
            <router-link to="/Careers">Careers</router-link>
          </li>
        </ul>
      </v-toolbar>
    </nav>
  </div>
</template>








<script>
export default {
  data() {
    return {};
  }
};
</script>

<style >
nav {
  background: #000 !important;
}
.v-toolbar {
  padding: 0 200px !important;
}
#nav-primary {
  position: absolute;
  left: 370px;
}
#nav-primary li {
  display: inline;
}
#nav-primary a {
  text-decoration: none;
  color: #fff;
  transition: 0.1s;
  margin: 15px 30px 3px 15px;
}
#nav-primary a:hover {
  border-bottom: 1px solid #8b939b;
}
#nav-secondary {
  position: absolute;
  right: 200px;
}
#nav-secondary li {
  list-style-type: none;
  display: inline;
}
#nav-secondary a {
  text-decoration: none;
  color: #fff;
  transition: 0.1s;
}
#nav-secondary a:hover {
  border-bottom: 1px solid #8b939b;
}
</style>