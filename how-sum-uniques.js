const howSum = (money, costs) => {
  const memo = new Map();

    for (let i = 0; i < costs.length; i++) {
        let val = costs[i];

        // console.log('val = ' + val + ', diff = ' + (money - val));
        if (memo.has(money - val)) {
            return [ memo.get(money - val), i+1 ];
        }

        memo.set(val, i+1);
    }
};

// console.log(howSum(5, [1, 2, 3, 5, 6])); // [2, 3]
console.log('indexes = ' + howSum(8, [1, 3, 5, 6, 8])); // [3, 5]
// console.log(howSum(7, [2, 4])); // null
// console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
// console.log(howSum(300, [7, 14])); // null