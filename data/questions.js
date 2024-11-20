/*
const topics = [
    "Arrays",
    "Stacks and Queues",
    "Linked Lists",
    "Recursion",
    "Trees",
    "Hashing",
    "Heaps",
    "Graphs"
]
*/

const easy_arrays = [
    {
        "question": "What is an array?",
        "options": [
            "A collection of similar elements",
            "A collection of different elements",
            "A collection of elements with only letters",
            "A collection of elements with only numbers"
        ],
        "title": "Arrays",
        "difficulty": "Easy",
        "ans": 0
    },
    {
        "question": "How is memory allocated for arrays?",
        "options": [
            "Memory is allocated randomly",
            "Memory is allocated at the beginning",
            "Memory is allocated at the end",
            "Memory is allocated in the middle"
        ],
        "title": "Arrays",
        "difficulty": "Easy",
        "ans": 1
    },
    {
        "question": "What does the Insert operation do in arrays?",
        "options": [
            "Deletes an element",
            "Searches for an element",
            "Updates an element",
            "Inserts a new element"
        ],
        "title": "Arrays",
        "difficulty": "Easy",
        "ans": 3
    },
    {
        "question": "How are Python lists different from arrays?",
        "options": [
            "Python lists do not store values",
            "Python lists are not ordered",
            "Python lists can store different data types",
            "Python lists cannot be accessed randomly"
        ],
        "title": "Arrays",
        "difficulty": "Easy",
        "ans": 2
    },
    {
        "question": "What is the purpose of initializing the size of an array?",
        "options": [
            "To allocate memory",
            "To delete elements",
            "To search for elements",
            "To update elements"
        ],
        "title": "Arrays",
        "difficulty": "Easy",
        "ans": 0
    },
    {
        "question": "How are arrays stored in memory?",
        "options": [
            "In a random order",
            "In a contiguous range of memory",
            "In separate memory locations",
            "In a circular manner"
        ],
        "title": "Arrays",
        "difficulty": "Easy",
        "ans": 1
    },
    {
        "question": "What does the Delete operation do in arrays?",
        "options": [
            "Searches for an element",
            "Inserts a new element",
            "Deletes a specified element",
            "Updates an element"
        ],
        "title": "Arrays",
        "difficulty": "Easy",
        "ans": 2
    },
    {
        "question": "Why is initializing the size of an array necessary?",
        "options": [
            "To make the array unordered",
            "To hold space for elements",
            "To make the array circular",
            "To limit the number of elements"
        ],
        "title": "Arrays",
        "difficulty": "Easy",
        "ans": 1
    },
    {
        "question": "What is the purpose of the Traverse operation in arrays?",
        "options": [
            "To sort the elements",
            "To list all the items",
            "To delete elements",
            "To search for elements"
        ],
        "title": "Arrays",
        "difficulty": "Easy",
        "ans": 1
    },
    {
        "question": "How can you access array elements in any order?",
        "options": [
            "By using Python lists",
            "By initializing the size of the array",
            "By storing elements in separate memory locations",
            "By allocating memory at the end"
        ],
        "title": "Arrays",
        "difficulty": "Easy",
        "ans": 0
    }
]

const medium_arrays = [
    {
        "question": "What is the time complexity of inserting an element at the end of an array?",
        "options": [
            "O(0)",
            "O(log N)",
            "O(N)",
            "O(N^2)"
        ],
        "title": "Arrays",
        "difficulty": "Medium",
        "ans": 0
    },
    {
        "question": "Why is it important to consider the size of an array before inserting elements?",
        "options": [
            "To ensure elements are inserted in order",
            "To prevent memory overflow",
            "To speed up the insertion process",
            "To allow duplicates in the array"
        ],
        "title": "Arrays",
        "difficulty": "Medium",
        "ans": 1
    },
    {
        "question": "In which data structure is random access not efficient?",
        "options": [
            "Arrays",
            "Linked Lists",
            "Stacks",
            "Queues"
        ],
        "title": "Arrays",
        "difficulty": "Medium",
        "ans": 1
    },
    {
        "question": "What is the primary advantage of using arrays over linked lists?",
        "options": [
            "Faster insertion and deletion",
            "Dynamic memory allocation",
            "Efficient memory usage",
            "Support for complex data types"
        ],
        "title": "Arrays",
        "difficulty": "Medium",
        "ans": 2
    },
    {
        "question": "How does the time complexity of searching in an array compare to searching in a linked list?",
        "options": [
            "Array search is always faster",
            "Linked list search is always faster",
            "They have the same time complexity",
            "It depends on the size of the data structure"
        ],
        "title": "Arrays",
        "difficulty": "Medium",
        "ans": 2
    },
    {
        "question": "What happens when you exceed the predefined size of an array?",
        "options": [
            "It automatically resizes",
            "It throws an error",
            "It shifts all elements to accommodate new ones",
            "It becomes circular"
        ],
        "title": "Arrays",
        "difficulty": "Medium",
        "ans": 1
    },
    {
        "question": "How does the time complexity of traversing an array compare to traversing a linked list?",
        "options": [
            "Array traversal is always faster",
            "Linked list traversal is always faster",
            "They have the same time complexity",
            "It depends on the number of elements"
        ],
        "title": "Arrays",
        "difficulty": "Medium",
        "ans": 2
    },
    {
        "question": "What is the primary disadvantage of using arrays?",
        "options": [
            "Limited size",
            "Complex implementation",
            "Lack of memory allocation control",
            "Inefficient element access"
        ],
        "title": "Arrays",
        "difficulty": "Medium",
        "ans": 0
    },
    {
        "question": "How does the memory usage of arrays differ from linked lists?",
        "options": [
            "Arrays require more memory",
            "Linked lists require more memory",
            "They use the same amount of memory",
            "It depends on the number of elements"
        ],
        "title": "Arrays",
        "difficulty": "Medium",
        "ans": 1
    },
    {
        "question": "What is the impact of deleting an element in the middle of an array?",
        "options": [
            "No impact on memory",
            "Shifts all elements after the deleted one",
            "Reduces the size of the array",
            "Frees up memory space"
        ],
        "title": "Arrays",
        "difficulty": "Medium",
        "ans": 1
    }
]

const hard_arrays = [
    {
        "question": "Explain the difference between an unordered array and an ordered array.",
        "options": [
            "Unordered arrays have faster search operations",
            "Ordered arrays have faster insertion operations",
            "Unordered arrays do not require a key for elements",
            "Ordered arrays store elements in ascending or descending order"
        ],
        "title": "Arrays",
        "difficulty": "Hard",
        "ans": 3
    },
    {
        "question": "How does a binary search algorithm work on an ordered array?",
        "options": [
            "It compares every element in the array",
            "It divides the array in half and compares the middle element",
            "It only works on unordered arrays",
            "It deletes elements from the array"
        ],
        "title": "Arrays",
        "difficulty": "Hard",
        "ans": 1
    },
    {
        "question": "What is the purpose of using private instance variables in data structures?",
        "options": [
            "To restrict access to important values",
            "To increase memory allocation",
            "To speed up search operations",
            "To allow direct modification by calling programs"
        ],
        "title": "Arrays",
        "difficulty": "Hard",
        "ans": 0
    },
    {
        "question": "Explain the concept of logarithms in the context of data structures.",
        "options": [
            "Logarithms are used to split arrays into smaller parts",
            "Logarithms determine the number of elements in an array",
            "Logarithms represent the number of divisions needed to reach 1",
            "Logarithms control the order of elements in an array"
        ],
        "title": "Arrays",
        "difficulty": "Hard",
        "ans": 2
    },
    {
        "question": "Why do data structures typically store complex data types like records?",
        "options": [
            "To simplify the search process",
            "To restrict access to values",
            "To allow for more advanced operations",
            "To accommodate diverse information in a single element"
        ],
        "title": "Arrays",
        "difficulty": "Hard",
        "ans": 3
    },
    {
        "question": "What impact does allowing duplicate items or keys have on data structure algorithms?",
        "options": [
            "It speeds up search operations",
            "It creates unpredictable behavior",
            "It reduces memory usage",
            "It improves sorting algorithms"
        ],
        "title": "Arrays",
        "difficulty": "Hard",
        "ans": 1
    },
    {
        "question": "How does Big O notation help in comparing algorithms?",
        "options": [
            "It determines the size of the array",
            "It provides a way to measure time complexity",
            "It enforces a specific order for elements",
            "It limits the number of operations in an algorithm"
        ],
        "title": "Arrays",
        "difficulty": "Hard",
        "ans": 1
    },
    {
        "question": "What is the significance of an algorithm running in O(1) time complexity?",
        "options": [
            "It is the slowest algorithm",
            "It is the fastest algorithm",
            "It depends on the number of elements",
            "It requires logarithmic time"
        ],
        "title": "Arrays",
        "difficulty": "Hard",
        "ans": 1
    },
    {
        "question": "Why is O(N) time complexity considered fair for algorithms?",
        "options": [
            "It guarantees a linear increase in operations",
            "It allows for constant time operations",
            "It scales logarithmically with the input size",
            "It is the slowest time complexity"
        ],
        "title": "Arrays",
        "difficulty": "Hard",
        "ans": 0
    },
    {
        "question": "What is the drawback of using O(N^2) time complexity algorithms?",
        "options": [
            "They are the fastest algorithms",
            "They have unpredictable behavior",
            "They scale quadratically with input size",
            "They require minimal memory usage"
        ],
        "title": "Arrays",
        "difficulty": "Hard",
        "ans": 2
    }
]

