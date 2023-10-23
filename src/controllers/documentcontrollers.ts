import express from "express";
import document from "../model/document";
export const getDoc = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.query.id;
    console.log(id);

    const docs = await document.find({ parentId: id });
    return res.status(200).json({ message: "get doc success", docs });
  } catch (error) {
    res.status(500).json({ message: "fail" });
  }
};

export const addDoc = async (req: express.Request, res: express.Response) => {
  try {
    const { id, title } = req.body;
    console.log(id, title);

    const doc = {
      parentId: id,
      title,
    };

    const docI = await document.create(doc);
    return res.status(200).json({ message: "sucess", data: docI });
  } catch (error) {
    res.status(500).json({ message: "fail" });
  }
};

export const deleteDoc = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.query;
    console.log(id, "delete");
    
    const docI = await document.findByIdAndDelete(id);
    return res.status(200).json({ message: "sucess", docI } );
  } catch (error) {
    res.status(500).json({ message: "fail" });
  }
};

export const updateDoc = (
  req: express.Request,
  res: express.Response
): express.Response => {
  return res.send("I am from doc update");
};

export const deleteAllDoc = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const akc = await document.deleteMany();
    return res.status(200).json({ message: "delete successfully", akc });
  } catch (error) {
    res.status(501).json({ message: "all document delete fail" });
  }
};

export const getAllDoc = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const docs = await document.find({});
    return res.status(200).json({ message: "get doc success", docs });
  } catch (error) {
    res.status(500).json({ message: "fail" });
  }
};
