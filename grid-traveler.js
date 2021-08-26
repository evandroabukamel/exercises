const gridTraveler = (m, n, memo = {}) => {
  // const key = m + ',' + n;
  const key = [m, n];

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(9, 9));
console.time('gridTraveler(180, 180)');
console.log(gridTraveler(18, 18)); // 2333606220
console.timeEnd('gridTraveler(180, 180)');