const easy_stacksandqueues = [
    {
        "question": "What data structure follows the Last In First Out (LIFO) principle?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Array"
        ],
        "title": "Easy Stacks and Queues",
        "ans": 1
    },
    {
        "question": "Which data structure is best suited for processing activities like folding and putting away clothes to be worn next week?",
        "options": [
            "Queue",
            "Stack",
            "Priority Queue",
            "Linked List"
        ],
        "title": "Easy Stacks and Queues",
        "ans": 0
    },
    {
        "question": "When a customer is added to a checkout line, which data structure is used to represent this scenario?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Array"
        ],
        "title": "Easy Stacks and Queues",
        "ans": 0
    },
    {
        "question": "In the scenario of a maze where different paths are followed at decision points, which data structure is most suitable?",
        "options": [
            "Stack",
            "Queue",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Easy Stacks and Queues",
        "ans": 0
    },
    {
        "question": "Which data structure is recommended for handling interruptions to a task you’re working on?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Easy Stacks and Queues",
        "ans": 1
    },
    {
        "question": "Which data structure has the First In First Out (FIFO) characteristic?",
        "options": [
            "Stack",
            "Queue",
            "Linked List",
            "Array"
        ],
        "title": "Easy Stacks and Queues",
        "ans": 1
    },
    {
        "question": "In an e-commerce website, which data structure is ideal for handling order requests?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Easy Stacks and Queues",
        "ans": 0
    },
    {
        "question": "Which data structure is suitable for triaging patients arriving at hospitals during a disaster with limited resources?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Easy Stacks and Queues",
        "ans": 3
    },
    {
        "question": "When remembering events in your life, which data structure is most similar to how they are stored in your brain like a stack?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Easy Stacks and Queues",
        "ans": 1
    },
    {
        "question": "Which data structure is appropriate for following different paths at decision points in a maze?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Easy Stacks and Queues",
        "ans": 1
    }
]

const medium_stacksandqueues = [
    {
        "question": "When folding rags to be used in cleaning, which data structure would be most efficient?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Medium Stacks and Queues",
        "ans": 1
    },
    {
        "question": "For evaluating arithmetic expressions by translating them into postfix notation, which data structure is commonly used?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Medium Stacks and Queues",
        "ans": 1
    },
    {
        "question": "If you push the numbers 10, 20, 30, and 40 onto a stack in that order, then pop three items, which number remains on the stack?",
        "options": [
            "10",
            "20",
            "30",
            "40"
        ],
        "title": "Medium Stacks and Queues",
        "ans": 2
    },
    {
        "question": "Which data structure is most suitable for parsing arithmetic expressions?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Medium Stacks and Queues",
        "ans": 1
    },
    {
        "question": "What distinguishes a stack from a queue in terms of their data access patterns?",
        "options": [
            "Stack follows LIFO, Queue follows FIFO",
            "Stack follows FIFO, Queue follows LIFO",
            "Stack allows random access, Queue is sequential access only",
            "Stack has no restriction on order, Queue is strictly ordered"
        ],
        "title": "Medium Stacks and Queues",
        "ans": 0
    },
    {
        "question": "In an infix arithmetic expression, where is the operator positioned in relation to the operands?",
        "options": [
            "Before both operands",
            "After the first operand",
            "Between the two operands",
            "After the second operand"
        ],
        "title": "Medium Stacks and Queues",
        "ans": 2
    },
    {
        "question": "Which data structure is recommended for storing and retrieving items based on the Last In First Out principle?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Medium Stacks and Queues",
        "ans": 1
    },
    {
        "question": "When evaluating arithmetic expressions, why is a stack useful for translating infix to postfix notation?",
        "options": [
            "Allows parallel processing of operands",
            "Enables efficient recursion",
            "Maintains correct order of operations",
            "Prevents data corruption"
        ],
        "title": "Medium Stacks and Queues",
        "ans": 2
    },
    {
        "question": "Which data structure is most appropriate for managing interruptions to a task by storing them in order of occurrence?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Medium Stacks and Queues",
        "ans": 1
    },
    {
        "question": "For handling order requests on an e-commerce website, which data structure is effective for maintaining the order of requests received?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Priority Queue"
        ],
        "title": "Medium Stacks and Queues",
        "ans": 0
    }
]

const hard_stacksandqueues = [
    {
        "question": "In the context of a disaster scenario with limited resources, why is a priority queue more suitable than a regular queue for triaging patients?",
        "options": [
            "Allows for random access of patients",
            "Enables faster insertion of patients",
            "Prioritizes patients based on severity",
            "Guarantees first-come-first-served order"
        ],
        "title": "Hard Stacks and Queues",
        "ans": 2
    },
    {
        "question": "Explain the process of evaluating an arithmetic expression using a stack to convert from infix to postfix notation.",
        "options": [
            "Push operands onto the stack, pop operators when precedence is lower",
            "Push operators onto the stack, pop operands when precedence is higher",
            "Evaluate the expression from right to left",
            "Apply operators without using a stack"
        ],
        "title": "Hard Stacks and Queues",
        "ans": 1
    },
    {
        "question": "What advantage does a priority queue offer over a regular queue in terms of data access and processing?",
        "options": [
            "Allows for parallel processing of data",
            "Provides constant-time performance for all operations",
            "Facilitates efficient sorting of items",
            "Enables retrieval based on priority levels"
        ],
        "title": "Hard Stacks and Queues",
        "ans": 3
    },
    {
        "question": "How does a stack differ from a priority queue in terms of data retrieval and removal?",
        "options": [
            "Stack allows for frequent insertions and deletions",
            "Priority queue ensures constant-time retrieval of the highest-priority item",
            "Stack follows LIFO order, priority queue follows FIFO order",
            "Priority queue allows random access to items"
        ],
        "title": "Hard Stacks and Queues",
        "ans": 2
    },
    {
        "question": "Discuss the role of a stack in the context of an infix arithmetic expression evaluation compared to a postfix expression evaluation.",
        "options": [
            "Stack is essential for postfix evaluation only",
            "Stack is used for translating infix to postfix notation and evaluating postfix expressions",
            "Stack is not required for either infix or postfix evaluation",
            "Stack is used for translating postfix to infix notation"
        ],
        "title": "Hard Stacks and Queues",
        "ans": 1
    },
    {
        "question": "When evaluating arithmetic expressions, how does a queue differ from a stack in terms of data access patterns and processing order?",
        "options": [
            "Queue follows LIFO order, stack follows FIFO order",
            "Queue allows for efficient sorting, stack does not",
            "Queue is best for recursive algorithms, stack for iterative",
            "Queue allows for FIFO access, stack for LIFO"
        ],
        "title": "Hard Stacks and Queues",
        "ans": 3
    },
    {
        "question": "Explain the significance of using a stack for remembering events in your life compared to a queue or a priority queue.",
        "options": [
            "Stack provides random access to memories",
            "Queue ensures chronological order of events",
            "Priority queue organizes memories by importance",
            "Stack mimics the LIFO nature of memory retrieval"
        ],
        "title": "Hard Stacks and Queues",
        "ans": 3
    },
    {
        "question": "How does a stack-based approach differ from a queue-based approach in handling interruptions to tasks?",
        "options": [
            "Stack handles the most recent interruption first",
            "Queue allows for faster access to recent interruptions",
            "Stack is efficient for parallel processing of interruptions",
            "Queue provides LIFO retrieval of interruptions"
        ],
        "title": "Hard Stacks and Queues",
        "ans": 0
    },
    {
        "question": "When folding and putting away clothes to be worn next week, explain why using a stack is more appropriate than a queue.",
        "options": [
            "Stack organizes clothes by color, queue does not",
            "Stack allows for easy retrieval of most recently folded clothes",
            "Queue ensures FIFO order of clothing items",
            "Stack maintains the order in which clothes were folded"
        ],
        "title": "Hard Stacks and Queues",
        "ans": 1
    },
    {
        "question": "Discuss the advantages of using a stack to navigate different paths in a maze compared to a queue.",
        "options": [
            "Stack allows for backtracking in the maze",
            "Queue ensures the shortest path is always taken",
            "Stack ensures the last decision is revisited first",
            "Queue provides random access to maze paths"
        ],
        "title": "Hard Stacks and Queues",
        "ans": 0
    }
]

const easy_linkedlist = [
    {
        "question": "What is the main advantage of using a linked list over an array?",
        "options": [
            "Constant time access to elements",
            "Contiguous memory allocation",
            "Dynamic size",
            "Random access of elements"
        ],
        "title": "Easy Linked Lists",
        "ans": 2
    },
    {
        "question": "Which of the following is not a type of linked list?",
        "options": [
            "Singly linked list",
            "Doubly linked list",
            "Circular linked list",
            "Linear linked list"
        ],
        "title": "Easy Linked Lists",
        "ans": 3
    },
    {
        "question": "In a singly linked list, each node contains a reference to?",
        "options": [
            "Previous node",
            "Next node",
            "Both previous and next nodes",
            "None of the above"
        ],
        "title": "Easy Linked Lists",
        "ans": 1
    },
    {
        "question": "Which operation is not efficient in a linked list?",
        "options": [
            "Insertion in the middle",
            "Deletion of first element",
            "Random access of elements",
            "Traversal of the list"
        ],
        "title": "Easy Linked Lists",
        "ans": 2
    },
    {
        "question": "What is the time complexity for accessing an element in a linked list?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        "title": "Easy Linked Lists",
        "ans": 2
    },
    {
        "question": "Which type of linked list allows traversal in both directions?",
        "options": [
            "Singly linked list",
            "Doubly linked list",
            "Circular linked list",
            "Dynamic linked list"
        ],
        "title": "Easy Linked Lists",
        "ans": 1
    },
    {
        "question": "Which operation can be performed more efficiently on a linked list than an array?",
        "options": [
            "Searching for an element by index",
            "Insertion at the end",
            "Deletion of elements",
            "Random access of elements"
        ],
        "title": "Easy Linked Lists",
        "ans": 2
    },
    {
        "question": "Which node in a doubly linked list contains a null reference for the next node?",
        "options": [
            "First node",
            "Last node",
            "Middle node",
            "All nodes"
        ],
        "title": "Easy Linked Lists",
        "ans": 1
    },
    {
        "question": "Which data structure can be used to implement a linked list efficiently?",
        "options": [
            "Array",
            "Stack",
            "Queue",
            "None of the above"
        ],
        "title": "Easy Linked Lists",
        "ans": 3
    },
    {
        "question": "In a circular linked list, what is the condition to stop traversing the list?",
        "options": [
            "Null reference",
            "End of list marker",
            "Circular reference",
            "None of the above"
        ],
        "title": "Easy Linked Lists",
        "ans": 2
    }
]

