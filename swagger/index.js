import path from "path";
import fs from "fs";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const swaggerPath = path.join(__dirname, "swagger.json");
const swaggerRaw = fs.readFileSync(swaggerPath, "utf8");
const swaggerDocument = JSON.parse(swaggerRaw);
export default swaggerDocument;
