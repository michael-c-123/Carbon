function findIngreds(document) {
	var important = document.getElementById("important-information")
	var sections = important.childNodes;
	return sections.forEach(doIngreds);
}

function doIngreds(item, index) {
	var subtitle = item.getElementsByClassName("a-text-bold")[0];
	if (subtitle.textContent == "Ingredients") {
		return item.childNodes[1].textContent;
	}
	return "";
}