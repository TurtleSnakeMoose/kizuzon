<template>
  <div id="app">
      <font-awesome-icon :icon="['fas', 'globe-americas']" v-on:click="switch_locale" />
      <font-awesome-icon :icon="['fas', 'info-circle']" v-on:click="show_appInfoModal" />
      <router-view/>
  </div>
</template>

<script>

  export default {
    methods:{
      // switch language.
      switch_locale: function () { this.$i18n.locale = this.locales.filter(l => l !== this.$i18n.locale.toString()); },
      // show info modal window.
      show_appInfoModal: function (){ alert('blyat') }
    },
    data(){
      return {
        // get locales (languages) from the .env file.
        locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
      }
    }
  }
</script>

<style>

body{
  height: 100%;
  background: #666A86;
  font-family: Ubuntu,Rubik;
  font-size: 1.5em;
}


#app {
  background: #788AA3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  -webkit-box-shadow: 18px 22px 20px 1px rgba(120,109,120,1);
  -moz-box-shadow: 18px 22px 20px 1px rgba(120,109,120,1);
  box-shadow: 18px 22px 20px 1px rgb(74, 77, 94);
}

.app_header{
  background: #B2C9AB;
  color: #474b60;
  border-radius: 5px;
}

.app_body{
  border-radius: 5px;
}

.app_footer{
  background: #B2C9AB;
  border-radius: 5px;
}

.svg-inline--fa{
  cursor: pointer;
}

svg > path {
  fill: white;
}

@media only screen and (min-width: 992px){

  #app {
    height: 95vh;
    width: 500px;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px;
    text-align: center;
    position: relative;
  }

  .app_container{
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
  }

  .app_header{
    height: 20vh;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .app_body{
    margin: 10px 0;
  }

  .app_footer{
    width: 100%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    position: absolute;
  }

  .fa-globe-americas{
    position: absolute;
    left: -50px;
  }

  .fa-info-circle{
    position: absolute;
    left: -80px;
  }
    
}

@media only screen and (max-width: 992px){

  #app {
    height: 92vh;
    width: 384px;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 36px;
    padding: 10px;
    text-align: center;
    position: relative;
  }

  .app_container{
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
  }

  .app_header{
    height: 20vh;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .app_body{
    margin: 10px 0;
  }

  .app_footer{
    width: 100%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    position: absolute;
  }

  .fa-globe-americas{
    position: absolute;
    left: 38px;
    top: -30px;
  }

  .fa-info-circle{
    position: absolute;
    left: 3px;
    top: -30px;
  }
    
}

</style>
