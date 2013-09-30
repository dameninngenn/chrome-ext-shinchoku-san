var threshold = 50;
var count = 0;

chrome.storage.local.get('Shinchokusan', function(result){
  if( result.Shinchokusan.threshold ) {
    threshold = result.Shinchokusan.threshold;
  }
});

chrome.extension.onConnect.addListener(function(port,name) {
  port.onMessage.addListener(function(info,con){
    count++;
    if( count % threshold === 0 ) {
      port.postMessage();
      count = 0;
    }
  });
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if( changes.Shinchokusan ) {
    threshold = changes.Shinchokusan.newValue.threshold;
  }
});

