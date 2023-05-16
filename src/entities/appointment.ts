import { it } from "vitest";

export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.customer;
  }

  get endsAt() {
    return this.props.customer;
  }

  constructor(props: AppointmentProps) {
    const { startsAt, endsAt } = props;

    if(startsAt <= new Date()) {
      throw new Error("Invalid start date")
    }

    if(endsAt <= startsAt) {
        throw new Error("Invalid end date")
    }

    this.props = props;
  }
}
