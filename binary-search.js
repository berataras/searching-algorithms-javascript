function binarySearch(arr, left, right, findElement){
    if (right >= left) {
        //orta eleman bulunuyor.
        let mid = left + Math.floor((right - left) / 2);

        //aranan eleman orta elemanın kendisiyse
        if (findElement === arr[mid]){
            return mid;
        }

        //aranan eleman orta elemandan küçükse.
        //küçükler solda bulunmalı.
        if (findElement < arr[mid]){
            return binarySearch(arr, left, mid - 1, findElement);
        }

        //aranan eleman orta elemandan büyükse
        //sağ tarafta olmalı.
        return binarySearch(arr, mid + 1, right, findElement);
    }
    return -1;
}

const myArray = [2, 3, 4, 10, 40];

const result = binarySearch(myArray, 0, myArray.length - 1, 3);

console.log(`index of find element is ${result}`);