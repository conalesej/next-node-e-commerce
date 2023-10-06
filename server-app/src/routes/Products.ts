const { Router } = require("express");
export const router = Router();

router.get("/list", (request: any, response: any) => {
  response.send({ status: 200, data: ["product Test"] });
});
