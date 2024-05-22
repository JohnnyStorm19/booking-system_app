import { ISeatPrices } from "../types"

export const getLowestSeatPrice = (seatPrices: Partial<ISeatPrices>) => {
    const prices = Object.values(seatPrices);
    return Math.min(...prices);
}