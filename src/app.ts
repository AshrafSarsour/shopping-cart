import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AppRouter } from './routes';
import { sendJsonResponse } from './utils/jsonResponse'; // Import the jsonResponse utility

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.handleNotFoundRoutes();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/api', AppRouter);
    // Add more routes here if needed
  }

  private handleNotFoundRoutes(): void {
    // Handle not found routes
    this.app.use((req: Request, res: Response) => {
      sendJsonResponse(res, 404, { success: false, error: 'Not Found' });
    });
  }
}

export default new App().app;
