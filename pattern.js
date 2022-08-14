//square star pattern in JS
/*
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */
function square(num){
    let str = ""
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            str = str +' '+ "👍"
        }
        str = str + "\n";
    }
    return str
}
// let num = 5;
// console.log(square(num))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Hellow square pattern
/*
 * * * * *
 *       *
 *       *
 *       *
 * * * * *
 */
function Hellow(num){
    let str = "";
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            if(i === 0 || i === num-1){
                str = str + " "+"*";
            }else if(j === 0 || j === num-1){
                str = str +" "+"*";
            }else{
                str = str + "  ";
            }
        }
        str = str +"\n";
    }
    return str
}
// let n = 5
// console.log(Hellow(n))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 * * * * * * * * * *
 *                 *
 *                 *
 *                 *
 * * * * * * * * * *
 */
function HellowRect(num){
    let str = "";
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num+5; j++){
            if(i === 0 || i === num-1){
                str = str + " "+"😊";
            }else if(j === 0 || j === num-1+5){
                str = str +" "+"😊";
            }else{
                str = str + "  ";
            }
        }
        str = str +"\n";
    }
    return str
}
// let n = 5
// console.log(HellowRect(n))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//print right triangle
/*
     *
    **
   ***
  ****
 *****
 */
function rightTriangle(num){
    let str = ""
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num-i; j++){
            str = str + " ";
        }
        for(let k = 0; k < i; k++){
            str = str + "*"
        }
        str = str + "\n"
    }
    return str
}
let num = 5
console.log(rightTriangle(num+1))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//left triangle
/*
*
**
***
****
*****
 */

function leftTriangle(num){
    let str = "";
    for(let i = 1; i <= num; i++){
        for(let j = 0; j < i; j++){
            str = str + "*"
        }
        str = str + "\n"
    }
    return str
}
// let num = 5
// console.log(leftTriangle(num))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Downward triangle star
/*
*****
****
***
**
*
 */

function downTriangle(num){
    let str = "";
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num-i; j++){
            str = str + "*"
        }
        str = str + "\n"
    }
    return str
}
// let num = 5;
// console.log(downTriangle(num))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// equilateral tringle pattern
/*
    *
   ***
  *****
 *******
*********
 */

function triangle(num){
    let str = "";
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num-i; j++){
            str = str + " "
        }
        for(let k = 0; k < 2*i-1; k++){
            str = str + "*"
        }
        str = str + "\n"
    }
    return str
}
// let num = 5
// console.log(triangle(num))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// hellow triangle
/*
*     
**    
* *   
*  *  
******
 */
function hellowRightTriangle(num){
    let str = ""
    for(let i = 1; i <= num; i++){
        for(let j = 0; j <= num; j++){
            if(i == num) str = str + "*"
            else if(j === 0 || j == i-1) str = str + "*"
            else str = str + " ";
        } 
        str = str + "\n";
    }
    return str
}
// let num = 5
// console.log(hellowRightTriangle(num))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// invert triangle

/*
*********
 *******
  *****
   ***
    *
 */
function invertTriangle(num){
    let str = ""
    for(let i = 0; i < num; i++){
        for(let j = 0; j < i; j++){
            str += " "; 
        }
        for(let k = 0; k < (num-i)*2-1; k++){
            str = str+ "*"
        }
        str += "\n"
    }
    return str
}
// let num = 5
// console.log(invertTriangle(num))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//helloew triangle
/*
    *
   * *
  *   *
 *     *
*********
 */
function hellowTriangle(num){
    let str = ""
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num-i; j++){
            str += " "
        }
        for(let k = 0; k < 2*i-1; k++){
            if(i == 1 || i == num) str = str +"*"
            else if(k == 0 || k == 2*i-2) str = str + "*"
            else str = str + " "
        }
        str += "\n";
    }
    return str
}
// let n = 5
// console.log(hellowTriangle(n))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
 */
function pyramid(num){
    let str = "";
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num-i; j++){
            str = str + " "
        }
        for(let k = 0; k < 2*i-1; k++){
            str = str + "*"
        }
        str = str + "\n"
    }
    for(let i = 0; i < num; i++){
        for(let j = 0; j < i; j++){
            str = str + " "
        }
        for(let k = 0; k < 2*(num-i)-1; k++){
            str = str + "*"
        }
        str = str + "\n"
    }
    return str
}
// let num = 5
// console.log(pyramid(num))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
    *
   * *
  *   *
 *     *
*       *
*       *
 *     *
  *   *
   * *
    *
 */
function HellowPyramid(num){
    let str = "";
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num-i; j++){
            str = str + " "
        }
        for(let k = 0; k < 2*i-1; k++){
            if(k == 0 || k == 2*i-2) str = str + "*"
            else str = str + " "
        }
        str = str + "\n"
    }
    for(let i = 0; i < num; i++){
        for(let j = 0; j < i; j++){
            str = str + " "
        }
        for(let k = 0; k < 2*(num-i)-1; k++){
            if(k == 0 || k == 2*(num-i)-2) str = str + "*"
            else str = str + " "
        }
        str = str + "\n"
    }
    return str
}
// let num = 5
// console.log(HellowPyramid(num))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********
 */
function HourGlassStarPattern(num){
    let str = "";
    for(let i = 0; i < num; i++){
        for(let j = 0; j < i; j++){
            str = str + " "
        }
        for(let k = 0; k < 2*(num-i)-1; k++){
            str = str + "*"
        }
        str = str + "\n"
    }
    for(let i = 2; i <= num; i++){
        for(let j = 1; j <= num-i; j++){
            str = str + " "
        }
        for(let k = 0; k < 2*i-1; k++){
            str = str + "*"
        }
        str = str + "\n"
    }
    return str
}
// let num = 5
// console.log(HourGlassStarPattern(num))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//right pascal star shape
/*
*
**
***
****
*****
****
***
**
*
 */
function rightPascal(num){
    let str = ""
    for(let i = 0; i < num; i++){
        for(let j = 0; j <= i; j++){
            str += "*"
        }
        str += "\n"
    }
    for(let i = 1; i <= num-1; i++){
        for(let j = 0; j < num-i; j++){
            str += "*"
        }
        str = str + "\n"
    }
    return str
}
// let num = 5
// console.log(rightPascal(num))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//left pascal 
/*
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
 */
function leftPascal(num){
    let str = ""
    for(let i = 1; i <= num; i++){
        for(let j = 0; j < num-i; j++){
            str += " "
        }
        for(let k = 0; k < i; k++){
            str += "*" 
        }
        str += "\n"
    }
    for(let i = 1; i < num; i++){
        for(let j = 0; j < i; j++){
            str += " "
        }
        for(let k = 0; k < num-i; k++){
            str += "*"
        }
        str += "\n"
    }
    return str
}
// let num = 5
// console.log(leftPascal(num))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++