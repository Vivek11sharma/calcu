let operationtoPerform;
function fun1(a) {
//  console.log("check", a);
  let text1 = (document.getElementById("text1").value += a);
}

function equal() {
  let text1 = document.getElementById("text1").value;
//   console.log("text1text1", text1);
  for (let i = 0; i <= text1.length; i++) {
    if (text1[i] == "*") {
      operationtoPerform = "multiply";
    }
    if (text1[i] == "/") {
      operationtoPerform = "divide";
    }
    if (text1[i] == "+") {
      operationtoPerform = "addition";
    }
    if (text1[i] == "-") {
      operationtoPerform = "substraction";
    }
  }
  console.log("operationtoPerform", operationtoPerform);
  if (operationtoPerform == "multiply") {
    const check = text1.split("*")[0];
    const check2 = text1.split("*")[1];
    const finalresult = check * check2;
    //console.log("finalresult", finalresult);
    document.getElementById("text1").value = finalresult;
  }
  if (operationtoPerform == "addition") {
    const check = parseInt(text1.split("+")[0]);
    const check2 = parseInt(text1.split("+")[1]);
    const finalresult = check + check2;
   // console.log("finalresult", finalresult);
    document.getElementById("text1").value = finalresult;
  }
  if (operationtoPerform == "substraction") {
    const check = text1.split("-")[0];
    const check2 = text1.split("-")[1];
    const finalresult = check - check2;
   // console.log("finalresult", finalresult);
    document.getElementById("text1").value = finalresult;
  }
  if (operationtoPerform == "divide") {
    const check = text1.split("/")[0];
    const check2 = text1.split("/")[1];
    const finalresult = check / check2;
   // console.log("finalresult", finalresult);
    document.getElementById("text1").value = finalresult;
  }
}

function fun(hh) {
  var text1= document.getElementById("text1");
  var cn1= text1.value.slice(0, -1);
  var cn2= text1.value.charAt(text1.value.length-1);
  if(cn2 != "+"&& cn2 != "-"&& cn2 !="*"&& cn2 != "/"){
    
    text1.value +=hh;
    
  }
  else{
    text1.value = cn1 + hh;
  }
}
 
function clrr() {
    let text1 = document.getElementById("text1").value="";
}