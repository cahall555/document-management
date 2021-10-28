import { accounts } from './accounts';
import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient();

async function main() {
    for (const account of accounts) {
        await prisma.account.create({
            data: account
        })
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1);
})
.finally(() => {
    prisma.$disconnect();
})