let heartButton = document.getElementById('giveHeart');
let likeButton = document.getElementById('giveLike');

heartButton.onclick = function(){
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

likeButton.onclick = function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code:
        `
        var unliked = document.querySelectorAll("ytd-toggle-button-renderer#like-button");
        for (let s of unliked){
          s.click();
        }
        `
      }
    );
  });
};