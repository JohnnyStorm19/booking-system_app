import style from './AdultsTickets.module.scss';

import { ChangeEventHandler, useState } from "react";

interface ITIcketsCounter {
  type: 'adults' | 'child' | 'noSeatChild';
  max: number;
}

enum TicketsInputLabe {
  adults = "Взрослых",
  child = "Детских",
  noSeatChild = "Детских \"без места\""
}

export const TicketsCounter = ({type, max}: ITIcketsCounter) => {
  const initialValue = type === "adults" ? 1 : 0;
  const [tickets, setTickets] = useState(initialValue);

  const changeTicketsValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value === '' ? '0' : e.currentTarget.value;
    const currentValue = parseInt(value);
    if (currentValue > max) {
      setTickets(max);
      return;
    }
    setTickets(currentValue);
  }

  return (
    <div>
      <label htmlFor="ticket_input">{TicketsInputLabe[type]} - </label>
      <input type="number" id="ticket_input" min={initialValue.toString()} max={max.toString()} onChange={changeTicketsValue} value={tickets} />
      <span>можно добавить еще {max - tickets} пассажиров</span>
    </div>
  )
}
