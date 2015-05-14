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
