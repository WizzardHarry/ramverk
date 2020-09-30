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
      visible: true, // kolla vm.visible i konsolen
      email: 'Denna text skriven med vue.js' // Kolla vm.email i konsolen 
                                            // OBS! Endast one way bind. Använderen kan inte modifiera fältet från en input
    }
  })
  
  var sub = new Vue({
    el: "submitbutton",
    data: {
      message5: "test"
    }
  })
  