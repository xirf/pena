// import { PrismaClient } from '@prisma/client';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
    const post = await prisma.post.create({
        data: {
            content: "Hello World",
            reactions: Math.floor(Math.random() * 100),
        }
    });
}

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}