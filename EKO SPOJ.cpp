#include<bits/stdc++.h>
#define ll long long
using namespace std;

bool cutting(ll *ar, ll n, ll mid,ll m)
{
	ll sum=0;
	for(int i=0;i<n;++i)
	{
		if(ar[i]>mid)
			sum+=(ar[i]-mid);
	}
	if(sum>=m)
		return true;
	return false;
}

int main()
{
	ll n,m,ans=0;
	cin>>n>>m;
	ll ar[n];
	for(int i=0;i<n;++i)
	{
		cin>>ar[i];
	}
	ll start=0,end=*max_element(ar,ar+n);
	while(start<=end)
	{
		ll mid=start+(end-start)/2;
		if(cutting(ar,n,mid,m))
		{
			ans=mid;
			start=mid+1;
		}
		else
		{
			end=mid-1;
		}
	}
	cout<<ans;
	return 0;
}
