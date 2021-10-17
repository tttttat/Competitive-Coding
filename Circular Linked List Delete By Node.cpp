#include <stdio.h>
#include <stdlib.h>


/* Basic node structure. */
struct node {
    int data;
    struct node * next;
};


/* Functions declarations */
void createList(struct node ** head, int n);
void displayList(struct node ** head);
void deleteAll(struct node ** head, int key);


int main()
{
    int n, key, data, choice;

    struct node * head = NULL;

    /* Run forever until user chooses 0 */
    while(choice != 0)
    {
        printf("--------------------------------------------\n");
        printf("        CIRCULAR LINKED LIST PROGRAM        \n");
        printf("--------------------------------------------\n");
        printf("1. Create List\n");
        printf("2. Display list\n");
        printf("3. Delete all by key\n");
        printf("0. Exit\n");
        printf("--------------------------------------------\n");
        printf("Enter your choice : ");

        scanf("%d", &choice);

        switch(choice)
        {
            case 1:
                printf("Enter number of nodes to create: ");
                scanf("%d", &n);
                createList(&head, n);
                break;

            case 2:
                displayList(&head);
                break;

            case 3:
                printf("Enter key to delete from list: ");
                scanf("%d", &key);
                deleteAll(&head, key);
                break;

            case 0:
                exit(0);
                break;

            default:
                printf("Error! Invalid choice. Please choose between 0-3");
        }

        printf("\n\n\n\n");
    }

    return 0;
}


/**
 * Delete all occurrence of an element by key from a 
 * given circular linked list.
 */
void deleteAll(struct node ** head, int key)
{
    int i, count;
    struct node *prev, *cur;

    if (*head == NULL)
    {
        printf("List is empty.\n");
        return;
    }

    count = 0;
    cur   = *head;
    prev  = cur;


    // Find node before head node
    while (prev->next != *head) 
    {
        prev = prev->next;
        count++;
    }

    // Iterate till first node
    i = 0;
    while (i <= count)
    {
        if (cur->data == key)
        {
            // Link prev node with next node of current
            if (cur->next != cur)
                prev->next = cur->next;
            else
                prev->next = NULL;

            // Adjust head node if needed
            if (cur == *head)
                *head = prev->next;

            // Delete current node
            free(cur);

            // Move current node ahead
            if (prev != NULL) 
                cur = prev->next;
            else
                cur = NULL;
        }
        else 
        {
            prev = cur;
            cur  = cur->next;
        }


        i++;

    }
}


/**
 * Create a circular linked list of n nodes.
 */
void createList(struct node ** head, int n)
{
    int i, data;
    struct node *prevNode, *newNode;

    prevNode = NULL;

    /* Creates and link n nodes */
    for(i=1; i<=n; i++)
    {
        newNode = malloc(sizeof(struct node));

        printf("Enter data of %d node: ", i);
        scanf("%d", &data);

        newNode->data = data;
        newNode->next = NULL;

        // Link the previous node with newly created node
        if (prevNode != NULL) 
            prevNode->next = newNode;

        // Adjust head node 
        if (*head == NULL)
            *head = newNode;

        // Move previous node ahead
        prevNode = newNode;
    }

    // Link last node with first node
    prevNode->next = *head;

    printf("\nCIRCULAR LINKED LIST CREATED SUCCESSFULLY\n");
}


/**
 * Display content of the linked list.
 */
void displayList(struct node ** head)
{
    struct node *current;
    int n = 1;

    if(*head == NULL)
    {
        printf("List is empty.\n");
        return;
    }

    current = *head;
    printf("DATA IN THE LIST:\n");

    do {
        printf("Data %d = %d\n", n, current->data);

        current = current->next;
        n++;
    }while(current != *head);
}
