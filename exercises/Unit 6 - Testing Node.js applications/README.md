# Exercises for Unit 6: Testing Node.js applications

## Exercise 1: Inspect an HTTP response with curl

> _After Unit 6, Lesson 2: Manual testing with curl_

1. Make an HTTP request with `curl` that shows the response headers for this URL: `https://jsonplaceholder.typicode.com/posts/1/comments`
2. What is the value of the `content-type` response header?

## Exercise 2: A test-driven HTTP response

> _After Unit 6, Lesson 5: Write an integration test_

Our integration test in `app.test.js` expects a JSON response.

1. Change the test to expect an HTML response header: `Content-Type: text/html`
2. Change the test to expect this HTML in `response.text`:
```html
<html><body>Welcome to the World Wide Web!</body></html>
```
3. Run the test with `npm test` — it should fail.
4. Update the code in `app.js` to send the HTTP response the test expects.
5. Run the test with `npm test` — it should pass.
