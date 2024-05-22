import { maxAdultsTickets, maxChildrenTickets } from "../../consts"
import { TicketsCounter } from "./tickets-counter/TicketsCounter"

export const TicketsQuantity = () => {
  return (
    <div>
      <TicketsCounter type="adults" max={maxAdultsTickets} />
      <TicketsCounter type="child" max={maxChildrenTickets} />
      <TicketsCounter type="noSeatChild" max={maxChildrenTickets} />
    </div>
  )
}
