import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event: any) => {
    const { content } = await readBody(event);

    if (!content || content.length > 2000)
        return { error: 'Invalid content' };

    return prisma.pens.create({
        data: {
            'content': content,
            'reactions': 0,
        },
    });
});