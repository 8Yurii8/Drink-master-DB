import express from "express";
import logger from "morgan";
import cors from "cors";
import "dotenv/config.js";

import {
  recipesRouter,
  ingredientsRouter,
  glassesRouter,
  categoriesRouter,
  ownRouter,
  authRouter,
  subscribeRouter,
  searchRouter,
} from "./routes/api/index.js";

export const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/glasses", glassesRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/subscribe", subscribeRouter);
app.use("/api/own", ownRouter);
app.use("/api/search", searchRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