const medium_linkedlist = [
    {
        "question": "What is the difference between a singly linked list and a doubly linked list?",
        "options": [
            "Singly linked lists allow traversal in one direction, while doubly linked lists allow traversal in both directions",
            "Singly linked lists have a null reference at the end, while doubly linked lists have a null reference at the beginning",
            "Singly linked lists contain data elements, while doubly linked lists contain only references to other nodes",
            "Singly linked lists have constant time access to elements, while doubly linked lists have linear time access"
        ],
        "title": "Medium Linked Lists",
        "ans": 0
    },
    {
        "question": "Which type of linked list can efficiently represent loop-like orderings?",
        "options": [
            "Singly linked list",
            "Doubly linked list",
            "Circular linked list",
            "Dynamic linked list"
        ],
        "title": "Medium Linked Lists",
        "ans": 2
    },
    {
        "question": "How does the setNext() method impact the functionality of a linked list?",
        "options": [
            "It simplifies the representation of lists",
            "It makes finding items with matching keys more efficient",
            "It allows for constant time access to elements",
            "It eliminates the need for a special value indicating the end of a list"
        ],
        "title": "Medium Linked Lists",
        "ans": 3
    },
    {
        "question": "Which operation requires changing the least number of references in a linked list?",
        "options": [
            "Insertion in the middle",
            "Deletion of last element",
            "Traversal of the list",
            "Creation of a new list"
        ],
        "title": "Medium Linked Lists",
        "ans": 2
    },
    {
        "question": "When comparing the efficiency of arrays and linked lists for deleting a record with a certain key, which is faster?",
        "options": [
            "Arrays",
            "Linked lists",
            "Both have the same efficiency",
            "It depends on the size of the data"
        ],
        "title": "Medium Linked Lists",
        "ans": 1
    },
    {
        "question": "Which type of linked list would be most suitable for implementing a queue?",
        "options": [
            "Singly linked list",
            "Doubly linked list",
            "Circular linked list",
            "Dynamic linked list"
        ],
        "title": "Medium Linked Lists",
        "ans": 0
    },
    {
        "question": "What is a key advantage of using iterators with linked lists?",
        "options": [
            "Allows for fast random access of elements",
            "Simplifies the implementation of circular lists",
            "Facilitates traversal without exposing the underlying structure",
            "Enables dynamic resizing of linked lists"
        ],
        "title": "Medium Linked Lists",
        "ans": 2
    },
    {
        "question": "Which operation can iterators be particularly useful for in linked lists?",
        "options": [
            "Insertion at the beginning",
            "Deletion of specific elements",
            "Searching for elements by index",
            "Traversal of the list"
        ],
        "title": "Medium Linked Lists",
        "ans": 1
    },
    {
        "question": "What does the link = Link(datum, self.getNext()) statement signify in the linked list insert() method?",
        "options": [
            "Assigns data to the first link in the list",
            "Sets the next reference for the new link",
            "Deletes the current link",
            "None of the above"
        ],
        "title": "Medium Linked Lists",
        "ans": 1
    },
    {
        "question": "Which type of linked list is best suited for implementing a priority queue?",
        "options": [
            "Singly linked list",
            "Doubly linked list",
            "Circular linked list",
            "Dynamic linked list"
        ],
        "title": "Medium Linked Lists",
        "ans": 1
    }
]

const hard_linkedlists = [
    {
        "question": "How does the time complexity of searching for an element by index differ between arrays and linked lists?",
        "options": [
            "Arrays have O(1) complexity, while linked lists have O(n)",
            "Arrays have O(log n) complexity, while linked lists have O(1)",
            "Arrays have O(n) complexity, while linked lists have O(log n)",
            "Arrays have O(n^2) complexity, while linked lists have O(n)"
        ],
        "title": "Hard Linked Lists",
        "ans": 0
    },
    {
        "question": "In a circular linked list, how can the end of the list be identified?",
        "options": [
            "Null reference",
            "Circular reference",
            "Special end marker",
            "Last node points to the first node"
        ],
        "title": "Hard Linked Lists",
        "ans": 3
    },
    {
        "question": "What is the consequence of making the setNext() method of a link object public?",
        "options": [
            "Improves the efficiency of insertion operations",
            "May lead to unintended changes in the list structure",
            "Enhances the security of the linked list",
            "Enables constant time access to elements"
        ],
        "title": "Hard Linked Lists",
        "ans": 1
    },
    {
        "question": "Which type of linked list is more suitable for implementing an undo stack in a text editor?",
        "options": [
            "Singly linked list",
            "Doubly linked list",
            "Circular linked list",
            "Dynamic linked list"
        ],
        "title": "Hard Linked Lists",
        "ans": 1
    },
    {
        "question": "What is the primary advantage of using a doubly linked list over a singly linked list?",
        "options": [
            "Constant time access to elements",
            "Reduced memory usage",
            "Efficient traversal in both directions",
            "Faster insertion at the beginning"
        ],
        "title": "Hard Linked Lists",
        "ans": 2
    },
    {
        "question": "When would a circular linked list be preferred over a doubly linked list?",
        "options": [
            "When memory efficiency is crucial",
            "When bidirectional traversal is required",
            "When representing loop-like structures",
            "When frequent insertions and deletions are needed"
        ],
        "title": "Hard Linked Lists",
        "ans": 2
    },
    {
        "question": "What is the impact of using Python generators in relation to linked lists?",
        "options": [
            "Enables faster random access of elements",
            "Simplifies the implementation of circular lists",
            "Aids in creating infinite sequences like Fibonacci",
            "Allows constant time access to elements"
        ],
        "title": "Hard Linked Lists",
        "ans": 2
    },
    {
        "question": "In a doubly linked list, which node contains a null reference for the previous node?",
        "options": [
            "First node",
            "Last node",
            "Middle node",
            "All nodes"
        ],
        "title": "Hard Linked Lists",
        "ans": 0
    },
    {
        "question": "Which type of linked list would be most suitable for implementing an LRU (Least Recently Used) cache?",
        "options": [
            "Singly linked list",
            "Doubly linked list",
            "Circular linked list",
            "Dynamic linked list"
        ],
        "title": "Hard Linked Lists",
        "ans": 1
    },
    {
        "question": "What role do iterators play in improving the efficiency of linked lists?",
        "options": [
            "Provide constant time access to elements",
            "Facilitate dynamic resizing of linked lists",
            "Allow traversal without direct access to link structures",
            "Enhance the security of the linked list"
        ],
        "title": "Hard Linked Lists",
        "ans": 2
    }
]

const easy_recursion = [
    {
        "question": "What is a characteristic of recursive routines?",
        "options": [
            "They call themselves.",
            "Each call performs its work on a smaller version of the same problem.",
            "When a smaller version of the problem is too complex, control passes back to the caller to try a different approach.",
            "Some versions of the problem don’t require calling the recursive routine."
        ],
        "title": "Easy Recursion",
        "ans": 0
    },
    {
        "question": "In recursion, where are the copies of the argument passed to a function stored?",
        "options": [
            "In a variable in the function",
            "In a field of a class",
            "In a placeholder variable of the problem description record",
            "On a stack"
        ],
        "title": "Easy Recursion",
        "ans": 3
    },
    {
        "question": "When a program calls a recursive function, what happens to the control flow?",
        "options": [
            "It stays within the same function",
            "It passes control to a different function",
            "It alternates between functions",
            "It depends on the programming language"
        ],
        "title": "Easy Recursion",
        "ans": 0
    },
    {
        "question": "What is the purpose of base cases in recursive functions?",
        "options": [
            "To make the function more complex",
            "To provide the starting point for recursion",
            "To skip certain recursive calls",
            "To store intermediate results"
        ],
        "title": "Easy Recursion",
        "ans": 1
    },
    {
        "question": "In a recursive algorithm, what does the recursion depth represent?",
        "options": [
            "The number of times the function calls itself",
            "The level of nested loops",
            "The size of the input data",
            "The efficiency of the algorithm"
        ],
        "title": "Easy Recursion",
        "ans": 0
    },
    {
        "question": "What is the key benefit of using recursion in programming?",
        "options": [
            "Reduced memory usage",
            "Improved readability",
            "Simplified logic",
            "Faster execution"
        ],
        "title": "Easy Recursion",
        "ans": 2
    },
    {
        "question": "Which data structure is commonly used to implement recursion?",
        "options": [
            "Queue",
            "Stack",
            "Linked List",
            "Array"
        ],
        "title": "Easy Recursion",
        "ans": 1
    },
    {
        "question": "What happens if a recursive function lacks a base case?",
        "options": [
            "It will run indefinitely",
            "It will terminate immediately",
            "It will throw an error",
            "It will skip the base case check"
        ],
        "title": "Easy Recursion",
        "ans": 0
    },
    {
        "question": "What is the role of the return statement in a recursive function?",
        "options": [
            "To exit the program",
            "To restart the function",
            "To pass control to the next function",
            "To return a value to the calling function"
        ],
        "title": "Easy Recursion",
        "ans": 3
    },
    {
        "question": "Which of the following statements is true about tail recursion?",
        "options": [
            "It requires more memory than non-tail recursion",
            "It can always be optimized by the compiler",
            "It involves additional operations after the recursive call",
            "It is less efficient than non-tail recursion"
        ],
        "title": "Easy Recursion",
        "ans": 2
    }
]

