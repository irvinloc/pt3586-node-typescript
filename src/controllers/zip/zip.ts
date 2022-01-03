import { Request, Response } from "express";
const db = require("../../database/index.js");

export function getZipUsers(req: Request, res: Response, next: any) {
  const sql =
    "select b.name from RESTAPI_userdetail a left outer join RESTAPI_user b " +
    "on (a.user_id=b.id) where zip = ?";
  const params = [req.params.id];

  db.all(sql, params, (err: any, row: any) => {
    if (err) {
      res
        .status(400)
        .contentType("application/json")
        .json({ error: err.message });
      return;
    }
    if (row.length == 0) {
      res.status(404).contentType("application/json").json({
        message: "zip not found",
        data: [],
      });
      return;
    }

    res.status(200).contentType("application/json").json({
      message: "success",
      data: row,
    });
  });
}

export function deleteZipUsers(req: Request, res: Response, next: any) {
  const sql =
    "delete from RESTAPI_user where id in (select  distinct(b.id) from RESTAPI_userdetail a left outer join RESTAPI_user b " +
    "on (a.user_id=b.id) where zip = ?)";
  const params = [req.params.id];

  db.run(sql, params, (err: any) => {
    if (err) {
      res
        .status(400)
        .contentType("application/json")
        .json({ error: err.message });
      return;
    }

    res.status(200).contentType("application/json").json({
      message: "successfully deleted",
    });
  });
}
