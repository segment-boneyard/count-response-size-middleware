# count-response-size-middleware

  Count the content bytes in each [express](https://github.com/visionmedia/express) response.

## Example

```js
var countResponseSize = require('count-response-size-middleware');

var app = express();
app.use(countResponseSize());

app.use(function (req, res, next) {
    console.log('response is  ' + res._sent + ' bytes');
    next();
});
```

## API

### countResponseSize(options)

  Generate a count response size middleware with `options` defaulting to: 

```js
{
    key: '_sent' // save the size as `_sent`
}
```

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

