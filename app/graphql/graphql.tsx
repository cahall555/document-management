import { ApolloServer, gql } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";
import { AnyARecord } from 'dns';

const prisma = new PrismaClient();

const typeDefs = gql`

    type Accounts {
        id: String
        name: String
            
    }

    type Query{
        Accounts: [Accounts]!

    }

`;

const resolvers = {
    Query: {
        Accounts: (_parent:AnyARecord, _args:AnyARecord, _context:AnyARecord) => {
            return prisma.accounts.findMany();
        }
    },

};



const getApolloServerHandler = async (): Promise<any> => {

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start()
    const handler = apolloServer.createHandler({  
        path: '/api/graphql',
     });
    return handler;
};


export const config = {
    api: {
        bodyParser: false,
    },
};


export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const apolloServerHandler = await getApolloServerHandler();
    return apolloServerHandler(req, res);
};