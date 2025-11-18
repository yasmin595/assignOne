1. Interface আর Type এর মধ্যে পার্থক্য কী?

TypeScript-এ interface এবং type alias–দুটোই অবজেক্টের শেপ বা structure ডিফাইন করতে ব্যবহৃত হয়। কিন্তু কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

 ১. Extending / Inheritance

interface → সহজেই extend করতে পারে এবং একাধিক interface extend করা যায়।

type → extend করতে পারে, তবে intersection (&) ব্যবহার করে।

Example:

interface User {
  name: string;
}
interface Admin extends User {
  role: string;
}

type UserType = {
  name: string;
};
type AdminType = UserType & {
  role: string;
};

 ২. Declaration Merging

interface → একই নামের একাধিক interface লিখলে merge হয়ে যায়।

type → merge হয় না। একই নামের type ডিফাইন করলে error।

Example:

interface Person {
  name: string;
}
interface Person {
  age: number;
}
// Output: Person = { name: string, age: number }
 ৩. Use Case

interface → Object structure, class modeling-এর জন্য বেশি ব্যবহৃত।

type → union, intersection, primitive, function signature ইত্যাদির ক্ষেত্রে বেশি ফ্লেক্সিবল।


2. keyof কীওয়ার্ডের ব্যবহার (With Example)

TypeScript-এর keyof হলো এমন একটি অপারেটর, যা কোনো object-এর সবগুলো key-এর union type রিটার্ন করে।

 কেন দরকার?

যখন আপনি dynamic ভাবে object-এর key নিয়ে কাজ করতে চান, তখন keyof TypeScript-কে সঠিক key-গুলোর একটি list বুঝতে সাহায্য করে।

Example:
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

type UserKeys = keyof User;
// Result: "name" | "age" | "isActive"


এখন এটি এমন function-এ ব্যবহার করা যায় যেখানে key অবশ্যই ওই object-এর ভেতরের key হতে হবে।

আরও পরিষ্কার উদাহরণ:
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: "Yasmin",
  age: 25,
};

getValue(user, "name"); // valid
getValue(user, "email"); //  error — কারণ email User টাইপে নেই
