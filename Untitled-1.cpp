#include <iostream>
using namespace std;

int s(int n)
{
    int sum=0;
    for(int i=1; i<=n; i++) 
        if(n%i==0) sum+=i;
    return sum;
}

int abundent(int n)
{
    int ok=1;
    for(int i=1; i<n && ok; i++)
        if((double) s(i)/i>= (double) s(n)/n) ok=0;
    return ok;
}

int main()
{
    int n;
    cin>>n;
    cout<<abundent(n);
    return 0;
}
