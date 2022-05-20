# curl examples for Lesson 2: Manual testing with curl

## Use JSON Placeholder — fake API for testing

- [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

## Make a request

```bash
curl https://jsonplaceholder.typicode.com/posts/1
```

- Only shows response body by default

## Show response headers

### `-i` or `--include`

```jsx
curl https://jsonplaceholder.typicode.com/posts/1 -i
```

## Show request and response headers

### `-v` or `--verbose`

```jsx
curl https://jsonplaceholder.typicode.com/posts/1 -v
```

## Send request headers

### `-H` or `--header` flag

```bash
curl https://jsonplaceholder.typicode.com/posts/1 \
	-H "Accept: application/json" \
	-v
```

## Send JSON formatted string as a request body

### `-d` or `--data` flag

```bash
curl https://jsonplaceholder.typicode.com/posts \
   -H "Accept: application/json" \
   -H "Content-Type: application/json" \
   -d '{ "title": "A fascinating post" }' \
   -v
```

- Automatically sets HTTP method to `POST`

## Send JSON file contents as a request body

### Create file `post.json`

```json
{ "title": "A fascinating post" }
```

### Make a request

```bash
curl https://jsonplaceholder.typicode.com/posts \
   -H "Accept: application/json" \
   -H "Content-Type: application/json" \
   -d @post.json \
   -v
```

## Set HTTP request method

### `-X` or `--request` flag

```
curl https://jsonplaceholder.typicode.com/posts/1 -X DELETE -v
```

## Output response body to a file

### `-o` or `--output`

```bash

curl https://jsonplaceholder.typicode.com/posts/1 -o post-response.json
```

## View the curl manual

- Many different options

```bash
man curl
```

- Up and down arrow keys to navigate
- Search with `/`
- Enter keywords, press enter
- `n` to move to next result
- `Shift` + `n` to move back to previous result
