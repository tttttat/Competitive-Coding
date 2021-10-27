/*
 * @lc app=leetcode id=31 lang=java
 *
 * [31] Next Permutation
 */

// @lc code=start
class Solution {

  public void nextPermutation(int[] nums) {
    int first, second;
    for (int i = nums.length - 1; i > 0; i--) {
      if (nums[i] > nums[i - 1]) first = i; else if (
        nums[i] < nums[i - 1]
      ) second = i;
    }
  }
}
// @lc code=end
