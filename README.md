# Webtask - ColorizeMe

A Simple Auth0 webtask service that takes a string and returns a HEX value representing your name!

```
https://{your-webtask-url}/colorize?name=Rickfrom1987

result = {
  "code": 200,
  "type": "success",
  "name": "rickfrom1987",
  "_": "1492581466349",
  "hex": "A96FB0",
  "hex_hash": "#A96FB0"
}
```

##e2e Tests
Setup dummy e2e to test endpoints when ready.

`npm run test`

##Update webtask

you can run:

`npm run update`

or you can use wt edit {taskname} or open up editor in browser


##TODO/Improvements:

- build/deploy scripts for webtask.qa.js and webtask.prod.js
- better e2e testing with
- play around with Authorization
- add better more robust e2e testing
