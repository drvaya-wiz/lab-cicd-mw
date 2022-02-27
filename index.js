const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const dateUp = Date.now();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log('Press CTRL + C to quit');
});
