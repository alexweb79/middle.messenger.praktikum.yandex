// language=hbs
const defaultLayoutTmpl = `
  <!doctype html>
  <html lang="ru">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>{{{ title }}}</title>
      <link rel="stylesheet" href="../index.scss" />
      <script type="module" src="../index.js"></script>
  </head>
  <body>
    <div class="wrapper">
      <main id="root" class="main-content">
        {{{ page }}}
      </main><!-- .main-content -->
    </div><!-- .wrapper -->
  </body>
  </html>
`;
export default defaultLayoutTmpl;
