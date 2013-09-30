var DEFAULT_THRESHOLD = 50;

restore_options();
var btn = document.getElementById("save_settings");
var btn_listener = function(e){
    save_options();
};
btn.addEventListener('click', btn_listener, false);

function save_options() {
  var threshold = document.getElementById("threshold").value;
  var data = {
    Shinchokusan : {
      threshold : threshold ? threshold : DEFAULT_THRESHOLD
    }
  };

  chrome.storage.local.set(data, function(){
    var status = document.getElementById("status");
    status.innerHTML = "Settings saved!!";
    setTimeout(function() {
      status.innerHTML = "";
    }, 750);
  });
}

function restore_options() {
  document.getElementById("threshold").value = DEFAULT_THRESHOLD
  chrome.storage.local.get('Shinchokusan', function(result){
    if( result.Shinchokusan.threshold ) {
      document.getElementById("threshold").value = result.Shinchokusan.threshold;
    }
  });
}
