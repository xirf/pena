import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
    const { current } = event.context.params;

    return prisma.pens.update({
        where: {
            id: current,
        },
        data: {
            reactions: {
                increment: 1,
            },
        },
    });
});