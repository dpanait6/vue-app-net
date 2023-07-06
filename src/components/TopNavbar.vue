<template>
  <div class="nav-bar-fixed">
    <nav class="row navbar ">
      <div class="col-xs-6">
        <div class="hamburger-wrap">
          <button class="hamburger" type="button" @click="menuOpen = !menuOpen">
            <span class="hamburger__line"></span>
            <span class="hamburger__middle"></span>
            <span class="icon-bar hamburger__line"></span>          
          </button>
        </div>
      </div>
      <!--<div class="col-xs-6">
        <div class="logo">
          <span class="logo1">Temp</span>
          <span class="logo2">Logo</span>
        </div>
      </div>-->
    </nav>
    <div class="row dropdown" :class="{ 'dropdown-after' : menuOpen }">
      <ul class="navlist">
        <li class="navlistitem">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navlistitem">
          <router-link to="/cart/">Cart</router-link>
        </li>
        <li class="navlistitem">
          <router-link to="/sign-in/">Sign In</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  mounted() {
  },
  
  data() {
    return {
      menuOpen: false
    };
  },
}
</script>
<style>
.navbar {
  height: 50px;
  background-color: Lightgrey;
  /*display: flex;*/
  border-radius: 0px;
  
}

.logo1 {
  color: red;
}

.logo2 {
  color: grey;
}

.logo,
.hamburger-wrap {
  width: 100px;
  height: 100%;
  /*margin-left: 50px;*/
  margin-right: 50px;
  /*display: flex;
  align-items: center;*/
}

.hamburger-wrap {
  /*float: right;*/
  /*justify-content: flex-end;*/
  margin-top: -6px;
}

.hamburger {
  /*width: 45px;*/
  height: 45px;
  background-color: black;
  border-radius: 4px;
}

.hamburger:focus {
  outline: none;
}

.hamburger__line,
.hamburger__middle {
  display: block;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: #FFFFFF;
  /*margin-top: 7px;*/
  margin-bottom: 7px;
}

.hamburger__middle {
  width: 20px;
  margin-left: 10px;
}

.dropdown {
  margin-top: -20px;
  height: 0px;
  background-color: lightgreen;
  /*transition: height 0.2s ease;*/
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.dropdown-after {
  height: calc(100vh - 50px);
  transition: height 0.2s ease;
  width: calc(200px);
}

.navlist {
  list-style: none;
}

.navlistitem {
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}

.navlistitem a {
  color: #FFFFFF;
}
.nav-bar-fixed{
  position: fixed;
  top: 0px;
  width: 100%;
}
</style>