/* Task 3:
  Write a function that takes an array of positive integers
 and returns the length of the longest chain of consecutive numbers.
 A chain is defined as a sequence of numbers in the array where each 
 number is exactly one more than the previous number in the sequence,
  and the sequence can be in any order in the array.Also explain the
   time complexity and space complexity.  (Take - Home) */


   const longestConsecutiveChain=(nums) => {
    if (nums.length === 0) return 0;
    
    const numSet = new Set(nums);
    let maxChainLength = 0;
    
    for (const num of numSet) {
       
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentChainLength = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentChainLength += 1;
            }
            
            maxChainLength = Math.max(maxChainLength, currentChainLength);
        }
    }
    
    return maxChainLength;
}

const nums = [100, 4,5, 200, 1, 3, 2];
console.log(longestConsecutiveChain(nums));
