// Import the express module for creating the server
import express from "express";

// Import the userRouter from the user router module
import { userRouter } from "./router/user";

// Import the zapRouter from the zap router module
import { zapRouter } from "./router/zap";

// Import the CORS middleware for handling cross-origin requests
import cors from "cors";

// Import the triggerRouter from the trigger router module
import { triggerRouter } from "./router/trigger";

// Import the actionRouter from the action router module
import { actionRouter } from "./router/action";

// Create an Express application instance
const app = express();

// Use JSON middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Use the userRouter for handling routes under /api/v1/user
app.use("/api/v1/user", userRouter);

// Use the zapRouter for handling routes under /api/v1/zap
app.use("/api/v1/zap", zapRouter);

// Use the triggerRouter for handling routes under /api/v1/trigger
app.use("/api/v1/trigger", triggerRouter);

// Use the actionRouter for handling routes under /api/v1/action
app.use("/api/v1/action", actionRouter);

// Start the server and listen on port 3000
app.listen(3000);
