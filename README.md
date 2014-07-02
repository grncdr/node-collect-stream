# collect-stream

A promise wrapper around [`concat-stream`][concat-stream] (which is awesome!)

## Synopsis

```javascript

var collectStream = require('collect-stream');

collectStream(someFunctionThatReturnsStreams()).then(function (data) {
  // do something with `data`
});
```

## Notes

Same as `concat-stream`, this will consume everything in the stream as fast as
possible. Don't use it on really big streams.

Unlike `concat-stream` this will listen to the 'error' event on the source
stream and use it to reject the returned promise.

## License

MIT
