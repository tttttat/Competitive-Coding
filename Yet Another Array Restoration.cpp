#include<bits/stdc++.h>
using namespace std;
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
		long int n,x,y,c,i,store;
		cin>>n>>x>>y;
		store=y;
		long long int ar[n];
		for(i=1;i<100;i++)
		{
			c=0;
			y=store;
			while((y>=x)&&(c<n))
			{
				y-=i;
				c++;
			}
			if((y+i)==x)
			{
				break;
			}
		}
		y=store;
		cout<<y<<" ";
		c=1;
		while((y>0)&&c<n)
		{
			y-=i;
			if(y>0)
			cout<<y<<" ";
			c++;
		}
		if(y<=0)
		{
			y+i;
			c--;
			while(c<n)
			{
				cout<<(store+=i)<<" ";
				c++;
			}
		}
		cout<<"\n";
	}
	return 0;
}
