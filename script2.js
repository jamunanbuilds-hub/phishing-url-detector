function checkURL(){

let url = document.getElementById("urlInput").value;
let result = document.getElementById("result");

let isUnsafe = false;

/* Check 1: contains @ */
if(url.includes("@")){
isUnsafe = true;
}

/* Check 2: uses http instead of https */
if(url.startsWith("http://")){
isUnsafe = true;
}

/* Check 3: very long URL */
if(url.length > 75){
isUnsafe = true;
}

/* Check 4: suspicious words */
let suspiciousWords = ["login","verify","secure","update"];

for(let word of suspiciousWords){
if(url.includes(word)){
isUnsafe = true;
}
}

if(isUnsafe){
result.innerText = "URL UNSAFE";
result.style.color = "red";
}else{
result.innerText = "URL SAFE";
result.style.color = "green";
}

}