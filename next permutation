class Solution {
public:
    void nextPermutation(vector<int>& nums) {
    int n = nums.size();
        if(n==1) return;
        
        int lastIndex= -1;
        for(int i=1; i<n; i++)
        {
            if(nums[i]>nums[i-1])
                lastIndex = i;
        }
        
        if(lastIndex==-1)
        {
            for(int i=0; i<n/2; i++)
                swap(nums[i], nums[n-1-i]);
            return;
        }
        
       
        int index= lastIndex;
        
        for(int i=lastIndex; i<n; i++)
        {
            if(nums[i]>nums[lastIndex-1])
                index=i;
        }
        swap(nums[lastIndex-1], nums[index]);
        sort(nums.begin()+lastIndex,nums.end());
    }
};