const medium_recursion = [
    {
        "question": "In recursion, what is the significance of the call stack?",
        "options": [
            "It stores local variables for each recursive call",
            "It manages the order of function calls",
            "It tracks the recursion depth",
            "It stores the return addresses of function calls"
        ],
        "title": "Medium Recursion",
        "ans": 1
    },
    {
        "question": "What is the difference between direct and indirect recursion?",
        "options": [
            "Direct recursion involves a single function calling itself, while indirect recursion involves two or more functions calling each other",
            "Direct recursion is more memory-efficient than indirect recursion",
            "Indirect recursion is limited to a fixed number of recursive calls",
            "Direct recursion always results in a stack overflow"
        ],
        "title": "Medium Recursion",
        "ans": 0
    },
    {
        "question": "How does tail recursion differ from non-tail recursion in terms of memory usage?",
        "options": [
            "Tail recursion uses more memory due to the need to store return addresses",
            "Non-tail recursion uses more memory due to the need to maintain a call stack",
            "Tail recursion and non-tail recursion have similar memory usage",
            "Tail recursion avoids excessive memory usage by optimizing recursive calls"
        ],
        "title": "Medium Recursion",
        "ans": 3
    },
    {
        "question": "What is the significance of the base case in recursion?",
        "options": [
            "It prevents the function from executing",
            "It defines the exit condition for the recursive calls",
            "It increases the complexity of the recursion",
            "It allows the function to skip certain recursive calls"
        ],
        "title": "Medium Recursion",
        "ans": 1
    },
    {
        "question": "When does a recursive function encounter a stack overflow error?",
        "options": [
            "When the base case is not defined",
            "When the recursion depth exceeds the stack size",
            "When the function returns a non-base case value",
            "When the function makes too many recursive calls"
        ],
        "title": "Medium Recursion",
        "ans": 1
    },
    {
        "question": "What is the role of the stack in tracking recursive calls?",
        "options": [
            "It ensures that each recursive call has a unique identifier",
            "It maintains the order of function calls and their local variables",
            "It limits the number of recursive calls that can be made",
            "It stores intermediate results of recursive functions"
        ],
        "title": "Medium Recursion",
        "ans": 1
    },
    {
        "question": "How does recursion contribute to solving problems like tree traversal?",
        "options": [
            "Recursion simplifies the logic by avoiding iterative loops",
            "Recursion enables handling infinite data structures",
            "Recursion allows for faster traversal of tree structures",
            "Recursion limits the depth of tree traversal"
        ],
        "title": "Medium Recursion",
        "ans": 0
    },
    {
        "question": "What is the primary advantage of using recursion over iteration in certain scenarios?",
        "options": [
            "Recursion always results in faster execution",
            "Recursion avoids the need for base cases",
            "Recursion provides a more intuitive approach to certain problems",
            "Recursion consumes less memory than iteration"
        ],
        "title": "Medium Recursion",
        "ans": 2
    },
    {
        "question": "How does recursion handle problems with overlapping subproblems?",
        "options": [
            "By creating separate instances for each subproblem",
            "By storing the solutions to subproblems and reusing them",
            "By ignoring subproblems with similar solutions",
            "By increasing the recursion depth for each subproblem"
        ],
        "title": "Medium Recursion",
        "ans": 1
    },
    {
        "question": "What is the relationship between recursion and the concept of self-referentiality?",
        "options": [
            "Recursion avoids self-referentiality by restricting function calls",
            "Recursion relies on self-referentiality to define its behavior",
            "Recursion and self-referentiality are unrelated concepts",
            "Recursion handles self-referentiality through external libraries"
        ],
        "title": "Medium Recursion",
        "ans": 1
    }
]

const hard_recursion = [
    {
        "question": "What is the significance of memoization in recursive algorithms?",
        "options": [
            "It ensures that the recursion depth is limited",
            "It prevents stack overflow errors",
            "It stores intermediate results to avoid redundant computations",
            "It optimizes tail recursion"
        ],
        "title": "Hard Recursion",
        "ans": 2
    },
    {
        "question": "How does dynamic programming relate to recursion?",
        "options": [
            "Dynamic programming always replaces recursion in algorithms",
            "Dynamic programming uses recursion as a key technique for problem-solving",
            "Dynamic programming eliminates the need for base cases in recursive functions",
            "Dynamic programming is incompatible with recursive algorithms"
        ],
        "title": "Hard Recursion",
        "ans": 1
    },
    {
        "question": "What challenges can arise when converting a recursive function to an iterative one?",
        "options": [
            "Iterative functions are less efficient than their recursive counterparts",
            "Iterative functions require more memory than recursive functions",
            "Maintaining the stack-like behavior of recursion can be complex",
            "Iterative functions always result in stack overflow errors"
        ],
        "title": "Hard Recursion",
        "ans": 2
    },
    {
        "question": "How does recursion contribute to understanding fractal patterns?",
        "options": [
            "Recursion simplifies the generation of fractals",
            "Fractals cannot be represented using recursion",
            "Recursion is not applicable to fractal analysis",
            "Recursion introduces errors in fractal calculations"
        ],
        "title": "Hard Recursion",
        "ans": 0
    },
    {
        "question": "What is the primary limitation of using recursion in resource-constrained environments?",
        "options": [
            "Recursion requires excessive memory allocation",
            "Recursion lacks support for dynamic memory management",
            "Recursion may lead to stack overflow due to limited stack size",
            "Recursion is incompatible with low-level programming languages"
        ],
        "title": "Hard Recursion",
        "ans": 2
    },
    {
        "question": "How can recursion be used to solve problems involving backtracking?",
        "options": [
            "Recursion eliminates the need for backtracking algorithms",
            "Recursion handles backtracking by maintaining a global state",
            "Recursion explores all possible solutions by trying different paths",
            "Recursion prevents the exploration of alternative solutions"
        ],
        "title": "Hard Recursion",
        "ans": 2
    },
    {
        "question": "What is the impact of excessive recursion depth on algorithm performance?",
        "options": [
            "Excessive recursion depth always improves algorithm efficiency",
            "Excessive recursion depth may result in stack overflow",
            "Excessive recursion depth speeds up the algorithm execution",
            "Excessive recursion depth reduces the need for base cases"
        ],
        "title": "Hard Recursion",
        "ans": 1
    },
    {
        "question": "How does recursion influence the concept of code readability and maintainability?",
        "options": [
            "Recursion enhances code readability by reducing complexity",
            "Recursion hinders code maintainability due to its unpredictable nature",
            "Recursion simplifies code maintenance by isolating recursive calls",
            "Recursion has no impact on code readability or maintainability"
        ],
        "title": "Hard Recursion",
        "ans": 0
    },
    {
        "question": "What role does the call stack play in managing recursive function calls?",
        "options": [
            "The call stack is unnecessary in recursive functions",
            "The call stack ensures proper execution order of recursive calls",
            "The call stack optimizes memory usage in recursive functions",
            "The call stack replaces recursion in iterative algorithms"
        ],
        "title": "Hard Recursion",
        "ans": 1
    },
    {
        "question": "How does recursion contribute to the understanding of mathematical induction?",
        "options": [
            "Recursion contradicts the principles of mathematical induction",
            "Recursion provides a practical example of mathematical induction",
            "Recursion is irrelevant to the concept of mathematical induction",
            "Recursion simplifies mathematical induction by avoiding proofs"
        ],
        "title": "Hard Recursion",
        "ans": 1
    }
]

const easy_trees = [
    {
        "question": "In a binary tree, what is the maximum number of children a node can have?",
        "options": [
            "0",
            "1",
            "2",
            "3"
        ],
        "title": "Easy Trees",
        "ans": 2
    },
    {
        "question": "What is the property that makes an AVL tree different from a binary search tree?",
        "options": [
            "Balanced height",
            "No left child",
            "No right child",
            "Unordered nodes"
        ],
        "title": "Easy Trees",
        "ans": 0
    },
    {
        "question": "In a red-black tree, what color can a node be?",
        "options": [
            "Red",
            "Green",
            "Blue",
            "Yellow"
        ],
        "title": "Easy Trees",
        "ans": 0
    },
    {
        "question": "Which of the following is not a self-balancing binary search tree?",
        "options": [
            "AVL tree",
            "Red-black tree",
            "Binary heap",
            "Splay tree"
        ],
        "title": "Easy Trees",
        "ans": 2
    },
    {
        "question": "What is the maximum height of an AVL tree with 10 nodes?",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "title": "Easy Trees",
        "ans": 2
    },
    {
        "question": "Which type of tree allows for a node to have up to 4 children?",
        "options": [
            "AVL tree",
            "Red-black tree",
            "2-3-4 tree",
            "Binary search tree"
        ],
        "title": "Easy Trees",
        "ans": 2
    },
    {
        "question": "In a red-black tree, what does a double-black node indicate?",
        "options": [
            "Node with two red children",
            "Node with two black children",
            "Node that is unbalanced",
            "Node that needs to be removed"
        ],
        "title": "Easy Trees",
        "ans": 2
    },
    {
        "question": "What is the purpose of rotations in AVL trees?",
        "options": [
            "To change node colors",
            "To maintain balance",
            "To add new nodes",
            "To remove nodes"
        ],
        "title": "Easy Trees",
        "ans": 1
    },
    {
        "question": "Which tree structure is known for having color-coded nodes to maintain balance?",
        "options": [
            "Binary search tree",
            "AVL tree",
            "Red-black tree",
            "2-3-4 tree"
        ],
        "title": "Easy Trees",
        "ans": 2
    },
    {
        "question": "What is the maximum height of a red-black tree with 15 nodes?",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "title": "Easy Trees",
        "ans": 1
    }
    
]

