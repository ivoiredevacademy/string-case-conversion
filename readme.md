# String Case Converter

**String Case Converter** is a lightweight npm package that converts strings between different case formats such as`snake_case`.
It’s perfect for any JavaScript or Node.js project.

## Features

- Convert to **snake_case**

## Installation

To install with npm:

```bash
npm install @juvpengele/string-case-conversion
```

## Usage

```javascript
const { toCamelCase, toSnakeCase, toKebabCase, toPascalCase, toTitleCase } = require('string-case-conversion');

const inputString = "hello world";

console.log(toSnakeCase(inputString));    // hello_world
```

## API Reference

### `toSnakeCase(str)`

Converts a string to **snake_case**.

Example: `toSnakeCase('hello world')` will return `hello_world`.

Example: `toSnakeCase('This is a test string')` will return `this_is_a_test_string`.

Example: `toSnakeCase('SnakeCase')` will return `snake_case`.

**Parameters:**

- `str` (string): The input string to be converted.

**Returns:**

- A new string in snake_case format.


## Contribution Rules

We welcome contributions! To contribute to this project, please follow these steps:

1. **Fork the repository**: Create a personal copy of the project by forking it to your GitHub account.
2. **Create a new branch**: For any changes or new features, create a new branch with a meaningful name.
3. **Make your changes**: Ensure that your code adheres to the existing style guidelines. If you add new functionality, make sure to write tests for it.
4. **Run tests**: Before submitting your changes, make sure all tests pass successfully.
5. **Commit and push**: Commit your changes with clear commit messages and push them to your branch.
6. **Submit a pull request**: After pushing your changes, submit a pull request to the `main` branch of the original repository.
7. **Wait for review**: Your pull request will be reviewed, and you might be asked to make additional changes if needed.
8. **Follow up**: Ensure you address any requested changes or feedback for a successful merge.

Thank you for contributing!


## License

This project is licensed under the MIT License.
