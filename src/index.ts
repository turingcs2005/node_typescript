import express, { Express, Request, Response }  from "express";

const PORT = 8000;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello, world!');
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});



