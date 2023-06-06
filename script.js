const func = (nums) => {
    for (let i = 1; i <= nums; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}
    // func(5);

const arr = [1, 2, 3, 4, 5, 6]
//  let arr2 = arr
// const splice = arr.splice(2, 1)
// const slice = arr.slice(1, 6)
// console.log(arr)
// console.log(arr2)

const obj = {
    title: 'a',
    date: '2000',
    rating: 4,
    cast: {
        a: 'a',
        b: 'b'
    },
    directors: ['c', 'd', 'e'],
    cal(){
        let something = this.date + this.rating
        return something
    }
}

let obj2 = obj

obj.date = 2018
obj.directors[0] = 'j'
obj2.cast['a'] = 'b'



console.log(obj, obj2, obj.cal(), obj2.cal())
