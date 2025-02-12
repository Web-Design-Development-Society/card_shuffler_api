import express from "express";
import deckRouter from "./routes/deckRoutes.js";
import pileRouter from "./routes/pileRouter.js";

const PORT = process.env.PORT ?? 3000

const app = express();


// Middleware

// Routers
app.use('/deck', deckRouter);
app.use('/deck/:deck_id/pile', pileRouter);


app.listen(PORT, () => {
    console.log("Server started on port: " + PORT);
})