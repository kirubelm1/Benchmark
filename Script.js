const SIZE = 10000; // Change this for heavier/lighter load

function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * size));
  }
  return arr;
}

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// MAIN
console.log(`Starting benchmark: sorting ${SIZE} random numbers...`);

const array = generateRandomArray(SIZE);

const start = Date.now();
bubbleSort(array);
const end = Date.now();

const timeTaken = end - start;
const score = Math.round((SIZE * SIZE) / timeTaken);


console.log("\nAll sorted numbers:");
console.log(array.join(", "));

console.log(`\n✅ Sort complete!`);
console.log(`⏱ Time taken: ${timeTaken} ms`);
console.log(`💻 Your CPU score: ${score} CineScore`);