import express from "express";
const PORT = 8000;
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map