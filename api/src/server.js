require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import apiAdminRoute from "./routes/apiAdmin";
import apiUserRoute from "./routes/apiUser";
import connectDB from './config/connectDB';
import cors from 'cors';

const app = express();
const PORT = 8000 || 7000;

const allowedDomains = ["http://localhost:3000", "http://localhost:3001", "https://ecommerce-frontend-dan0.onrender.com"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedDomains.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['X-Requested-With', 'content-type'],
  credentials: true
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
// parse application/json
app.use(bodyParser.json({ limit: "50mb" }));

// config
app.use(cookieParser());

// routes
apiAdminRoute(app);
apiUserRoute(app)

// connect
connectDB();

app.listen(PORT, () => {
  console.log(">>> JWT Backend is running on the port = " + PORT);
});
