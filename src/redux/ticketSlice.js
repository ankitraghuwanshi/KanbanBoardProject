import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("tickets");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (tickets) => {
  localStorage.setItem("tickets", JSON.stringify(tickets));
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: loadFromLocalStorage(),
  },
  reducers: {
    addTicket: (state, action) => {
      state.tickets.push(action.payload);
      saveToLocalStorage(state.tickets);
    },
    deleteTicket: (state, action) => {
      state.tickets = state.tickets.filter(t => t.id !== action.payload);
      saveToLocalStorage(state.tickets);
    },
    updateTicket: (state, action) => {
      const ticket = state.tickets.find(t => t.id === action.payload.id);
      if (ticket) {
        ticket.content = action.payload.content;
        saveToLocalStorage(state.tickets);
      }
    },
    changeStatus: (state, action) => {
      const ticket = state.tickets.find(t => t.id === action.payload.id);
      if (ticket) {
        ticket.status = action.payload.status;
        saveToLocalStorage(state.tickets);
      }
    },
  },
});

export const { addTicket, deleteTicket, updateTicket, changeStatus } =
  ticketsSlice.actions;

export default ticketsSlice.reducer;