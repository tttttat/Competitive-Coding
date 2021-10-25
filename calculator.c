#include<stdio.h>
void add()
{
    int a,b;
    printf("Enter the two integers");
    scanf("%d %d",&a,&b);
    printf("%d\n",a+b);
}
void subtract()
{
    int a,b;
    printf("Enter the two integers");
    scanf("%d %d",&a,&b);
    printf("%d\n",a-b);
}
void multiply()
{
    int a,b;
    printf("Enter the two integers");
    scanf("%d %d",&a,&b);
    printf("%d\n",a*b);
}

int main ()
{
    int ch;
    while(1)
    {
        printf("Select option\n1) add\n2) subtract\n3) multiply\n4) exit\n ");
        scanf("%d",&ch);
        if(ch==1)
        {
           add();
        }
        else if(ch==2)
        {
            subtract();
        }
        else if(ch==3)
        {
            multiply();
        }
        else if(ch==4)
        {
            break;
        }
        else
        {
            printf("Invalid choice");
        }
    }
    return 0;

}