const medium_trees = [
    {
        "question": "What is the time complexity for searching in a balanced binary search tree?",
        "options": [
            "O(1)",
            "O(log N)",
            "O(N)",
            "O(N^2)"
        ],
        "title": "Medium Trees",
        "ans": 1
    },
    {
        "question": "How does a red-black tree ensure balance during insertions and deletions?",
        "options": [
            "By rotating nodes",
            "By changing node colors",
            "Both rotating nodes and changing node colors",
            "None of the above"
        ],
        "title": "Medium Trees",
        "ans": 2
    },
    {
        "question": "What is the maximum number of children a node can have in an AVL tree?",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "title": "Medium Trees",
        "ans": 0
    },
    {
        "question": "Which of the following is a property of red-black trees?",
        "options": [
            "All leaf nodes are at the same level",
            "All nodes of the same color have the same value",
            "All nodes that are black have two children",
            "All paths from any node to its leaf nodes contain the same number of black nodes"
        ],
        "title": "Medium Trees",
        "ans": 3
    },
    {
        "question": "What is the main benefit of using a red-black tree over a binary search tree?",
        "options": [
            "Consistently balanced structure",
            "Smaller memory usage",
            "No need for rotations",
            "No duplicate paths"
        ],
        "title": "Medium Trees",
        "ans": 0
    },
    {
        "question": "In an AVL tree, what is the maximum height difference allowed between the left and right subtrees of any node?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "title": "Medium Trees",
        "ans": 0
    },
    {
        "question": "Which tree structure is known for its sensitivity to the order of insertions?",
        "options": [
            "2-3-4 tree",
            "Red-black tree",
            "Binary search tree",
            "AVL tree"
        ],
        "title": "Medium Trees",
        "ans": 2
    },
    {
        "question": "What is the maximum height of a balanced binary tree with 15 nodes?",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "title": "Medium Trees",
        "ans": 2
    },
    {
        "question": "How does a red-black tree handle the case of a double-black node?",
        "options": [
            "Recoloring",
            "Rotation",
            "Restructuring",
            "Deletion"
        ],
        "title": "Medium Trees",
        "ans": 2
    },
    {
        "question": "What property of AVL trees distinguishes them from other binary search trees?",
        "options": [
            "Color-coded nodes",
            "Balanced height",
            "Degree of nodes",
            "Sibling relationships"
        ],
        "title": "Medium Trees",
        "ans": 1
    }
]


const hard_trees = [
    {
        "question": "Explain the concept of trinode restructuring in AVL trees and how it helps maintain balance.",
        "options": [
            "Trinode restructuring involves restructuring three subtrees to maintain balance by rotating nodes; it prevents the tree from becoming unbalanced after insertions or deletions.",
            "Trinode restructuring balances the tree by splitting nodes into three categories based on their depth; it ensures that each level of the tree has a uniform distribution of nodes.",
            "Trinode restructuring reorganizes three levels of the tree during insertions to achieve logarithmic height; it results in fewer rotations and improved search performance.",
            "Trinode restructuring adjusts the balance factors of three nodes after balancing operations; it reduces the number of restructuring operations needed to maintain the height-balance property."
        ],
        "title": "Hard Trees",
        "ans": 0
    },
    {
        "question": "Discuss the trade-offs between AVL trees and Red-Black trees in terms of balancing complexity and performance.",
        "options": [
            "AVL trees have simpler balancing strategies but lower overall performance compared to Red-Black trees.",
            "Red-Black trees require more complex balancing operations but provide faster search performance than AVL trees.",
            "AVL trees offer a more balanced tree structure with less performance overhead, while Red-Black trees have more intricate balancing mechanisms for improved efficiency.",
            "Red-Black trees prioritize balancing complexity over search performance, whereas AVL trees focus on maintaining a consistent height for optimal search operations."
        ],
        "title": "Hard Trees",
        "ans": 2
    },
    {
        "question": "How does the height-balanced property in AVL trees impact the efficiency of tree operations compared to other tree structures?",
        "options": [
            "The height-balanced property ensures logarithmic height, leading to faster search operations than binary search trees.",
            "AVL trees maintain a balanced structure using fewer rotations, resulting in quicker insertions and deletions than Red-Black trees.",
            "The height-balanced property allows for constant-time search operations, surpassing the performance of (2,4) trees and other balanced tree structures.",
            "AVL trees achieve improved efficiency by enforcing height balance, outperforming general trees and unbalanced binary trees in search and update operations."
        ],
        "title": "Hard Trees",
        "ans": 3
    },
    {
        "question": "Explain the concept of trinode restructuring in the context of AVL trees and how it contributes to maintaining balance.",
        "options": [
            "Trinode restructuring involves three nodes and is used to adjust the balance factors during tree rotations; it ensures that the tree remains height-balanced after insertions or deletions.",
            "Trinode restructuring reorganizes three levels of the tree simultaneously to improve search performance; it is a key operation in AVL trees to manage subtree heights effectively.",
            "Trinode restructuring optimizes the tree height by restructuring nodes in groups of three; it is essential for maintaining the logarithmic height property and efficient search operations.",
            "Trinode restructuring redistributes nodes across three subtrees to balance the tree effectively; it minimizes the number of rotations needed to restore balance in AVL trees."
        ],
        "title": "Hard Trees",
        "ans": 0
    },
    {
        "question": "Discuss the challenges of balancing operations in tree structures like AVL trees and Red-Black trees and their impact on overall performance.",
        "options": [
            "Balancing operations in AVL trees and Red-Black trees introduce overhead that can slow down search operations but ensure a balanced tree structure.",
            "The complexity of balancing operations in AVL trees and Red-Black trees directly impacts search performance but guarantees logarithmic height.",
            "Balancing challenges in AVL trees and Red-Black trees lead to frequent restructuring, affecting efficiency but maintaining a balanced tree.",
            "The intricacy of balancing in AVL trees and Red-Black trees enhances search efficiency at the cost of increased restructuring complexity."
        ],
        "title": "Hard Trees",
        "ans": 1
    },
    {
        "question": "How does the height-balanced property in AVL trees contribute to the overall efficiency of search and update operations?",
        "options": [
            "The height-balanced property ensures that each node has the same number of children, optimizing search performance.",
            "Maintaining height balance in AVL trees guarantees logarithmic height, leading to faster search and update operations.",
            "The height-balanced property reduces the need for restructuring, resulting in constant-time operations for search and updates.",
            "AVL trees achieve efficient search and update operations by balancing subtrees, enabling faster access to data than other tree structures."
        ],
        "title": "Hard Trees",
        "ans": 1
    },
    {
        "question": "Evaluate the impact of rebalancing strategies in AVL trees on the overall performance of tree operations.",
        "options": [
            "Rebalancing in AVL trees leads to increased restructuring overhead but ensures a balanced tree for efficient search operations.",
            "The rebalancing strategies in AVL trees optimize performance by minimizing rotations and maintaining a consistent height.",
            "AVL trees achieve superior performance by balancing nodes through efficient restructuring, resulting in fast search and update operations.",
            "The complexity of rebalancing in AVL trees enhances search efficiency but may introduce overhead in certain scenarios."
        ],
        "title": "Hard Trees",
        "ans": 2
    },
    {
        "question": "Discuss the complexity of maintaining balance in AVL trees and how it impacts the efficiency of search operations.",
        "options": [
            "The complexity of maintaining balance in AVL trees affects search performance by introducing overhead in restructuring.",
            "AVL trees balance complexity with performance, ensuring logarithmic height for efficient search operations.",
            "Efficient balancing in AVL trees minimizes restructuring overhead, leading to improved search efficiency.",
            "Balancing operations in AVL trees enhance search performance by optimizing tree height and reducing search time."
        ],
        "title": "Hard Trees",
        "ans": 1
    },
    {
        "question": "Compare the efficiency of search operations in AVL trees with other tree structures and explain the role of balancing in performance.",
        "options": [
            "AVL trees outperform other tree structures due to balanced height and minimal restructuring; balancing ensures consistent efficiency in search operations.",
            "Search efficiency in AVL trees surpasses that of binary search trees by maintaining logarithmic height and minimizing restructuring overhead.",
            "Balancing in AVL trees optimizes search performance by reducing comparisons and ensuring fast access to data compared to unbalanced structures.",
            "The balancing mechanism in AVL trees enhances search efficiency by maintaining a balanced structure for quick search and update operations."
        ],
        "title": "Hard Trees",
        "ans": 3
    },
    {
        "question": "How does the removal of a node in a Red-Black tree affect its properties, and what operations are required to restore balance?",
        "options": [
            "Removing a node can violate the black-height property; balance is restored using rotations and recoloring.",
            "Node removal disrupts the red-red conflict property; the tree is restructured using trinode rotations.",
            "Removing a node violates the binary search tree property; balance is restored by swapping the nodes of subtrees.",
            "Node removal in a Red-Black tree does not affect its properties due to the tree's inherent self-balancing mechanism."
        ],
        "title": "Hard Trees",
        "ans": 0
    }
]

