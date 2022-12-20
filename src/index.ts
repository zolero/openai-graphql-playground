import "dotenv-defaults/config";
import express from "express";
import { createYoga, YogaServerInstance } from "graphql-yoga";
import { Express } from "express-serve-static-core";
import { getBuiltMesh } from ".mesh";

class Server {
    private graphql: YogaServerInstance<any, any> | undefined;
    private express: Express;

    // Bind listener
    private port = process.env.PORT || 8500;

    constructor() {
        // Initialize Express
        this.express = express();
    }

    // Create Server
    private async createServer() {
        const mesh = await getBuiltMesh();

        // Initialize graphql
        this.graphql = createYoga({
            graphiql: {
                title: "Graphql API",
                credentials: "include"
            },
            parserCache: false,
            validationCache: false,
            plugins: [...mesh.plugins],
            cors: {
                origin: process.env.CORS || "*",
                credentials: true
            },
            landingPage: false
        });

        // Serve .graphql file to dev
        this.express.use("/graphql", this.graphql);
    }

    /**
     * Start server
     */
    public async start() {
        // Create Graphql Server
        await this.createServer();

        this.express.listen(this.port, () => {
            console.log(`Running a GraphQL API server at http://localhost:${this.port}/graphql`);
        });
    }
}

(async () => {
    const server = new Server();
    await server.start();
})();
