let express = require('express');
let app = express();
let PORT = 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function(){
  console.log(`LISTENING TO PORT ${PORT}`);
})