class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ans;
      if(nums.size()<3){
          return ans;
          
      }  
        else{
            sort(nums.begin(), nums.end());
             for(int  i=0; i< nums.size(); i++)
        {
                 int x= -(nums[i]);
        
                 if(i>0 && nums[i]==nums[i-1])
                     continue;
                 int left = i+1, right= nums.size()-1;
                 while(left<right){
                     if(right<nums.size()-1 && nums[right]==nums[right+1])
                     { right--;
                     continue;
                     }
                     if(nums[left]+nums[right]==x)
                         {   ans.push_back({nums[left], nums[i], nums[right]});
                         left++;
                          right--;
                         }
                     else if ((nums[left]+nums[right]) < x)
                             left++;
                     else 
                             right--;
                     
                     
                 }
        }
            return ans;
        }
       
        
    }
};
