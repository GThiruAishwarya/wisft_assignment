import { Request, Response } from 'express';
import { getDB } from '../database';
import axios from 'axios';

export const loadUsers = async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        // Store users in DB
        const db = getDB();
        await db.collection('users').insertMany(users);
        
        res.status(200).send();
    } catch (error) {
        res.status(500).send({ error: 'Failed to load users' });
    }
};

// Additional controller methods for DELETE, GET, PUT would go here
