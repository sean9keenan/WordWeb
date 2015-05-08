webAddress = 'http://wordwebsocket.skeenan.com:80';
localAddress = 'http://localhost:8905';

triedLocalAddress = false

window.setNewSocketAddress = function(address) {
  window.socketAddress = address;
  // window.socket = io.connect(window.socketAddress, {
  //   // 'connect timeout': 1
  // });
  window.socket = io.connect();


  window.socket.on('connect', function() {
    $('#messages').fadeOut(function() {
      $('#messages').html('');
    });
    console.log('connect');
  });
  window.socket.on('connecting', function(){
    console.log('connecting');
  });

  window.socket.on('disconnect', function() {
    onSocketError();
    console.log('disconnect');
  });

  window.socket.on('error', function(){
    onSocketError();
    if (!triedLocalAddress) {
      window.setNewSocketAddress(localAddress)
    } else {
      triedLocalAddress = true
      window.setNewSocketAddress(webAddress)
    }
    console.log('socketError');
  });
  window.socket.on('connect_failed', function(){
    console.log('socketConnect_Failed');
  });

  window.socket.on('reconnect_failed', function(){
    console.log('socketReconnect_failed');
  });
  window.socket.on('reconnect', function(){
    // Rerender anything here....
    console.log('reconnect');
  });
  window.socket.on('reconnecting', function(){
    console.log('reconnecting');
  });

  window.socket.on('loadUser', function(data){
    console.log('loadUser');
    window.loadUser(data);
  });

  function onSocketError() {
    $('#messages').html('  <div class="alert">\
      <a class="close" data-dismiss="alert" href="#"> × </a>\
      <strong> </strong> <div class="alertMessage"> </div>\
    </div>');

    // $('#messages').load=('tpl/MessageAlert.html', function() {
      $('#messages .alert').attr('class', 'alert bg-danger');
      $('#messages strong').html('ERROR');
      $('#messages .alertMessage').html('Connection to J.A.R.V.I.S. has been lost. Please reconnect... I miss you.');

    // });
    $('#messages').fadeIn()
  }
}

window.setNewSocketAddress(localAddress);
// window.setNewSocketAddress(webAddress);

console.log("Nice Try\n\nYou shouldn't be here, you'll ruin some of the fun surprises if you look too deeply\nAlso none of the puzzles can be bypassed this way \n(all server side verfication, all hint links sent from server as needed, all directory trees locked)\nSo don't even bother trying.\n\n Seriously, close this.\n\n For realz.")