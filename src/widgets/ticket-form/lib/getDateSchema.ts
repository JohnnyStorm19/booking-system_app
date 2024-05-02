import { z } from "zod";

export const getDateSchema = () => {
  const dayToSeconds = 86400;
  const ms = dayToSeconds * 1000
  const yesterday = new Date(Date.now() - ms);

  const dateSchema = z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  }, z.date().min(yesterday, { message: "Вы намереваетесь уехать из прошлого...у нас так нельзя" }));

  return dateSchema;
};
