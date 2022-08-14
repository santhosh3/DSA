// // /**
// //  * SPLITING SORTING AND MERGING
// //  */

// bubble sort
// selection sort
// insertion sort
// quick sort
// merge sort


 function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
console.log(mergeSort([10,9,7,8,6,5,4,3,2,12,89,65]))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function pivot(arr,start = 0, end = arr.length - 1){
//     function swap(array, i, j){
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }


//     var pivot = arr[start]
//     var swapInx = start
    
//     for(let i = start+1; i < arr.length; i++){
//         if(pivot > arr[i]){
//             swapInx++;
//             swap(arr,swapInx,i)
//             console.log(arr)
//         }
//     }
//     swap(arr,start,swapInx)
//     console.log(arr)
// }

// let arr = [4,8,2,1,5,7,6,3]
// //        [4,8,2,1,5,7,6,3]
// //        [4,2,8,1,5,7,6,3]
// //        [4,2,1,8,5,7,6,3]
// //        [4,2,1,8,5,7,6,3]
// //        [4,2,1,8,5,7,6,3]
// //        [4,2,1,3,5,7,6,8]
// console.log(pivot(arr))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//   function pivot(arr, start = 0, end = arr.length - 1) {
//       const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   // We are assuming the pivot is always the first element
//   let pivot = arr[start];
//   let swapIdx = start;

//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > arr[i]) {
//       swapIdx++;
//       swap(arr, swapIdx, i);
//     }
//   }

//   // Swap the pivot from the start the swapPoint
//   swap(arr, start, swapIdx);
//   return swapIdx;
// }


// function quickSort(arr, left = 0, right = arr.length -1){
//     if(left < right){
//         let pivotIndex = pivot(arr, left, right) //3
//         //left
//         quickSort(arr,left,pivotIndex-1);
//         //right
//         quickSort(arr,pivotIndex+1,right);
//       }
//      return arr;
// } 
           
// quickSort([100,-3,2,4,6,9,1,2,5,3,23])
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function pivot(arr,start = 0, end = arr.length - 1){
    function swap(arr,i,j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let pivot = arr[start];
    let startIdx = start;

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            startIdx++
            swap(arr,startIdx,i);
        }
    }
    swap(arr,start,startIdx)
    return startIdx
}

function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr,left,right)
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)
    }
    return arr
}
let arr = [9,8,7,100,6,5,4,3,2,1]
console.log(quickSort(arr))

//+***+++*++***************+*+++**+*+*+**+*+*+*+*+*+*++**+*+*+*+*++*+*+*+*+*+*+*+*+*+*+*+*+

/*  function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
        console.log("ONE PASS COMPLETE")
    }
    return arr
}
console.log(bubbleSort([37, 45, 29, 8])) */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * QuickSort 
 */

//selection sort
// 19 44 38 5 47 15
// it will check the smallest element comparing first element if we found just swap the element
// 19 44 38 5 47 15
//          s           here 5 is the smallest element comparing to 19 then swap the element

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i
        for(let j = i+1; j < arr.length; j++){
         if(arr[j] < arr[lowest]){
            lowest = j
         }
        }
        let temp = arr[i];
        arr[i] = arr[lowest]
        arr[lowest] = temp
    }
    return arr
}
selectionSort([34,22,10,19,17])
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function selectionSort1(arr){
    function swap(arr,idx1,idx2){
       ( [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]])
    }
    for(let i = 0; i < arr.length; i++){
        let lowest = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if(i != lowest) swap(arr,i,lowest)
    }
    return arr
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function bubbleSort1(arr){
    function swap(arr,idx1,idx2){
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
    }
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//start picking the second element in the array
//Now compare the second element with the one before with the one before it and swap if necessary
//continue to the next element and if it is in the incorrect order, iterate through the sorted portion
// to place the element in the correct order

function insertionSort(arr){
    var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
        console.log(j+1)
    }
    return arr
}
let arr1 = [2,1,9,76,4]
console.log(insertionSort(arr1))
// currentVal = arr[1] = 1 [2,2,9,76,4] => replaces [1,2,9,76,4]
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++