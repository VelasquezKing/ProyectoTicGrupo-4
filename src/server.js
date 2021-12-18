const express = require("express");
const mongoose = require("mongoose");

const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");

//kc8jJzGvT14oDQ1T
//mongodb+srv://giovanny:<password>@cluster0.uzb6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

dotenv.config();
const app = express();

mongoose
  .connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log(
      `Conectado a MongoDB: ${process.env.DB_HOSTNAME}:${process.env.DB_PORT}`
    );
    app.listen(process.env.PORT, () => {
      console.log(`Escuchando en el puerto: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", apiRoutes);