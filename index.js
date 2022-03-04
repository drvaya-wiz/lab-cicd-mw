const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const dateUp = Date.now();

app.get('/', (req, res) => {
  const today = new Date();

  res.json({
    date: today,
    up: `${(Date.now() - dateUp)/1000} seg.`,
    repo: 'https://github.com/drvaya-learn/hello-cloud-run',
    url: 'https://about.me/dharmeshvaya',
    desc: 'Built with Cloud Run - Demo for #TALK, thanks for attending : 04-Mar-2022 !!!'
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log('Press CTRL + C to quit');
});
