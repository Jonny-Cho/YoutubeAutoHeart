let btn = document.getElementById('giveHeart');

btn.onclick = function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code:
        `
        var unhearted = document.querySelectorAll("yt-icon#unhearted");
        for (let s of unhearted){
          s.click();
        }
        `
      }
    );
  });
};