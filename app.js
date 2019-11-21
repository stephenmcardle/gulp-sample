const Express = require('express');
const staticRoot = __dirname + '/public/';

const app = new Express();

app.use(Express.static(staticRoot));

app.use('*', (req, res) => {
    res.status(404).json({error: "Not Found"});
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});