function firstWord(s) {
  	// your code here
	  let trimedWord = s.trim().split(" ");
	  if (s.length==0) {
		  return '';
	  }
	  else{
		return trimedWord[0];
	  }
}

// Do not change the code belowr
const s = prompt("Enter String:");
alert(firstWord(s));
