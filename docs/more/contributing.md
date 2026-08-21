---
title: Contributing to the Guide
description: Learn how to contribute to the Pycord Guide.
---

This page outlines some of the basic syntax you need to know to contribute to the guide. We recommend you also check out:

- [Contributing Rules](https://github.com/Pycord-Development/guide/blob/master/.github/CONTRIBUTING.md)

<!-- TODO: rewrite the "Info" and "Structure" sections for the zensical-based authoring workflow (this guide previously described Docusaurus v2, mdx files and sidebar_position). -->

## Markdown Syntax

This page quickly outlines some of the syntax that is used in markdown.

````mdx
Markdown syntax is pretty easy. You can add **bold**, _italic_ and _underline_ text. You can use ~~strikethrough~~. You can use `inline code blocks`.

    ```python
    print("We can use code blocks like this.")
    ```

You can add [links to other websites](https://pycord.dev). You can add images like this: ![alternate text that describes the image](https://pycord.dev/image.png).

- You can create
- unordered lists like this

1. Or ordered lists
2. Like this

3. If you want markdown to automatically detect what number you are on, you can use `1.`
4. Like this

# Headers

## Go

### Like

#### This

You can even use HTML in Markdown.

<samp>This text is monospaced</samp>
Use <br/> to add a break line.

> We can use blockquotes too.

2 ways to create tables:

<table>
    <tr>
        <th>Header</th>
        <th>Header</th>
    </tr>
    <tr>
        <td>Cell</td>
        <td>Cell</td>
    </tr>
</table>

| Header | Header |
| ------ | ------ |
| Cell   | Cell   |

Here's a line for us to start with.

This line is separated from the one above by two new lines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

We can use emojis too! :joy:

- [x] We can have task lists too
- [ ] This is a task
- [ ] That's not done yet
````

<details>
  <summary>Preview</summary>

<div class="markdown-body">
    Markdown syntax is pretty easy. You can add **bold**, *italic* and *underline* text. You can use ~~strikethrough~~. You can use `inline code blocks`.

````
```python
print("We can use code blocks like this.")
```

You can add [links to other websites](https://pycord.dev). You can add images by adding ![alt text](@site/static/img/favicon.ico).

* You can create
* unordered lists like this

1. Or ordered lists

2. Like this

3. If you want markdown to automatically detect what number you are on, you can use `1.`

4. Like this

   # Headers

   ## Go

   ### Like

   #### This

You can even use HTML in Markdown.

<samp>This text is monospaced</samp>
Use <br /> to add a break line.

> We can use blockquotes too.

2 ways to create tables:

<table>
  <tr>
    <th>Header</th>
    <th>Header</th>
  </tr>

  <tr>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
</table>

| Header | Header |
| ------ | ------ |
| Cell   | Cell   |

Here's a line for us to start with.

This line is separated from the one above by two new lines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

We can use emojis too! :joy:

* [x] We can have task lists too
* [ ] This is a task
* [ ] That's not done yet
````

</div>
</details>

<!-- TODO: rewrite the "Admonitions" section for zensical/mkdocs-material admonition syntax (!!! note ...) instead of the old Docusaurus ::: syntax. -->

<!-- TODO: rewrite the "Discord Message Components" section for the new JSON-payload-based workflow. -->

## Page Format

There are a few things you need to take care of:

1. Make sure that the spelling and grammar is perfect. We have a GitHub action configured that will warn you about spelling errors when you start a pull request. Make sure to commit your changes accordingly.

    As for the grammar, you should try reading the changes you have done and wait for reviews from others.

1. A common mistake people make is incorrect header style. People often think that the less the important the topic is, the lower it's heading style should be.

    ```md
    [PAGE STARTS]
    # Topic
    ## Less Important Topic
    ## Subtopic
    ```

    ```md
    [PAGE STARTS]
    # About
    [Introduction]

    ## Installation
    [Content]

    ### Windows
    [Content]
    ```

    That's VERY wrong. Here's the correct example:

    ```md
    [PAGE STARTS]
    [Introduction]
    ## Topic
    ## Less Important Topic
    ### Subtopic
    ```

    ```md
    [PAGE STARTS]
    [Introduction]

    ## About
    [More Information]

    ## Installation
    [Content]

    ### Windows
    [Content]
    ```

    Note that the `---`s at the beginning have been skipped here.
