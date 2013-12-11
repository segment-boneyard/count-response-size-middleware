# count-response-size-middleware

    Count the content bytes sent for a response.

## Example

```js
var countResponseSize = require('count-response-size-middleware');

var app = express();
app.use(countResponseSize());

app.use(function (req, res, next) {
    console.log('Sent ' + res._sent_ + ' bytes');
    next();
});
```

## API

### countResponseSize(options)

    Generate a count response size middleware with custom `options`: 

```js
{
    key: '_received' // save the size as `_received`
}
```