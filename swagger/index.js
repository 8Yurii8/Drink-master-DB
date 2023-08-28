import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerPath = path.join(__dirname, "swagger.json");
const swaggerRaw = fs.readFileSync(swaggerPath, "utf8");
const swaggerDocument = JSON.parse(swaggerRaw);
export default swaggerDocument;
