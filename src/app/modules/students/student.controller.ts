import { Request, Response } from 'express';
import { studentServices } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentDB } = req.body;
    const result = await studentServices.createStudentIntoDB(studentDB);
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const findAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.gelAllStudentsIntoDB();

    res.status(200).json({
      success: true,
      message: 'all student find successfully done',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const findSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSinGleStudentIntoDB(studentId);
    res.status(200).json({
      success: true,
      message: 'all student find successfully done',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  findAllStudent,
  findSingleStudent,
};