const easy_hashing = [
    {
        "question": "What is the primary purpose of using hashing in data structures?",
        "options": [
            "To sort data efficiently",
            "To store data in a random order",
            "To quickly retrieve data based on a key",
            "To create duplicate copies of data"
        ],
        "title": "Easy Hashing",
        "ans": 2
    },
    {
        "question": "Which of the following techniques is commonly used to handle collisions in hashing?",
        "options": [
            "Linear probing",
            "Binary search",
            "Depth-first search",
            "Breadth-first search"
        ],
        "title": "Easy Hashing",
        "ans": 0
    },
    {
        "question": "How does open addressing differ from separate chaining in hashing?",
        "options": [
            "Open addressing does not handle collisions",
            "Separate chaining has longer probe sequences",
            "Open addressing looks for empty cells to store items",
            "Separate chaining uses multiplication for hash functions"
        ],
        "title": "Easy Hashing",
        "ans": 2
    },
    {
        "question": "Which of the following is an example of a hash function used in hashing?",
        "options": [
            "Bubble sort",
            "Merge sort",
            "MD5",
            "Quick sort"
        ],
        "title": "Easy Hashing",
        "ans": 2
    },
    {
        "question": "In hashing, what is the term used to describe the number of elements stored in a hash table compared to the total number of slots available?",
        "options": [
            "Collision factor",
            "Load factor",
            "Probe factor",
            "Hash factor"
        ],
        "title": "Easy Hashing",
        "ans": 1
    },
    {
        "question": "Which data structure is commonly associated with implementing hash tables?",
        "options": [
            "Linked list",
            "Queue",
            "Stack",
            "Binary tree"
        ],
        "title": "Easy Hashing",
        "ans": 0
    },
    {
        "question": "What is the purpose of a hash table with linear probing?",
        "options": [
            "To handle collisions using separate chaining",
            "To store data in a sorted manner",
            "To quickly find the next available slot in case of collisions",
            "To ensure a fixed number of slots in the table"
        ],
        "title": "Easy Hashing",
        "ans": 2
    },
    {
        "question": "Which hashing technique involves using a second hash function to calculate the step size for probing?",
        "options": [
            "Double hashing",
            "Quadratic probing",
            "Folding",
            "Multiplicative hashing"
        ],
        "title": "Easy Hashing",
        "ans": 0
    },
    {
        "question": "What is the advantage of using a prime number as the table size in hashing?",
        "options": [
            "It ensures fewer collisions",
            "It speeds up the search process",
            "It guarantees perfect hashing",
            "It reduces the load factor"
        ],
        "title": "Easy Hashing",
        "ans": 0
    },
    {
        "question": "Which of the following is a common application of hashing in computer science?",
        "options": [
            "Text compression",
            "Image processing",
            "Data encryption",
            "Graph traversal"
        ],
        "title": "Easy Hashing",
        "ans": 2
    }    
]

const medium_hashing = [
    {
        "question": "What is the difference between linear probing and quadratic probing in hashing?",
        "options": [
            "Linear probing uses a fixed step size for probing, while quadratic probing varies the step size based on the hash value",
            "Quadratic probing is faster than linear probing in all cases",
            "Linear probing always guarantees no collisions, while quadratic probing may lead to more collisions",
            "Linear probing requires two hash functions, while quadratic probing uses only one"
        ],
        "title": "Medium Hashing",
        "ans": 0
    },
    {
        "question": "How does rehashing help in hash tables?",
        "options": [
            "Rehashing redistributes the elements evenly across the table to reduce collisions",
            "Rehashing converts all hash functions to prime numbers for better efficiency",
            "Rehashing reduces the load factor of the table to zero",
            "Rehashing changes the hashing algorithm used for better security"
        ],
        "title": "Medium Hashing",
        "ans": 0
    },
    {
        "question": "In separate chaining, what data structure is commonly used to handle multiple items hashing to the same index?",
        "options": [
            "Binary search tree",
            "Heap",
            "Stack",
            "Queue"
        ],
        "title": "Medium Hashing",
        "ans": 0
    },
    {
        "question": "What is the time complexity of searching for an element in a hash table using separate chaining?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        "title": "Medium Hashing",
        "ans": 2
    },
    {
        "question": "Which of the following is a disadvantage of using separate chaining in hash tables?",
        "options": [
            "It requires a complex hash function",
            "It can lead to poor cache performance",
            "It is not suitable for dynamic resizing",
            "It has a higher likelihood of collisions"
        ],
        "title": "Medium Hashing",
        "ans": 1
    },
    {
        "question": "What is the purpose of the load factor in a hash table?",
        "options": [
            "To determine the size of the hash table",
            "To control the number of elements stored in the table",
            "To calculate the probe sequence for open addressing",
            "To adjust the hash function based on the data distribution"
        ],
        "title": "Medium Hashing",
        "ans": 1
    },
    {
        "question": "Which collision resolution technique is more memory-efficient: open addressing or separate chaining?",
        "options": [
            "Open addressing",
            "Separate chaining",
            "Both are equally memory-efficient",
            "It depends on the size of the hash table"
        ],
        "title": "Medium Hashing",
        "ans": 0
    },
    {
        "question": "In hash tables, what is the purpose of the hash function?",
        "options": [
            "To determine the number of elements in the table",
            "To convert a key into an array index",
            "To generate random values for storage",
            "To sort the elements in the table"
        ],
        "title": "Medium Hashing",
        "ans": 1
    },
    {
        "question": "Which hashing technique is more likely to lead to clustering of elements in the hash table: linear probing or double hashing?",
        "options": [
            "Linear probing",
            "Double hashing",
            "Both lead to equal clustering",
            "It depends on the hash function"
        ],
        "title": "Medium Hashing",
        "ans": 0
    },
    {
        "question": "What is the impact of a high load factor in a hash table on the performance of operations?",
        "options": [
            "It speeds up operations by reducing collisions",
            "It slows down operations due to increased collisions",
            "It has no effect on the performance",
            "It improves the memory efficiency of the table"
        ],
        "title": "Medium Hashing",
        "ans": 1
    }
]

const hard_hashing = [
    {
        "question": "Explain the concept of a perfect hash function in hashing and why it is challenging to achieve in practice.",
        "options": [
            "A perfect hash function maps all keys to unique indices, but it is hard to implement due to the unpredictability of key distributions",
            "Perfect hash functions are always simple to compute and guarantee no collisions",
            "Perfect hash functions require multiple hash functions for each key",
            "Perfect hash functions are only used in theoretical scenarios"
        ],
        "title": "Hard Hashing",
        "ans": 0
    },
    {
        "question": "Discuss the trade-offs between using linear probing and quadratic probing in open addressing hash tables.",
        "options": [
            "Linear probing is faster but may lead to clustering, while quadratic probing has a more uniform distribution but slower",
            "Quadratic probing is always preferred due to its efficiency in resolving collisions",
            "Linear probing guarantees no clustering, while quadratic probing is memory-intensive",
            "Both linear and quadratic probing have the same performance characteristics"
        ],
        "title": "Hard Hashing",
        "ans": 0
    },
    {
        "question": "Explain how cuckoo hashing works and its advantages over traditional collision resolution methods.",
        "options": [
            "Cuckoo hashing uses multiple hash functions and two tables to resolve collisions, leading to constant lookup time",
            "Cuckoo hashing is based on the principle of linear probing for resolving collisions efficiently",
            "Cuckoo hashing is slower than open addressing but more memory-efficient",
            "Cuckoo hashing requires a higher load factor to perform optimally"
        ],
        "title": "Hard Hashing",
        "ans": 0
    },
    {
        "question": "Compare and contrast the performance of separate chaining and open addressing in terms of memory usage and search time.",
        "options": [
            "Separate chaining is more memory-efficient but slower in search time compared to open addressing",
            "Open addressing uses more memory but has faster search times than separate chaining",
            "Both separate chaining and open addressing have similar memory usage and search time",
            "Memory usage and search time are not affected by the collision resolution technique"
        ],
        "title": "Hard Hashing",
        "ans": 0
    },
    {
        "question": "Discuss the implications of having a high load factor in a hash table and how it can be managed effectively.",
        "options": [
            "A high load factor increases collisions and degrades performance; it can be managed by resizing the table or improving the hash function",
            "A high load factor improves search time by reducing the number of empty slots in the table",
            "A high load factor ensures perfect hashing without collisions",
            "A high load factor is desirable for memory efficiency"
        ],
        "title": "Hard Hashing",
        "ans": 0
    },
    {
        "question": "Explain the impact of hash table size on collision resolution and performance in hashing.",
        "options": [
            "Smaller hash table sizes increase collisions but reduce memory usage, while larger sizes decrease collisions but may impact lookup times",
            "Larger hash table sizes always lead to better performance and fewer collisions",
            "Hash table size has no effect on collision resolution or performance",
            "Smaller hash table sizes guarantee perfect hashing"
        ],
        "title": "Hard Hashing",
        "ans": 0
    },
    {
        "question": "Discuss the role of prime numbers in designing hash functions and their impact on collision resolution.",
        "options": [
            "Using prime numbers for hash table sizes reduces collisions and ensures a more even distribution of keys",
            "Prime numbers have no significant impact on hash functions or collision resolution",
            "Prime numbers are only useful in open addressing schemes",
            "Prime numbers lead to more clustering in hash tables"
        ],
        "title": "Hard Hashing",
        "ans": 0
    },
    {
        "question": "Explain the significance of rehashing in dynamic hash tables and how it helps maintain efficiency.",
        "options": [
            "Rehashing redistributes elements when the load factor exceeds a threshold, preventing performance degradation due to high collisions",
            "Rehashing involves converting hash functions to non-prime numbers for better distribution",
            "Rehashing is only necessary for static hash tables",
            "Rehashing is optional and does not impact hash table efficiency"
        ],
        "title": "Hard Hashing",
        "ans": 0
    },
    {
        "question": "Discuss the challenges associated with handling deletions in open addressing hash tables and how they can be overcome.",
        "options": [
            "Deletions in open addressing require special markers or tombstones to indicate empty slots; rehashing can help compact the table and remove deleted items",
            "Deletions are not possible in open addressing due to its probing nature",
            "Deletions automatically rehash the entire table for better efficiency",
            "Deletions in open addressing always lead to data loss"
        ],
        "title": "Hard Hashing",
        "ans": 0
    },
    {
        "question": "Explain the concept of perfect hashing and its practical implications in real-world applications.",
        "options": [
            "Perfect hashing ensures no collisions for a specific set of keys, making it ideal for scenarios requiring constant-time lookups",
            "Perfect hashing is an inefficient technique and is rarely used in practice",
            "Perfect hashing guarantees no memory usage in hash tables",
            "Perfect hashing is only applicable in cases of static data"
        ],
        "title": "Hard Hashing",
        "ans": 0
    }
]

