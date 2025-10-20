const express = require('express');
const path = require('path');
const { fork } = require('child_process');
 
// If a PORT is passed, run a single server
if (process.env.PORT) {
  const app = express();
  app.use(express.static(__dirname));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Portfolio running at http://localhost:${PORT}`);
  });
} else {
  
  const ports = [3001, 3002, 3003];
  ports.forEach(port => {
    fork(__filename, [], { env: { PORT: port } });
  });
}