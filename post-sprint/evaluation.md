# Object creation patterns

## Post lecture evaluation

---

&nbsp;

### Task 1

```js
function addToStorage(item) {
  this.storage.push(item);
}

function createStack() {
  const stack = {};

  stack.storage = {};
  stack.quantity = 0;
  stack.addToStorage = addToStorage;

  return stack;
}

const testStack = createStack();
testStack.addToStorage("piano");
```

a) Work out what happens when `testStack.addToStorage` is invoked in order to add the "piano" to storage

---this code will give an error. As addToStorage function tries to add the item in the storage, but storage is an object and it is using push function(that is used to add item in an array) to add an item in object

&nbsp;

### Task 2

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const firstPerson = Person("Alice", 500);
const secondPerson = new Person("Alice", 500);
```

a) What value does `firstPerson` store ?</br>
b) What value does `secondPerson` store ?</br>
c) What does `this` point to when `Person` is invoked with the `new` keyword.

---a) above Function Person is a Constructor function. firstPerson will store indefined as its not being invoked with new keyword.
b) secondPerson will store Alice and 500 as values of name and age, as seconPerson is invoked with a new keyword, creating an instance of Person.
c) this points to the Object with which the function will be called. In this example, the Object will be secondPerson

&nbsp;

### Task 3

```js
function Account(name) {
  this.name = name;
  this.basket = [];
}

Account.prototype.addToBasket = function (item) {
  this.basket.push(item);
};

const testAccount = new Account("Jane");
```

For each of the following expressions below, identify whether they will evaluate to **true** or **false**.</br>
You must also try and provide justifications for your answers - feel free to lookup methods and operators online to help you work out your answers.

a) `testAccount.hasOwnProperty('Jane');`</br> --false. As Jane will be added in the basket Property of testAccount. "Jane" doesn't become property of testAccount.
b) `testAccount.hasOwnProperty('name');`</br> true. As testAccount has a Property named "name"
c) `'name' in testAccount`</br> true.. as testAccount has a Property of "name"
d) `testAccount.hasOwnProperty('addToBasket')`</br> false.. as addToBasket is a prototypal link to account stored in **proto** variable.
e) `'addToBasket' in testAccount`</br> true. As addToBasket is a prototype of Account
f) `testAccount.addToBasket === Account.prototype.addToBasket`</br> true. as test acccount is an object of Account. and addToBasket is a prototype of Account
g) `Object.getPrototypeOf(testAccount) === Account`</br> false as testAccount has prototype addToBasket
h) `Object.getPrototypeOf(testAccount) === Account.prototype`true as testAccount and Account has same prototype addToBasket

Once you've had a go at answer these you can run the code with `node` to see if you were right.

&nbsp;

### Task 4

Write a **test case (or test cases) only** below to assert that an `Animal` constructor returns an object with a name and species defined when the constructor is invoked. See below:

````js
const sammy = new Animal("Samuel", "snake");

// sammy should be an object with the following form:

// {
//   name: 'Samuel',
//   species: 'snake;
//  }
```expect(typeof sammy).toBe("object")
expect(sammy.name).toBe("Samuel)
expect(sammy.species).toBe("snake")
````
