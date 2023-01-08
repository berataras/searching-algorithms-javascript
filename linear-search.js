function search(arr, n, findElement)
{
    for (let i = 0; i < n; i++){
        if (arr[i] === findElement){
            return i;
        }
    }
    return -1;
}

const myArray = [2, 3, 4, 10, 40];

const result = search(myArray, myArray.length, 4);

console.log(`index of find element is ${result}`);