const easy_heaps = [
    {
        "question": "What data structure are heaps almost always implemented as?",
        "options": [
            "Linked lists",
            "Arrays",
            "Hash tables",
            "Stacks"
        ],
        "title": "Easy Heaps",
        "ans": 1
    },
    {
        "question": "In a heap with one item, how many levels does it have?",
        "options": [
            "Zero levels",
            "One level",
            "Two levels",
            "Three levels"
        ],
        "title": "Easy Heaps",
        "ans": 1
    },
    {
        "question": "What is used to store items in a Python implementation of heaps?",
        "options": [
            "Tuples",
            "Dictionaries",
            "Lists (Arrays)",
            "Sets"
        ],
        "title": "Easy Heaps",
        "ans": 2
    },
    {
        "question": "What does the constructor of a heap class take to determine the size of the array to allocate?",
        "options": [
            "Key parameter",
            "Initial size parameter",
            "Item count parameter",
            "Capacity parameter"
        ],
        "title": "Easy Heaps",
        "ans": 3
    },
    {
        "question": "How is the key used in ordering records or other complex structures stored in a heap array defined?",
        "options": [
            "Identity function",
            "Sorting function",
            "Hash function",
            "Comparison function"
        ],
        "title": "Easy Heaps",
        "ans": 3
    },
    {
        "question": "What type of ordering does a descending heap have?",
        "options": [
            "Smallest item at the root",
            "Largest item at the root",
            "Random item at the root",
            "No specific order"
        ],
        "title": "Easy Heaps",
        "ans": 1
    },
    {
        "question": "How is the number of levels in a heap calculated in the levels() method using Python's math package?",
        "options": [
            "Square root",
            "Logarithm",
            "Exponential",
            "Factorial"
        ],
        "title": "Easy Heaps",
        "ans": 1
    },
    {
        "question": "What is the purpose of the levels_loop() method in a heap class?",
        "options": [
            "To insert items into the heap",
            "To delete items from the heap",
            "To count the number of levels in the heap",
            "To sort the items in the heap"
        ],
        "title": "Easy Heaps",
        "ans": 2
    },
    {
        "question": "What does the Heap Visualization tool show during each insertion of a new item in a heap?",
        "options": [
            "The tree shrinks in size",
            "The new item replaces the root",
            "The new item is sifted up",
            "The tree is rotated"
        ],
        "title": "Easy Heaps",
        "ans": 2
    },
    {
        "question": "What does the Make Random Heap button do in the Heap Visualization tool?",
        "options": [
            "Clears the current heap",
            "Duplicates existing items",
            "Sorts the heap",
            "Expands the array"
        ],
        "title": "Easy Heaps",
        "ans": 0
    }
]

const medium_heaps = [
    {
        "question": "What is the time complexity of finding the K highest (or lowest) keys among N items in an array using heapify followed by K removals?",
        "options": [
            "O(N + K^2)",
            "O(N × K)",
            "O(N + K × log N)",
            "O(N log K)"
        ],
        "title": "Medium Heaps",
        "ans": 2
    },
    {
        "question": "How is the heapify() routine on an N-item array time complexity typically denoted?",
        "options": [
            "O(N^2)",
            "O(log N)",
            "O(N)",
            "O(N log N)"
        ],
        "title": "Medium Heaps",
        "ans": 2
    },
    {
        "question": "What does it mean when a sorting algorithm is considered stable?",
        "options": [
            "It runs without errors",
            "Items with equal keys remain in the same order",
            "It always has the same time complexity",
            "It requires extra memory"
        ],
        "title": "Medium Heaps",
        "ans": 1
    },
    {
        "question": "What is the main advantage of heapsort over quicksort?",
        "options": [
            "Requires less memory",
            "More stable sorting",
            "Guaranteed worst-case time complexity",
            "Easier to implement"
        ],
        "title": "Medium Heaps",
        "ans": 2
    },
    {
        "question": "What is the primary purpose of the sift down algorithm in heapsort?",
        "options": [
            "Inserting new items",
            "Removing items",
            "Building the initial heap",
            "Improving sorting speed"
        ],
        "title": "Medium Heaps",
        "ans": 2
    },
    {
        "question": "What operation in heapsort involves making N insertions into a heap followed by N removals?",
        "options": [
            "Heapify",
            "Sift up",
            "Sift down",
            "Building the initial heap"
        ],
        "title": "Medium Heaps",
        "ans": 0
    },
    {
        "question": "How does heapsort ensure no extra memory is needed during its operation?",
        "options": [
            "By using linked lists",
            "By applying the sift down algorithm",
            "By reusing the same array for unordered, heap, and sorted data",
            "By dynamically resizing the heap array"
        ],
        "title": "Medium Heaps",
        "ans": 2
    },
    {
        "question": "What is the expected time complexity of running heapsort?",
        "options": [
            "O(N)",
            "O(N log N)",
            "O(N^2)",
            "O(log N)"
        ],
        "title": "Medium Heaps",
        "ans": 1
    },
    {
        "question": "What is the complexity of applying the sift down algorithm directly to N/2 items in the unsorted array in heapsort?",
        "options": [
            "O(N)",
            "O(log N)",
            "O(N^2)",
            "O(N/2)"
        ],
        "title": "Medium Heaps",
        "ans": 0
    },
    {
        "question": "What is the key condition for a binary tree to satisfy the heap condition?",
        "options": [
            "Parent node key < Child node key",
            "Parent node key = Child node key",
            "Parent node key > Child node key",
            "No specific condition"
        ],
        "title": "Medium Heaps",
        "ans": 2
    }
]

const hard_heaps = [
    {
        "question": "What is the time complexity of inserting N items into a heap?",
        "options": [
            "O(N)",
            "O(log N)",
            "O(N log N)",
            "O(N^2)"
        ],
        "title": "Hard Heaps",
        "ans": 2
    },
    {
        "question": "In the context of heaps, what happens when the load factor is above a threshold during the array growth process?",
        "options": [
            "Heap is rebuilt",
            "Heap is resized",
            "Heap array is halved",
            "Heap array is doubled"
        ],
        "title": "Hard Heaps",
        "ans": 3
    },
    {
        "question": "What is the time complexity of growing the heap array to hold all heap items in heapsort?",
        "options": [
            "O(N)",
            "O(log N)",
            "O(N log N)",
            "O(N^2)"
        ],
        "title": "Hard Heaps",
        "ans": 0
    },
    {
        "question": "How does the time complexity of removing items from a heap compare to inserting items?",
        "options": [
            "Insertion is faster",
            "Removal is faster",
            "Both have the same time complexity",
            "Time complexity depends on the heap size"
        ],
        "title": "Hard Heaps",
        "ans": 2
    },
    {
        "question": "What is the primary factor that affects the time complexity of the insert operation in heaps?",
        "options": [
            "Number of levels in the heap",
            "Number of items in the heap",
            "Type of elements being inserted",
            "Initial heap size"
        ],
        "title": "Hard Heaps",
        "ans": 0
    },
    {
        "question": "What is the time complexity of traversing a heap of N items?",
        "options": [
            "O(log N)",
            "O(N)",
            "O(N log N)",
            "O(N^2)"
        ],
        "title": "Hard Heaps",
        "ans": 1
    },
    {
        "question": "What distinguishes the time complexity of heap insertion from that of hash tables for N items?",
        "options": [
            "Heap insertion is O(log N), hash table is O(1)",
            "Heap insertion is O(1), hash table is O(log N)",
            "Both have the same time complexity",
            "Time complexity depends on the number of items"
        ],
        "title": "Hard Heaps",
        "ans": 0
    },
    {
        "question": "How does the number of loops in the _sift8p() and _siftDown() routines affect their time complexity?",
        "options": [
            "More loops result in lower time complexity",
            "More loops result in higher time complexity",
            "Loops have no impact on time complexity",
            "Time complexity depends on loop conditions"
        ],
        "title": "Hard Heaps",
        "ans": 1
    },
    {
        "question": "What is the main difference in time complexity between insertion and removal operations in heaps?",
        "options": [
            "Insertion is O(1), removal is O(log N)",
            "Insertion is O(log N), removal is O(1)",
            "Both have the same time complexity",
            "Time complexity depends on heap size"
        ],
        "title": "Hard Heaps",
        "ans": 2
    },
    {
        "question": "What operation involves organizing the items in an array to satisfy the heap condition?",
        "options": [
            "Sift down",
            "Heapify",
            "Sift up",
            "Traverse"
        ],
        "title": "Hard Heaps",
        "ans": 1
    }
]

