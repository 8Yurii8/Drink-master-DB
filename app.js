import express from "express";
import logger from "morgan";
import cors from "cors";

// import {
//   authRoter,
//   recipesRouter,
//   ingredientsRoute,
//   glassRouter,
// } from "./routes/api/index.js";
import authRoter from "./routes/api/authRoute.js";
export const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/user", authRoter);
// app.use("/api/recipes", recipesRouter);
// app.use("/api/ingredients", ingredientsRoute);
// app.use("/api/glass", glassRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
