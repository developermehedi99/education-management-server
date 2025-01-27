import express from 'express';
import { studentController } from './student.controller';

const route = express.Router();

route.post('/create-student', studentController.createStudent);
route.get('/:studentId', studentController.findSingleStudent);
route.get('/', studentController.findAllStudent);

export const studentRoutes = route;
