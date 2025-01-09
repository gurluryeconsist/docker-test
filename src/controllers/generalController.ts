import { Request, Response } from "express";

export const testController = async (req: Request, res: Response) => {
  try {
    res.status(200).json("test completed successfully");
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
