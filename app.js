import express from "express";
import logger from "morgan";
import cors from "cors";

import {
  authRoute,
  recipesRouter,
  ingredientsRoute,
  glassRouter,
  subscribeRoute,
} from "./routes/api/index.js";

export const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/recipes", recipesRouter);
app.use("/api/ingredients", ingredientsRoute);
app.use("/api/glass", glassRouter);
app.use("/api/subscribe", subscribeRoute);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
