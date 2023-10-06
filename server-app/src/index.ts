import { productRouter } from "./routes";

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Running Express server on port ${PORT}`);
});

// Print routes
app.use((req: Request, _: Response, next: () => void) => {
  console.log(`Method: ${req.method}, Route: ${req.url}`);
  next();
});

app.use("/product", productRouter);
