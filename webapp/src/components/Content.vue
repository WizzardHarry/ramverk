<template>

<!-- Första lådan -->
  <div id="app">
    <div class="container" v-show="box1">
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

    <div class="container" v-show="box2">
        <div class="flex">
            <form class="mt-5"><br><br><br>
                <div class="form-group">
                    <label for="email"><h3>From:</h3></label>
                    <!-- <input id="address" type="text"> -->
                    <input type="input" v-model="from" id="address" class="form-control form-control-lg">
                    <label for="email"><h3>To:</h3></label>
                    <input type="input" v-model="to" id="to" class="form-control form-control-lg">
                </div>

                <button v-on:click="box2 = false, box3 = true" type="button" class="btn btn-primary btn-lg btn-block btn1">
                    <h1>Go-&#62;</h1>
                </button>
                <button v-on:click="box2 = false, box1 = true" type="button" class="btn btn-secondary btn-lg btn-block btn2">  
                    <h1>&#60;-back</h1>
                </button><br><br><br><br><br>
            </form>
        </div>
    </div>

<!-- Tredje lådan -->

    <div class="container" v-show="box3">
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

    <div class="container" style="margin-bottom: 3%;" v-show="box4">
        <div class="flex"><br><br>
            <h1 Class="lower1">Your route is:</h1>
            <!-- <div class="iframe"> -->
            <!-- <b>Address:</b> -->
            <div id="map" style="height:300px; width:700px; margin-top: 10px;"></div>
               <!-- <iframe 
                    src="https://www.openstreetmap.org/export/embed.html?bbox=24.93942886590958%2C60.169588787253716%2C24.941247403621677%2C60.17128187292611&amp;layer=mapnik&amp;marker=60.17043534099665%2C24.940338134765625" 
                    style="border: 1px solid black; width: 100ch; height: 100ch;">
                </iframe><br>-->
                <button v-on:click="box4 = false, box5 = true" type="button" class="btn btn-primary btn-lg btn-block btn1">
                    <h1>Next-&#62;</h1>
                </button>
                <button v-on:click="box4 = false, box3 = true" type="button" class="btn btn-secondary btn-lg btn-block btn2">
                    <h1>&#60;-back</h1>
                </button><br><br>
            <!-- </div> -->
        </div>
    </div>

    
     <div class="container" v-if="box5">
            <div class="flex"> 
                <div class="row"><br>
                    <div class="text">
                        <h1>
                            Customer statisfaction query
                        </h1>
                    

                    <div class="andraRubrik">
                            <h3>We would like you to participate in our short customer statisfaction query.
                            It should only take a minute or so to complete 
                            and by participating you can win one year of free travels with our services</h3>
                    </div>

                    <br>
                    <!--<form action="mailto:throwawayforschool39gmail.com" method="GET">--><!-- losn: vuejs123!  --> <!-- ka ju ta bort action o method så behöver de int påriktigt skicka mail? Jan--> 
                    <form>
                    <h5>Occupation:</h5>                                                <!--o då behöver vi ingen backend heller-->
                        <input type="radio" id="commuter" name="ocptn" value="commuter">
                        <label for="commuter">Commuter</label><br>
                        <input type="radio" id="elderly" name="ocptn" value="elderly">
                        <label for="elderly">Elderly</label><br>
                        <input type="radio" id="student" name="ocptn" value="student">
                        <label for="student">Student</label><br>
                        <input type="radio" id="tourist" name="ocptn" value="tourist">
                        <label for="tourist">Tourist</label>
                    <br><br>
                        <h5>Travelling from</h5>
                        <input type="text" id="tFrom" name="tFrom" v-model="from" class="form-control-lg">
                    <br>
                        <h5>Travelling to</h5>
                        <input type="text" id="tTo" name="tTo" v-model="to" class="form-control-lg"><br><br>
                    <h5>Your thoughts on what went well and where we could improve</h5>
                    <textarea rows = "5" cols = "50" name = "freeForm" id="freeForm">
                    </textarea><br>
 
                        <button id="submitbutton" class="btn btn-secondary btn-lg btn4" v-on:click="submitfeedback" >Submit</button>
                        <input type="button" value="Skip" onClick="window.location.reload();" class="btn btn-secondary btn-lg btn4">

  
                    </form>
                </div>
            </div>
        </div> 
    </div>
<!--tar nu automatiskt from och to från tidigare-->





</div>
</template>

<script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"></script>
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
      box5: false,

      from: 'Arcada',
      to: 'Rautatieasema',
    }
  
  },

      mounted() {
       let maps = document.createElement('script')
       maps.setAttribute('src', 'map.js')
       document.body.appendChild(maps)   
        },
  
  methods: {

    //    testy: function() {     
    //   let maps = document.createElement('script')
    //   maps.setAttribute('src', 'map.js')
    //   document.head.appendChild(maps)   
    //    },


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
    },

    /* start*/
    submitfeedback: function(e){
        
        alert("Thank you for your feedback!");
        location.reload();
    },
   /*end*/

  }

}
</script>
