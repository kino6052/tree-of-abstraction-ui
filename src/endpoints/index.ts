import express from 'express';

const SCRIPT = './static/index.js';

export default (app: ReturnType<typeof express>) => {
  app.get('/', (req, res) => {
    console.log(req.accepts);
    res.send(
`
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Tree of Abstraction</title>
  </head>
  <body>
    <div id='root'></div>
    <script src='${SCRIPT}'/></script>
  </body>
</html>
`
    )
  });
}
