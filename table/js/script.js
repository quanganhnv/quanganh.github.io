var  product = ['STT','Image','Name','Cost','NumberProduct'];
var row = "<tr>";
var arr = [
{
	STT : '1', 
	Image : 'img/image1.jpg',
	Name:'APPLE IPHONE 7 MN902 VN 32GB - GOLD',
	Cost: '18.990.000 ',
	NumberProduct:'12',
	},
{
	STT:'2',
	Image:'img/image2.jpeg',
	Name:'OPPO F1S A1601G ',
	Cost:'5.990.000 ',
	NumberProduct:'10',
	},
{
	STT:'3',
	Image:'img/image3.jpeg',
	Name:'SAMSUNG GALAXY S7 EDGE G935F GOLD',
	Cost:'18.490.000 ',
	NumberProduct:'5',
	},
{
	STT:'4',
	Image:'img/image4.jpg',
	Name:'SONY XPERIA XZ F8332VN/S - BẠC',
	Cost:'14.990.000 ',
	NumberProduct:'17',
	},
{
	STT:'5',
	Image:'img/image5.jpg',
	Name:'SAMSUNG GALAXY S6 EDGE G925F GOLD',
	Cost:'10.990.000 ',
	NumberProduct:'30',},
{
	STT:'6',
	Image:'img/image6.jpg',
	Name:'APPLE IPHONE 7 MN8X2 QT 32GB - BLACK',
	Cost:'18.990.000 ',
	NumberProduct:'15',},
{
	STT:'7',
	Image:'img/image7.JPG',
	Name:'LG G3 32GB BLACK ',
	Cost:'11.990.000 ',
	NumberProduct:'6',},
{
	STT:'8',
	Image:'img/image8.jpg',
	Name:'SONY XPERIA Z5 PREMIUM DUAL ĐEN',
	Cost:'15.989.000 ',
	NumberProduct:'5',},
{
	STT:'9',
	Image:'img/image9.jpg',
	Name:'SAMSUNG GALAXY A9 PRO A910 - TRẮNG',
	Cost:'11.990.000 ',
	NumberProduct:'10',},
];
for( var i = 0; i < product.length; i++){
	var sp = "<th>"+product[i]+ "</th>";
	row = row.concat(sp);
};
row = row + "</tr>";
$('thead').append(row);

for(var i = 0;i<arr.length;i++){
	var	row = arr[i];
	var sp = "<tr>"; 
	var str_stt = "<td>"+arr[i].STT+"</td>"; 
	var str_anh = "<td><img src='"+arr[i].Image+"'></td>"; 
	var str_ten = "<td>"+arr[i].Name+"</td>";
	var str_sex = "<td>"+arr[i].Cost+"</td>";
	var str_email = "<td>"+arr[i].NumberProduct+"</td>";
	sp= sp+str_stt+str_anh+ str_ten+str_sex+str_email + "</tr>"; 
	$('tbody').append(sp);
};
$(document).ready(function(){
	$('#table').tablesorter();
});