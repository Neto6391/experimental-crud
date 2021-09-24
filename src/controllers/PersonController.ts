import { Request, Response } from 'express';

class PersonController {
    constructor() {}

    public getPersons = async (req: Request, res: Response) => {
        res.status(200).json({ message: 'Hello' });
    }

}

export default PersonController;