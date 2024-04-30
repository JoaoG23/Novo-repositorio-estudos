class Prisma {
    public prisma = new PrismaClient()
}

const prisma = new Prisma().prisma

export {
    prisma
}