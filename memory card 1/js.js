//Gọi hàm tạo thẻ bài
imageNumber = 10; 

pics = ImageArray(imageNumber);

function ImageArray(imageNumber) {

	var imagesArray = [];

	for (i=0; i< imageNumber; i++) {
		var imageObj = {
			_src: "img/img0" + String(Math.floor(i/2)) + ".jpg",
			_alt: ""
		};

		imagesArray.push(imageObj);
	}

	return shuffle(imagesArray);

}
//Sử dụng vòng lặp tạo thẻ bài
var img = document.getElementById("photos");

for(var i=0; i<pics.length; i++){
	
	var card = document.createElement("div");
	var front = document.createElement("img");
	var back = document.createElement("img");

	card.className = "card";
	front.src = pics[i]._src;
	front.className = "front";
	front.alt = pics[i]._alt;
	back.src = "img/backcard.jpg";
	back.className = "back";

	card.appendChild(front);
	card.appendChild(back);
	img.appendChild(card);

}
// Lật bài
var card = $(".card");

card.children(":nth-child(1)").addClass("flip");

card.click(function(){
	$(this).children(":nth-child(1)").removeClass("flip");
	$(this).children(":nth-child(2)").addClass("flip");
});

//Hàm đảo vị trí các phần tử
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}
return array;
}