#include <stdio.h>

void swap(int *xp,int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp =temp;
}

void selectionSort(int arr[], int n)
{
    int i,j, min_idx;

    for(i=0;i<n-1;i++)
    {
        min_idx=i;

        for(j=i+1;j<n;j++)
        {
            if(arr[j]<arr[min_idx])
                min_idx = j;
        }

        swap(&arr[min_idx], &arr[i]);
    }
}

void printArray(int arr[], int size)
{
    int i;
    for(i=0;i<size;i++)
    {
        printf("%d ",arr[i]);
    }
    printf("\n");
}

int main()
{

    printf("\nSelection Sort\n\n");

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

    selectionSort(arr,n);
             
    printf("\nSorted array:\n");
    printArray(arr,n);

    
    printf("\n");
    return 0;
}