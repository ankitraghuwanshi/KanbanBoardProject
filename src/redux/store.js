import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./ticketSlice";

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});