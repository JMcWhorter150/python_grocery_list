// snake = (arr) => {
//     const newArr = [];
//     if(arr[0].length === 0) {
//         return newArr;
//     } else {
//         snake(arr)
//     }
// }


function snake(arr) {
    let newArr = [];
    if(arr[0].length === 0) {
        return newArr;
    }
    let totalLength = arr.length ** 2;
    let side = arr.length;
    let x = 0;
    let y = 0;
    let yStop = 1;
    let xStop = 0;
    while (newArr.length < totalLength) {
        newArr.push(arr[y][x])
        if(x > y) {
            if(x < side - 1) {
                x++;
            } else if (y < side - 1) {
                y++;
            }
        } else if (y > x) {
            if(x > xStop) {
                x--;
            } else if(y > yStop) {
                y--;
            } else if (y === yStop) {
                x++;
                xStop++;
                yStop++;
                side--;
            }
        } else if (y === x) {
            if (x === 0 || x === xStop) {
                x++;
            } else if (y === side - 1) {
                x--;
            }
        }
    }
    return newArr;
}

// 0,0 ; 0,1 ; 0,2 ; 0,3 ; 1,3 ; 2,3 ; 3,3 ; 3,2 ; 3,1 ; 3,0 ; 2,0 ; 1,0 ; 1,1 ; 1,2; 2,2 ; 2,1

// Test.assertDeepEquals(snail([[]]), []);
// Test.assertDeepEquals(snail([[1]]), [1]);
// printNums([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(snake([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])) // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);