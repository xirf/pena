import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
  const { cursor } = event.context.params;

  const posts = await prisma.pens.findMany({
    select: {
      id: true,
      content: true,
      reactions: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    cursor: cursor ? { id: cursor } : undefined,
    // skip: 1,
    take: 20,
  });

  if (posts.length === 0) {
    return null;
  }

  return posts;
});
