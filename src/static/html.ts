const SCRIPT = './static/main.js';

export default `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Tree of Abstraction</title>
  </head>
  <body>
    <div id='root'></div>
    <script>var exports = {};</script>
    <script src='${SCRIPT}'/></script>
  </body>
</html>
`
