#include<bits/stdc++.h>
using namespace std;
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
		int n;
		cin>>n;
		int ar[n];
		long int a=0,b=0;
		for(int k=0;k<n;k++)
		{
			cin>>ar[k];
		}
		int en=n-1,st=0,lst[2]={0, 0},tot[2]={0, 0},cur,turn=0,count=0;
		int done=0;
		while(st<=en)
		{
			cur=0;
			if(turn==0)
			{
				done=0;
				for(int i=st;i<=en;i++)
				{
					if(cur>lst[1])
					{
						st=i;
						done=1;
						break;
					}
					else
					{
						cur+=ar[i];
					}
				}
				if(!done)
					st=en+1;
			}
			else
			{
				done=0;
				for(int i=en;i>=st;i--)
				{
					if(cur>lst[0])
					{
						en=i;
						done=1;
						break;
					}
					else
					{
						cur+=ar[i];
					}
				}
				if(!done)
					en=st-1;
			}
			tot[turn]+=cur;
			lst[turn]=cur;
			turn=1-turn;
			count++;
		}
		cout<<count<<" "<<tot[0]<<" "<<tot[1]<<"\n";
	}
	return 0;
}
