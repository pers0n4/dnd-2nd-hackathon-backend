import * as express from "express";
import { createConnection } from "typeorm";
import UsersRouter from "./routes/Users";

createConnection()
  .then(() => {
    // create express app
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // register express routes
    app.use("/users", UsersRouter);

    // setup express app here
    // ...

    // start express server
    app.listen(8000);

    console.log("Express server has started.");
  })
  .catch((error) => console.log(error));
