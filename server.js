const app = require("./app");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const port = process.env.PORT;

app.listen(port, () => console.log(`App running at http://127.0.0.1:${port}`));