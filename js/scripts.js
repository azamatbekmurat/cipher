var answer = prompt("Please enter a sentence");

/*
this function will take the first and last sentence and capitalize the first and last sentence
@params:
sentence : sentence to be processed
*/

//this function is to capitalize first and last letters
function cap_sent(sentence) {
  return  sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length - 1 ).toUpperCase();

}

//this function is to reverse first and last characters
function reverse_sent(sentence) {
  return  sentence.charAt(sentence.length - 1 ) + sentence.charAt(0);

}

//this function is to use previous two functions; capitalize and reverse first and last letters and after that add result to original sentence
function sentence2(sentence) {
  return sentence + reverse_sent(cap_sent(sentence));
};

//this function is to find median character of the sentence and add to third function return
function encrypt(sentence) {
  position = sentence.length / 2 ;
  return sentence.charAt( parseInt(position)) + sentence2(sentence);
}

//this function is to reverse whole sentence
function reverse(sentence) {
  return encrypt(sentence).split("").reverse().join("");

}

/*
alert(cap_sent(answer));
alert(reverse_sent(answer));
alert(sentence2(answer));
alert(encrypt(answer) );
*/

//alert(encrypt(answer));
jQuery(document).ready(function() {

jQuery("h1").click(function() {
  alert(answer);
});

jQuery("h2").click(function() {
  alert(reverse(answer));
});

});
