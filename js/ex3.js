const values = [3, 11, 7, 2, 9, 10];

console.log(`Array has the following values: ${values}`)

let sum = 0;
for(let i = 0; i < values.length; i++)
{
    sum = sum + values[i];
}
console.log(`Sum of all array values is ${sum}`)

const maxval = Math.max(...values)
const minval = Math.min(...values)

console.log(`Max value: ${maxval}`)
console.log(`Min value: ${minval}`)