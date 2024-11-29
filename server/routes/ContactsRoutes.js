import { Router } from "express";
import { verifyToken } from "../middleware/AuthMiddleware.js";
import {
  getAllContacts,
  getContactsforDMList,
  searchContacts,
} from "../controllers/ContactsController.js";

const contactsRoutes = Router();
contactsRoutes.post("/search", verifyToken, searchContacts);
contactsRoutes.get("/get-contacts-for-dm", verifyToken, getContactsforDMList);
contactsRoutes.get("/get-all-contacts", verifyToken, getAllContacts);

export default contactsRoutes;