const easy_graphs = [
    {
        "question": "What is a minimum spanning tree?",
        "options": [
            "A tree with the minimum number of edges from the starting vertex to a specified vertex",
            "A tree that spans all the vertices using the least number of edges",
            "A tree that minimizes the total weight of edges connecting all the vertices",
            "A tree that minimizes the total weight of the edges between two specified vertices"
        ],
        "title": "Easy Graphs",
        "ans": 2
    },
    {
        "question": "In a weighted graph, the weights are used to model things like _______",
        "options": [
            "Number of edges",
            "Distance between vertices",
            "Cost of connections",
            "Number of vertices"
        ],
        "title": "Easy Graphs",
        "ans": 2
    },
    {
        "question": "What do the numerical weights in weighted graphs represent?",
        "options": [
            "Integers with zeros reserved for nonadjacent vertices",
            "Any finite value but must have a sum less than the number of vertices",
            "Only positive values",
            "Any value including positive infinity for nonadjacent vertices"
        ],
        "title": "Easy Graphs",
        "ans": 3
    },
    {
        "question": "In the context of a shortest path problem, what does the weight of an edge represent?",
        "options": [
            "The number of vertices connected by the edge",
            "The number of edges between two vertices",
            "The cost or distance of traveling along that edge",
            "The direction of the edge"
        ],
        "title": "Easy Graphs",
        "ans": 2
    },
    {
        "question": "What type of graph is essential for modeling a high-speed network installation between cities with varying connection costs?",
        "options": [
            "Directed graph",
            "Unweighted graph",
            "Weighted graph",
            "Cyclic graph"
        ],
        "title": "Easy Graphs",
        "ans": 2
    },
    {
        "question": "Which algorithm is commonly used to find the minimum spanning tree of a weighted graph?",
        "options": [
            "Depth-First Search (DFS)",
            "Breadth-First Search (BFS)",
            "Dijkstra's algorithm",
            "Prim's algorithm"
        ],
        "title": "Easy Graphs",
        "ans": 3
    },
    {
        "question": "What is the purpose of a minimum spanning tree in a weighted graph?",
        "options": [
            "To maximize the total weight of connected edges",
            "To minimize the total weight of connected edges",
            "To ensure all vertices have the same weight",
            "To remove edges with the highest weight"
        ],
        "title": "Easy Graphs",
        "ans": 1
    },
    {
        "question": "Which of the following problems involves finding the most efficient route that visits a set of vertices and returns to the starting vertex?",
        "options": [
            "Shortest path problem",
            "Minimum spanning tree problem",
            "Traveling salesperson problem",
            "Topological sorting problem"
        ],
        "title": "Easy Graphs",
        "ans": 2
    },
    {
        "question": "In a directed graph, what is the difference between incoming and outgoing edges at a vertex?",
        "options": [
            "Incoming edges point towards the vertex, outgoing edges point away",
            "Incoming edges have higher weights than outgoing edges",
            "Outgoing edges are undirected, incoming edges are directed",
            "Incoming edges are always longer than outgoing edges"
        ],
        "title": "Easy Graphs",
        "ans": 0
    },
    {
        "question": "Which type of graph is most suitable for representing dependencies between tasks with a defined order of execution?",
        "options": [
            "Directed graph",
            "Undirected graph",
            "Weighted graph",
            "Cyclic graph"
        ],
        "title": "Easy Graphs",
        "ans": 0
    }
]

const medium_graphs = [
    {
        "question": "In a directed graph, what is the term used to describe a path that starts and ends at the same vertex?",
        "options": [
            "Cycle",
            "Loop",
            "Circuit",
            "Traversal"
        ],
        "title": "Medium Graphs",
        "ans": 0
    },
    {
        "question": "What is the primary difference between Dijkstra's algorithm and the Bellman-Ford algorithm?",
        "options": [
            "Dijkstra's algorithm can handle negative edge weights, Bellman-Ford cannot",
            "Bellman-Ford algorithm is used for unweighted graphs, Dijkstra's for weighted",
            "Dijkstra's algorithm guarantees the shortest path, Bellman-Ford may not for negative weights",
            "Bellman-Ford is faster but less accurate than Dijkstra's algorithm"
        ],
        "title": "Medium Graphs",
        "ans": 2
    },
    {
        "question": "For a graph with V vertices, what is the maximum number of edges in an undirected graph?",
        "options": [
            "V",
            "V-1",
            "V*(V-1)/2",
            "2*V"
        ],
        "title": "Medium Graphs",
        "ans": 2
    },
    {
        "question": "Which of the following is NOT a property of a tree in graph theory?",
        "options": [
            "Connected",
            "Acyclic",
            "Directed",
            "Eulerian"
        ],
        "title": "Medium Graphs",
        "ans": 3
    },
    {
        "question": "What is the time complexity of Prim's algorithm for finding the minimum spanning tree of a graph with V vertices and E edges?",
        "options": [
            "O(V^2)",
            "O(V*log(V))",
            "O(E*log(V))",
            "O(V*E)"
        ],
        "title": "Medium Graphs",
        "ans": 2
    },
    {
        "question": "What is the significance of the term 'topological sorting' in directed acyclic graphs (DAGs)?",
        "options": [
            "It represents arranging vertices in ascending order of weights",
            "It ensures there are no cycles in the graph",
            "It orders the vertices based on a specific sequence of dependencies",
            "It minimizes the number of edges in the graph"
        ],
        "title": "Medium Graphs",
        "ans": 2
    },
    {
        "question": "Which of the following is true about a minimum spanning tree in a graph?",
        "options": [
            "It contains the heaviest edges in the graph",
            "It may not be unique for a given graph",
            "It always includes all the vertices in the graph",
            "It is a directed tree"
        ],
        "title": "Medium Graphs",
        "ans": 1
    },
    {
        "question": "What is the purpose of using topological sorting in a directed acyclic graph?",
        "options": [
            "To find the shortest path between two specified vertices",
            "To detect cycles in the graph",
            "To order vertices based on dependencies",
            "To find the maximum spanning tree"
        ],
        "title": "Medium Graphs",
        "ans": 2
    },
    {
        "question": "What is the key characteristic of a connected graph?",
        "options": [
            "It contains no cycles",
            "Every vertex is reachable from every other vertex",
            "It has a single vertex",
            "All vertices have the same weight"
        ],
        "title": "Medium Graphs",
        "ans": 1
    },
    {
        "question": "What is the significance of the term 'connectivity' in a graph?",
        "options": [
            "It refers to the number of vertices in the graph",
            "It indicates the presence of cycles in the graph",
            "It describes how vertices are related in the graph",
            "It represents the total weight of all edges in the graph"
        ],
        "title": "Medium Graphs",
        "ans": 2
    }
]

const hard_graphs = [
    {
        "question": "Explain the difference between a strong component and a weak component in a directed graph.",
        "options": [
            "A strong component has all vertices connected by a cycle, while a weak component has disconnected vertices",
            "A strong component has an edge between every pair of vertices, while a weak component has fewer connections",
            "A strong component can be reached from any other vertex, while a weak component has limited connections",
            "A strong component is acyclic, while a weak component may contain cycles"
        ],
        "title": "Hard Graphs",
        "ans": 2
    },
    {
        "question": "In the context of graphs, what is the significance of Eulerian graphs?",
        "options": [
            "Eulerian graphs have a Hamiltonian cycle",
            "Eulerian graphs have an Eulerian path that passes through every edge once",
            "Eulerian graphs have a unique minimum spanning tree",
            "Eulerian graphs are always connected"
        ],
        "title": "Hard Graphs",
        "ans": 1
    },
    {
        "question": "Explain the concept of edge relaxation in graph algorithms.",
        "options": [
            "Edge relaxation is updating the weights of edges to minimize the total weight in a graph",
            "Edge relaxation is the process of removing edges with the highest weight from the graph",
            "Edge relaxation involves adjusting the weights of edges to improve the shortest path estimates",
            "Edge relaxation is adding new edges to the graph to increase connectivity"
        ],
        "title": "Hard Graphs",
        "ans": 2
    },
    {
        "question": "Discuss the importance of detecting cycles in a graph. How does it impact various graph algorithms?",
        "options": [
            "Cycles ensure the graph is fully connected, improving efficiency in algorithms",
            "Cycles can lead to infinite loops, affecting the termination of algorithms like Dijkstra's",
            "Cycles improve the accuracy of minimum spanning tree algorithms",
            "Cycles have no impact on graph algorithms"
        ],
        "title": "Hard Graphs",
        "ans": 1
    },
    {
        "question": "Explain the difference between DFS (Depth-First Search) and BFS (Breadth-First Search) traversal algorithms in graphs.",
        "options": [
            "DFS always finds the shortest path, while BFS does not",
            "DFS uses a stack for traversal, BFS uses a queue",
            "DFS guarantees the shortest path in weighted graphs, BFS does not",
            "DFS can handle cycles, BFS cannot"
        ],
        "title": "Hard Graphs",
        "ans": 1
    },
    {
        "question": "How does the presence of negative edge weights affect algorithms like Dijkstra's and Bellman-Ford?",
        "options": [
            "Negative edge weights have no impact on these algorithms",
            "Dijkstra's algorithm can handle negative edge weights, but Bellman-Ford cannot",
            "Bellman-Ford algorithm can handle negative edge weights, but Dijkstra's algorithm cannot",
            "Negative edge weights always lead to incorrect results in both algorithms"
        ],
        "title": "Hard Graphs",
        "ans": 2
    },
    {
        "question": "Discuss the implications of having parallel edges in a graph on various graph algorithms.",
        "options": [
            "Parallel edges increase the efficiency of algorithms like Dijkstra's",
            "Parallel edges do not affect the correctness of minimum spanning tree algorithms",
            "Parallel edges may introduce ambiguity in shortest path algorithms",
            "Parallel edges simplify the process of topological sorting"
        ],
        "title": "Hard Graphs",
        "ans": 2
    },
    {
        "question": "Explain the significance of articulation points in a graph and how they impact the connectivity of the graph.",
        "options": [
            "Articulation points are crucial for finding the minimum spanning tree",
            "Articulation points always lead to disconnected components in the graph",
            "Articulation points are vertices whose removal disconnects the graph",
            "Articulation points are vertices with the highest degree in the graph"
        ],
        "title": "Hard Graphs",
        "ans": 2
    },
    {
        "question": "Discuss the concept of bi-connected components in a graph and their relevance in graph theory.",
        "options": [
            "Bi-connected components are cycles in the graph that improve connectivity",
            "Bi-connected components are sets of vertices that remain connected after removing any single vertex",
            "Bi-connected components are trees connecting two separate graphs",
            "Bi-connected components are isolated subgraphs within a larger graph"
        ],
        "title": "Hard Graphs",
        "ans": 1
    },
    {
        "question": "Explain the term 'flow network' in the context of graph theory and its applications.",
        "options": [
            "A flow network is a directed graph where each edge has a capacity and flow",
            "A flow network represents a graph with a single source and multiple sinks",
            "Flow networks are always acyclic graphs with a unique minimum spanning tree",
            "Flow networks are used exclusively in weighted graphs"
        ],
        "title": "Hard Graphs",
        "ans": 0
    }
]