
var leafPositions = document.querySelectorAll('.a-row.a-size-small:not(.a-color-secondary)');

for(let i = 0; i < leafPositions.length; i++){
  console.log("leaf found");
  chrome.runtime.sendMessage({msg: 'leafFound', index: i}, function({data, index}){
    var leafImg = document.createElement("img");
	
    leafImg.src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/leaf-537-828617.png";
    leafImg.style.maxWidth = "7%";
	
	var tooltip = document.createElement("div");
	tooltip.title = "Certified Sustainable";
	
	tooltip.appendChild(leafImg);
	
    leafPositions[index].appendChild(tooltip);
  });
}
