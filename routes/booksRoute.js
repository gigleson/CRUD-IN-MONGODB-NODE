import express from "express";

import { deleteById, getBook, getById, postBook, updateById } from "../controller/controller.js";
const router = express.Router();
// router.use(express.json())

router.post('/', postBook);

router.get("/", getBook);

router.get("/:id", getById);

router.put("/:id",updateById);

router.delete("/:id", deleteById);

export default router;