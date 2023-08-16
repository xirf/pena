import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
  const { current } = event.context.params;

  return await prisma.pens.findMany({
    select: {
      id: true,
      content: true,
      reactions: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    skip: current || 0,
    take: 20,
  })

});