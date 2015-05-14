---
layout: post
title: "Let the compiler help you. Avoid string literals."
category: python
description: "In this post we analyze the advantages of keeping string literals to a minimum and how that can help avoid hard to debug errors in your programs"
fbauthor: "https://www.facebook.com/santiago.basulto"
author:
    name: "Santiago Basulto"
    link: "https://twitter.com/santiagobasulto"
---

One piece of advice we always give to our students is to avoid using string literals as much as they can. Of course strings are necessary but the way you use them can have a deep inpact in your system. Consider this example of a simple library stored in a dictionary:

```python
my_library = {
    'books': [],
    'authors': [],
    'customers': []
}

def add_author(author_name, library):
    library.setdefault('authors', [])
    library['authors'].append(author_name)

add_author("Edgar Allan Poe", my_library)
print(my_library['authors'])
# Printed Out: ['Edgar Allan Poe']
```

Now, consider for a second that you have to write other function that needs to use the library's authors but you have a typo in the `'authors'` key:

```python
def count_authors(library):
    authors = library.get('author', [])  # Note the typo. It should be 'author[S]', not 'author'
    return len(authors)

# We add two authors to our library:
add_author('Mark Twain', my_library)
add_author("Edgar Allan Poe", my_library)

# And now we count the authors:
print(count_authors(my_library)) # This should print 2

# Printed Out: 0
```

This should print 2, right? **WRONG! It prints 0, because `library['author']` DOES NOT EXIST.**

This is a common issue with Python and a really tricky one to fix. Primary because it's a "hidden" bug; you have to carefully debug the code in order to realize where the bug is (a typo in the dictionary key in this case).

So, how do we fix this? Using variables instead of the literal strings. This is our previous code rewritten to use variables instead of literal strings:

```python
BOOKS_KEY = 'books'
AUTHORS_KEY = 'authors'
CUSTOMERS_KEY = 'customers'

my_library = {
    'books': [],
    'authors': [],
    'customers': []
}

def add_author(author_name, library):
    library.setdefault(AUTHORS_KEY, [])
    library[AUTHORS_KEY].append(author_name)

add_author("Edgar Allan Poe", my_library)

print(my_library[AUTHORS_KEY])
# Printed Out: ['Edgar Allan Poe']
```

So far so good. Now, let's write our buggy `count_authors` function:

```python
def count_authors(library):
    authors = library.get(AUTHOR_KEY, [])  # New typo. Instead of AUTHOR[S]_KEY I typed AUTHOR_KEY
    return len(authors)

# We add two authors to our library:
add_author('Mark Twain', my_library)
add_author("Edgar Allan Poe", my_library)

# And now we count the authors:
print(count_authors(my_library))  # This will raise an error

```

This is the error I get when I try to execute this code:

![http://i.imgur.com/zha60J1.png](http://i.imgur.com/zha60J1.png)

In this example we also introduced a bug (the typo) but in this case the compiler is helping us to spot it; it fails because it can't resolve the variable `AUTHOR_KEY`.

### More help on the way

Aside from the compiler with this approach we also have help from our code editor. This is a screenshot of my [spacemacs](https://github.com/syl20bnr/spacemacs) editor:

![http://i.imgur.com/Ct9LpRu.png](http://i.imgur.com/Ct9LpRu.png)

As you can see my editor is highlighting the error on line 18. Also, when I'm trying to reference the `AUTHORS_KEY` variable I have a nice completion suggestion which will make it harder to introduce a bug like the one described before.

### Further advice: storing state

Using string literals as dictionary keys is the most common source of bugs like the one described above. There's also another common scenario that involves storing "state" in strings. Consider the following example of a simple `Car` class:

```python
class Car(object):
    def __init__(self, brand, gas_count_in_liters):
        self.brand = brand
        self.gas_count_in_liters = gas_count_in_liters
        self.state = 'stopped'

    def move(self):
        if self.gas_count_in_liters == 0:
            raise Exception("No more gas")
        elif self.state == 'moving':  # Checking state with a literal string
            raise Exception("The car is already moving")

        self.state = 'moving'
        self.gas_count_in_liters -= 0
        print("The car is moving")


ford = Car('Ford', 10)
ford.move()
```

In this case the state of the car is stored as a literal string which we're using to compare. This is also error prone, suppose that I introduce other typo on the state checking line and instead of typing `elif self.state == 'moving':` I type `elif self.state == 'movin':`. We'd be in the same situation as before; a hardly debuggable bug introduced by a typo. We'd have to read the code really carefully in order to spot it.

The solution in this case is simple and related to our previous fix:

```python
class Car(object):
    STOPPED = 'stopped'
    MOVING = 'moving'

    def __init__(self, brand, gas_count_in_liters):
        self.brand = brand
        self.gas_count_in_liters = gas_count_in_liters
        self.state = Car.STOPPED

    def move(self):
        if self.gas_count_in_liters == 0:
            raise Exception("No more gas")
        elif self.state == Car.MOVING:
            raise Exception("The car is already moving")

        self.state = Car.MOVING
        self.gas_count_in_liters -= 0
        print("The car is moving")

ford = Car('Ford', 10)
ford.move()
```

In this case we stored the state as class variables (`STOPPED` and `MOVING`). This has pretty much the same effect as we had on our previous dictionary example; if you have a typo on one of this variables you'd also get a compiler error. You'll also count with help from your code editor to inform the error and provide suggestions while typing.

The nice addition in this approach is that we're giving those state variables a _namespace_. `Car.STOPPED` makes a lot of sense when you read it.

This concludes our advice on using literal strings in Python. Please write us a line if you have any doubt or comment: questions@rmotr.com.
