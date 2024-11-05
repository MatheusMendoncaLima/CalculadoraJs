const OUTPUTBOX = document.getElementById("output")
const INPUTBOX = document.getElementById("input")

function addText(text){

    if (text=="del") {
        INPUTBOX.innerHTML = INPUTBOX.innerHTML.substring(0, INPUTBOX.innerHTML.length-1)
        return;
    }else if (text == "="){
        let count = INPUTBOX.innerHTML;
        let currentOperator = 0;
        while (count.includes("+") || count.includes("-")
            || count.includes("*") || count.includes("/")
            || count.includes("%") || count.includes("^")
            || count.includes("√")){
            
                const operators = ["^","√", "*", "/", "+", "-" ]
                let firstOperatorIndex = count.indexOf(operators[currentOperator])
                let secondOperatorIndex = count.indexOf(operators[currentOperator+1])

                if(firstOperatorIndex > secondOperatorIndex)operatorIndex=secondOperatorIndex==-1? firstOperatorIndex : secondOperatorIndex;
                else operatorIndex=firstOperatorIndex==-1? secondOperatorIndex : firstOperatorIndex;
                if (firstOperatorIndex == -1 && secondOperatorIndex ==-1 && currentOperator +1 < operators.length){
                    currentOperator+=2
                } else if(firstOperatorIndex == -1 && secondOperatorIndex ==-1 && currentOperator +1 >= operators.length){
                    alert(error)
                    break
                }

                if(operatorIndex >= 0){
                    let firstIndex;
                    let secondIndex;
                    for(var i=operatorIndex-1; i >= 0; i--){
                        if(operators.includes(count.charAt(i))){
                            break;
                        }
                        firstIndex=i;
                    }
                    for(var i=operatorIndex+1; i < count.length; i++){
                        if(operators.includes(count.charAt(i))){
                            break;
                        }
                        secondIndex=i;
                    }
  

                    let tempCount = count.slice(firstIndex, secondIndex+1);
                    operator = count.charAt(operatorIndex);
                    firstValue = parseFloat(tempCount.split(operator)[0]);
                    secondValue = parseFloat(tempCount.split(operator)[1])
                    
                    let value;
                    switch (operator){
                        case "^":
                            value = firstValue**secondValue
                            break;
                        case "√":
                            value = Math.sqrt(secondValue, firstIndex)
                            break;
                        case "*":
                            value = firstValue*secondValue
                            break;
                        case "/":
                            value = firstValue/secondValue
                            break;
                        case "%":
                            value = firstValue%secondValue
                            break;
                        case "+":
                            value = firstValue+secondValue
                            break;
                        case "-":
                            value = firstValue-secondValue
                            break;
                        
                    }
                    count = count.replace(tempCount, value)
                    OUTPUTBOX.innerHTML=count;
                    



                }
                
        }


        return
    }else if (text == "AC"){
        INPUTBOX.innerHTML="";
        OUTPUTBOX.innerHTML="";
        return
    }

    INPUTBOX.innerHTML+=text;
}