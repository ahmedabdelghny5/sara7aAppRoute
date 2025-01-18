import cors from 'cors';
import connectionDB from './DB/connectionDB.js';
import messageRouter from './modules/messages/message.controller.js';
import userRouter from './modules/users/user.controller.js';
import { globalErrorHandler } from './utils/globalErrorHandling/index.js';

const bootstrap = async (app, express) => {
    // Enable CORS for all requests
    app.use(cors())
    
    // Middleware to parse JSON request bodies
    app.use(express.json());

    app.get("/", (req, res) => {
        return res.status(200).json({ message: "Welcome to the sara7a app" })
    })
    // Routes for application
    app.use("/users", userRouter)
    app.use("/messages", messageRouter)

    // Connect to the database
    connectionDB()

    // Error handling middleware for invalid URLs
    app.use("*", (req, res, next) => {
        return next(new Error(`${req.originalUrl} is inValid URL `, { cause: 404 }));
    })

    // Error handling middleware
    app.use(globalErrorHandler)
}

export default bootstrap