<template>
<!-- Första lådan -->
  <div id="app">
    <div class="container" v-if="box1">
        <div class="flex">
            <div class="row">
                <div id="w-app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
                    <main>
                    <button type="button" class="btn btn-primary btn2">
                        <a @click="locatorButtonPressed()" class="btn2">Få din postition</a>
                    </button>
                    <div class="search-box">
                        <input 
                        type="text" 
                        class="form-control form-control-lg" 
                        placeholder="Helsinki, fi"
                        v-model="query"
                        @keypress="fetchWeather"
                        />
                    </div>
                    <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
                        <div class="location-box">
                        <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
                        <div class="date">{{ dateBuilder() }}</div>
                        </div>
                        <div class="location-box">
                        <div class="location">{{ Math.round(weather.main.temp) }}°c</div>
                        <div class="location">{{ weather.weather[0].main }}</div>
                        </div>
                    </div>
                    </main>
                </div>
                <div class="btn-1">
                    <div class="d-flex justify-content-around">
                        <button v-on:click="box1 = false, box2 = true" type="button" class="btn btn-primary btn-lg btn1">
                            <h1 class="click">Click here to<br>Start your<br>journey</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- Andra lådan -->

    <div class="container" v-if="box2">
        <div class="flex">
            <form class="mt-5"><br><br><br>
                <div class="form-group">
                    <label for="email"><h3>From:</h3></label>
                    <input type="input" id="from" class="form-control form-control-lg">
                    <label for="email"><h3>To:</h3></label>
                    <input type="input" id="to" class="form-control form-control-lg">
                </div>

                <button v-on:click="box2 = false, box3 = true" type="button" class="btn btn-secondary btn-lg btn-block btn1">
                    <h1>Go-&#62;</h1>
                </button>
                <button v-on:click="box2 = false, box1 = true" type="button" class="btn btn-secondary btn-lg btn-block btn2">
                    <h1>&#60;-back</h1>
                </button><br><br><br><br><br>
            </form>
        </div>
    </div>

<!-- Tredje lådan -->

    <div class="container" v-if="box3">
        <div class="flex"><br><br><br>
            <h1 class="lower1">What type of route would you like?</h1><br><br>
            <button v-on:click="box3 = false, box4 = true" type="button" class="btn btn-primary btn-lg btn-block btn1">
                <h2> Fastest </h2>
            </button><br><br>

            <button v-on:click="box3 = false, box4 = true" type="button" class="btn btn-primary btn-lg btn-block btn1">
                <h2> Most convenient </h2>
            </button><br><br>
            
            <button v-on:click="box3 = false, box2 = true" type="button" class="btn btn-secondary btn-lg btn-block btn2">
                <h1>&#60;-back</h1>
            </button><br><br><br><br>
        </div>
    </div>

<!-- Fjärde lådan -->

    <div class="container" style="margin-bottom: 3%;" v-if="box4">
        <div class="flex"><br><br>
            <h1 Class="lower1">Your route is:</h1>
            <div class="iframe">
                <iframe 
                    src="https://www.openstreetmap.org/export/embed.html?bbox=24.93942886590958%2C60.169588787253716%2C24.941247403621677%2C60.17128187292611&amp;layer=mapnik&amp;marker=60.17043534099665%2C24.940338134765625" 
                    style="border: 1px solid black; width: 100ch; height: 100ch;">
                </iframe><br>
                <button onClick="window.location.reload()" type="button" class="btn btn-secondary btn-lg btn-block btn1">
                    <h1>Finnish-&#62;</h1>
                </button>
                <button v-on:click="box4 = false, box3 = true" type="button" class="btn btn-secondary btn-lg btn-block btn2">
                    <h1>&#60;-back</h1>
                </button><br><br>
            </div>
        </div>
    </div>
</div>
</template>



<script src="app.js"></script>
<script>
export default {
  name: 'app',
  data () {
    return {
      api_key: '03fdcab4998339b7fb8504d1efd0e89f',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      box1: true,
      box2: false,
      box3: false,
      box4: false,
    }
  },
  methods: {


    locatorButtonPressed() {
     navigator.geolocation.getCurrentPosition(
     position => {
       console.log(position.coords.latitude);
       console.log(position.coords.longitude);
       var lat = position.coords.latitude.toFixed(0);
        var lon = position.coords.longitude.toFixed(0);

        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=03fdcab4998339b7fb8504d1efd0e89f')
            .then(res => {
                return res.json();
            }).then(this.setResults);
     },
     error => {
       console.log(error.message);
     },
     )   
    },
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults (results) {
      this.weather = results;
    },
    dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>