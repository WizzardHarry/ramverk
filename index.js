var app = new Vue({ 
    el: '#app',
    data: {
        message: 'your name here',
        secondmessage: "This is a message written with vue"
    }
});


var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Du laddade sidan:' + new Date().toLocaleString()
    }
  })

  //this is a comment
  //this is another comment

  var app3 = new Vue ({
    el: '#app-3',
    data: {
      message3: ' testar github ändringar:',
      message4: 'mera ändringar'
    }
  })

  var vm = new Vue({
    el: '#app-4',
    data: {
      email: 'felix@example.com'
    }
  })