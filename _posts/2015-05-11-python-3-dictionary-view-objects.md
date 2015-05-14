---
layout: post
title: "Python 3 Dictionary view objects"
category: python
description: "Learn about the new view objects introduced on Python 3 for dictionaries"
fbauthor: "https://www.facebook.com/santiago.basulto"
author:
    name: "Santiago Basulto"
    link: "https://twitter.com/santiagobasulto"
---

One thing that always confuses our students are the differences between dictionary methods on Python 2 and Python 3. Dictionary changed on Python 3 for the better and that's because of the introduction of [View Objects](https://docs.python.org/3/library/stdtypes.html#dictionary-view-objects). View Objects are returned whenever we ask for a dictionary's keys, values or items (pairs of keys and values); it's a new way to represent that data.

First let's see what happened on Python 2.

### Python 2 keys and objects

On Python 2 when you requested to see a dict's keys or values you'd get a list:

```python
>>> d = {'title': 'The Raven', 'year': 1845, 'author': 'Edgar Allan Poe'}
>>> d.keys()
['year', 'author', 'title']
>>> type(d.keys())
list
>>> d.values()
[1845, 'Edgar Allan Poe', 'The Raven']
>>> type(d.values())
list
>>> d.items()
[('year', 1845), ('author', 'Edgar Allan Poe'), ('title', 'The Raven')]
>>> type(d.items())
list
```    

That means that when you invoke the `keys` method on a dictionary it constructs a list with all the keys **at that moment** and returns it. This has several disadvantages. The first one is that as the keys list is constructed when the method is invoked you'll not see new keys added after that time. Check the following example:

```python
>>> d = {'title': 'The Raven', 'year': 1845, 'author': 'Edgar Allan Poe'}
>>> keys = d.keys()
>>> d['goodreads_rating'] = 4.28
>>> print(keys) # It won't include 'goodreads_rating'!!
['year', 'author', 'title']
```

Here we're missing the recently added `goodreads_rating` key because it was added before the keys were requested.

The other disadvantage is that it'll create a brand new list every time we invoke the keys or method values; that certainly is a waste of memory.

### Introducing Python 3 view objects

On Python 3 the situation is different; and for better. The main difference is that when you invoke the methods `keys`, `values` or `items` instead of receiving a list you get a `dict_keys` object. Let's rework our previous example with Python 3.4:

```python
>>> d = {'title': 'The Raven', 'year': 1845, 'author': 'Edgar Allan Poe'}
>>> keys = d.keys()
>>> keys
dict_keys(['title', 'year', 'author'])
>>> type(d.keys())
dict_keys
>>> d['goodreads_rating'] = 4.28
>>> keys  # We'll see the new key, even though keys was created before adding the new key
dict_keys(['goodreads_rating', 'title', 'year', 'author'])
```

As view object are generated dynamically there's no need to create duplicated lists with the keys, values or items. The memory usage is far better.

### View objects are also iterable

View objects are conform to the iterator protocol which also improves performance; as items are generated as long as they're needed. In the Python 2 example the whole list of keys is created before it's even returned which might be a waste of CPU cycles. Check the following example:

```python
def dict_contains_integer_value(a_dict):
    for value in a_dict.values():
        if type(value) == int:
            return True
    return False

d = {'title': 'The Raven', 'year': 1845, 'author': 'Edgar Allan Poe'}
print(dict_contains_integer_value(d))
```

This example works the same way both in Python 2 and Python 3 (and returns the same result, `True`). The main difference is on line 2 when we ask for the dictionary values. With Python 2 the `values()` method would create a list with all the values in the dictionary and then it'd return it. In Python 3 the `.values()` method will return a `dict_keys` object that will yield one element at a time; if the value `1845` is returned first no more requests will be made and we'd save CPU and memory.

### Membership tests

As Python 2 return lists anytime we want to check if a dictionary contains a particular key, value or items the operation cost is `O(n)`. View objects implement a set-like structure which would make this operation less expensive. This is important from a conceptual standpoint; regardless of the optimizations made by the compiler. Checking for membership on a list is a `O(n)` operation while doing it in a hashable-like object is close to `O(1)`.

This concludes the View Objects post. We think it's a powerful feature and implies yet another reason to prefer Python 3 over Python 2. Please write us a line if you have any doubt or comment: questions@rmotr.com.
