const arr: number[] = [1,2,3,4,5];

const display = () => {
    arr.forEach(el => console.log(el));
}

const append = (el: number) => {
    arr.push(el);
}

const insert = (index: number, el: number) => {
    arr.splice(index, 0, el);

    // or ->

    // for (let i = arr.length; i > index; i--) {
    //     arr[i] = arr[i-1];
    // }
    // arr[index] = el;
}

const deleteViaIndex = (index: number) => {
    arr.splice(index, 1);
}

const deleteViaEl = (el: number) => {
    const index = arr.indexOf(el)
    arr.splice(index, 1);
}

const linearSearch = (el: number) => {
    let index: number;
    arr.forEach((e, i) => {
        if(el === e){
            index = i;
        }
    })
    console.log(index);
}

const binarySearch = (el: number) => {
    arr.sort();
    let low = 0, high = arr.length - 1;
    while(low <= high){
        const mid = Math.floor((low + high)/2);
        if(arr[mid] === el){
            console.log(mid)
            return mid;
        }
        if(el < arr[mid]){
            high = mid - 1;
        }
        else if(el > arr[mid]){
            low = mid + 1;
        }
    }
}

// append(6);
// insert(1, 7);
// deleteViaIndex(1);
// deleteViaEl(1);
// linearSearch(1);
binarySearch(3);
display();