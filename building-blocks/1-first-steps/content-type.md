# Content Type

## `application/json`

```js
app.get('/locations', function (request, response) {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});
```

## `text/html`

```js
app.get('/locations', function(request, response) {
  var cities = '<ul><li>Caspiana</li><li>Indigo</li></ul>';
  response.send(cities);
});
```
