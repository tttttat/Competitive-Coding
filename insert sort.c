#include <math.h>
#include <stdio.h>

void insertionSort(int arr[], int n)
{
    int i, key , j;

    for(i=1;i<n;i++)
    {
        key = arr[i];
        j= i-1;

        while(j>=0 && arr[j]>key)
        {
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
}

void printArray(int arr[],int size)
{
    int i;
    for ( i=0 ; i<size ; i++)
    {
        printf("%d ",arr[i]);
    }
    printf("\n");
}

int main()
{
    printf("\nInsertion Sort\n\n");

    int n,i;
    printf("Enter Size of Array : ");
    scanf("%d",&n);
    int arr[n];

    printf("Enter elements Of the Array : ");
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }


    printf("\nInitial Array:\n");
    printArray(arr,n);

    insertionSort(arr,n);

    printf("\nSorted Array:\n");
    printArray(arr,n);
 
    printf("\n");

    return 0;
}