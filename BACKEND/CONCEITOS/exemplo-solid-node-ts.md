### MVC-SOLID


Certainly! Here's an example code snippet that demonstrates a simple implementation of a backend using Node.js, TypeScript, Express, MVC pattern, and SOLID principles:

````ts

// File: src/controllers/UserController.ts
import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getUsers();
    res.json(users);
  }
}

// File: src/services/UserService.ts
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/User';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}

// File: src/repositories/UserRepository.ts
import { User } from '../models/User';

export class UserRepository {
  public async getUsers(): Promise<User[]> {
    // Fetch users from database or any other data source
    const users: User[] = await db.query('SELECT * FROM users');
    return users;
  }
}

// File: src/models/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

// File: src/app.ts
import express, { Request, Response } from 'express';
import { UserController } from './controllers/UserController';
import { UserService } from './services/UserService';
import { UserRepository } from './repositories/UserRepository';

const app = express();

// Dependency Injection Setup
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Routes
app.get('/users', (req: Request, res: Response) => userController.getUsers(req, res));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



````
