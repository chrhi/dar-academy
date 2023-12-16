"use client";

import * as z from "zod";

export const authSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});
