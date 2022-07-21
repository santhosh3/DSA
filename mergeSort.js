// // /**
// //  * SPLITING SORTING AND MERGING
// //  */

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