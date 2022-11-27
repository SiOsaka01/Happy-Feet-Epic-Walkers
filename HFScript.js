function setIframeSource() {
    var theSelect = document.getElementById('location');
    var theIframe = document.getElementById('myIframe');
    var theUrl;
  
    theUrl = theSelect.options[theSelect.selectedIndex].value;
    theIframe.src = theUrl;
 }

function showDetails(){
    const bt=document.getElementById("bt1").style.height;
    alert(bt);
 }

function showMapper(){
        var mapp=document.getElementById("latlongmape");
        alert("This function is under Development! Sorry, buy a map and compass!");
}

function boom(){
    alert("Thank you see you on Sunday.");
}
      console.log("Total width/height: ", screen.width + "*" + screen.height);
      console.log("Available width/height: ", screen.availWidth + "*" + screen.availHeight);
      console.log("Color depth: ", screen.colorDepth);
      console.log("Color resolution: ", screen.pixelDepth);

    

 
