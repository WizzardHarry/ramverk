<template>
  <div id="app">
    <Content />
  </div>
</template>

<script>
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Content,
  },

}

</script>



<!-- css -->
<style>
body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #B0D9EF;
    color: white;
}



.container {
    height: 100%;
    margin-top: 12%;
    margin-bottom: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-style: solid;
    border-color: #3D5D72;
    border-radius: 40px;
    background-color: #50ADD3;
}

/* Form css */

.rubrik {
    padding-top: 10%;
    padding-left: 10%;
    position: relative;
}
.andraRubrik {    
    padding-top: 1%;
    position: relative;
    padding: 2%;
    margin:auto;
}

.row {
    top: 10px;
    left: 20px;
    position: relative;
    bottom: 10px;
    height: auto;
    padding-bottom: 25px;
}

.btn3 {
    margin: 1% 0 0 0;
}
.btn4 {
    margin: 1% 0 0 2%;
}


/* Form css end */

.lower {
    border-bottom: solid;
    padding-left: 7%;
}

.lower1{
    border-bottom: solid;

}

.location {
    margin: 7.5% 0 5% 0;
}

.degrees{
    margin: 5% 0 5% 0;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    text-align: center;
    display: flex;
    border-style: solid;
    border-color: #3D5D72;
}

.btn-1 {
    padding: 10% 0 15% 0;
    min-width: 95%;
    place-content: center;
}

.btn1 {
    border-radius: 10px;
    background-color: #3282b8;
}

.btn2 {
    border-radius: 10px;
}

.click {
    font-size: 200%;
}

.iframe {
    width: 100%;
    height: 100%;
}

#freeForm {
  border-radius: 0.5em;
}

 
  
  
  input[type="submit"]{
    padding: 15px 30px;
    background: #e7e7e7;
    border: none;
    border-radius: 1px;
    font-family: "Nunito",sans-serif;
    font-weight:bold;
    font-size: 20px;
  }
  
  .input input[type="text"]{
    text-align: center;
    margin: 100px auto;
    padding: 5px 10px;
    background: #e7e7e7;
    border: none;
    border-radius: 1px;
    font-family: "Nunito",sans-serif;
    font-weight:bold;
    font-size: 20px;
  }
  
  .card{
    width: 50%;
    background: #e7e7e7;
    height: 40vh;
    margin: 50px auto;
    border-radius: 2px;
  }
  
  
  .close{
    float: right;
    margin-top: -2px;
    cursor: pointer;
    margin-right: 20px;
  }
  
  .card h1{
    padding: 5px 0;
    text-align: center;
  }
  
  .card p{
    text-align: center;
    margin:40px 0;
    font-size:20px;
  }


  /* väder api*/
  #w-app {
    margin-left: 23%;
  }

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  
  color: #313131;
  font-size: 20px;
  appearance: none;
  border:none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box {
  width: 100%;
  margin-bottom: 10%;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.location-box .location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.btn2 {
  color: white;
  Margin: 4% 0 4% 0;
  width: 100%;
}

.btn2:hover {
  color: white;
}

</style>
