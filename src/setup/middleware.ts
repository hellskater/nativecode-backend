import { json, urlencoded } from "express";
import cors from "cors";

import Router from "@api/routes";

export const initializeMiddlewares = (app: any) => {
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());

  // Initialising routes
  app.use("/api", Router);
};
