//Gọi hàm tạo thẻ bài
cardNumber = 5; 

cards = ImageArray(cardNumber);

function ImageArray(cardNumber) {

	var imagesArray = [];

	for (i=0; i< cardNumber; i++) {
		var image = {
			src: "img/img0" + i + ".jpg",
		};

		imagesArray.push(image);
	}
	//Hàm nhân đôi mảng	
	imagesArray= imagesArray.concat(imagesArray)
	
	return shuffle (imagesArray);

}
	//Sử dụng vòng lặp tạo thẻ bài
	var img = document.getElementById("image");

	for(var i=0; i<cards.length; i++){

		var card = document.createElement("div");
		var front = document.createElement("img");
		var back = document.createElement("img");

		card.className = "card";
		front.src = cards[i].src;
		front.className = "front";
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