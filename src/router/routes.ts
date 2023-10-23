import {
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  deleteAllDoc,
  getAllDoc,
} from "../controllers/documentcontrollers";
import express from "express";

const router = express.Router();

router.route("/")
.get(getDoc)
.post(addDoc)
.delete(deleteDoc)
.patch(updateDoc);

router.route("/all")
.get(getAllDoc)
.delete(deleteAllDoc);
export default router;
