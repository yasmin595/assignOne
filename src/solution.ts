function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
}

// Sample Input
// console.log(formatValue('hello'));  
// console.log(formatValue(5));        
// console.log(formatValue(true));     


function getLength(value: string | any[]): number {
  if (typeof value === 'string') {
    return value.length;
  } else {
    return value.length;
  }
}

// Alternative implementation using Array.isArray
function getLengthAlt(value: string | any[]): number {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return value.length;
  }
}

// Sample Input
// console.log(getLength('typescript'));      
// console.log(getLength([10, 20, 30, 40]));  

// console.log(getLengthAlt('typescript'));     
// console.log(getLengthAlt([10, 20, 30, 40]));  

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Sample Input
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());  

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}

// Sample Input
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}

// Sample Input
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}

// Sample Input
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
// Output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes

function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  // Helper function
  function exists(value: string | number): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }

  // Loop arr1
  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i]; // <-- now value is string | number | undefined
    if (value !== undefined && !exists(value)) {
      result.push(value);
    }
  }

  // Loop arr2
  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    if (value !== undefined && !exists(value)) {
      result.push(value);
    }
  }

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // optional 0–100
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      const basePrice = product.price * product.quantity;

      // If discount exists, apply it
      if (product.discount !== undefined) {
        const discountAmount = (basePrice * product.discount) / 100;
        return basePrice - discountAmount;
      }

      return basePrice;
    })
    .reduce((total, price) => total + price, 0);
}
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
