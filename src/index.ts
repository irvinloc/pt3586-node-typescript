import * as dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import zipRoutes from "./routes/zip/zip";
var db = require("./database/index.js");

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(zipRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Root endpoint
// app.get("/", (req, res, next) => {
//   res.json({ message: "Ok" });
// });

// app.get("/api/users", (req: Request, res: Response, next) => {
//   var sql = "select * from user";
//   var params = [String];
//   db.all(sql, params, (err: any, rows: any) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: rows,
//     });
//   });
// });

// app.get("/api/cp/:id", (req: Request, res: Response, next) => {
//   var sql =
//     "select b.name from RESTAPI_userdetail a left outer join RESTAPI_user b " +
//     "on (a.user_id=b.id) where zip = ?";
//   var params = [req.params.id];
//   db.all(sql, params, (err: any, row: any) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: row,
//     });
//   });
// });

// Insert here other API endpoints

// Default response for any other request
// app.use(function (req: Request, res: Response) {
//   res.status(404);
// });
