require('dotenv').config();
const app = require('./server');

const server = process.env.PORT;

app.listen(server, () => {
    console.log(`->Server started on http://localhost:${server}`);
});