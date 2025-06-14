import { PrismaClient } from "@prisma/client";

import { env } from "@/env";

const createPrismaClient = () =>
  new PrismaClient({
  });

const globalForPrisma = globalThis as unknown as {
};


