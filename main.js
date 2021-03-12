var paragraphs = [
  "I love ART because its just like codeing.We can create anything with our imagination.",
  
  " I love codeing because we can make anything possible.Anything like games , apps ,websites , etc.",
];


var images = [
 "https://tse2.mm.bing.net/th?id=OIP.PGQQSWY_A9ourm-G77M0FQHaFd&pid=Api&P=0&w=214&h=159",
   "https://images.wallpaperscraft.com/image/code_programming_symbols_140997_3840x2160.jpg",
];


var i = 0;
function hobbies() {
 
  document.getElementById("p1").innerHTML=paragraphs[i];
  
  
  document.getElementById("img1").src
  =images[i];
    i++;
  
  
if( i == 2 ){
  i = 0;
}
}