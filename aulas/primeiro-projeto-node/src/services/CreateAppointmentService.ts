import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  public execute({date, provider}: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = appointmentsRepository.findByDate(
      parsedDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({provider, date: appointmentDate });

    return appointment;
    }
}

export default CreateAppointmentService;
