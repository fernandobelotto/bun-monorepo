import { Request, Response } from "express";
import { cerbos } from "./cerbos";
import { sharedValue } from "shared";

export const handler = async (_req: Request, res: Response) => {
  try {
    const cerbosResponse = await cerbos.isAllowed({
      principal: {
        id: "user@example.com",
        roles: ["USER"],
      },
      resource: {
        kind: "user",
        id: "1"
      },
      action: "view",
    });
    console.log('cerbosResponse isAllowed', cerbosResponse);
  } catch (error) {
    console.log('error', error);
  }

  res.send("Hello world! private server: sharedValue: " + sharedValue);
};
