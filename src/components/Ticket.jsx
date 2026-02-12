import { useDispatch } from "react-redux";
import {
  deleteTicket,
  updateTicket,
  changeStatus,
} from "../redux/ticketSlice";
import { useState } from "react";

const statuses = ["backlog", "pending", "review", "done"];

export default function Ticket({ ticket }) {
  const dispatch = useDispatch();
  const [locked, setLocked] = useState(true);

  const nextStatus = () => {
    const idx = statuses.indexOf(ticket.status);
    const newStatus = statuses[(idx + 1) % statuses.length];
    dispatch(changeStatus({ id: ticket.id, status: newStatus }));
  };

  return (
    <div className="bg-gray-700 hover:bg-gray-600 transition-all duration-300 p-4 rounded-xl shadow-md relative group">

      {/* Status Indicator */}
      <div
        onClick={nextStatus}
        className="absolute top-3 right-3 w-3 h-3 rounded-full bg-blue-400 cursor-pointer group-hover:scale-125 transition"
      ></div>

      {/* Content */}
      <div
        contentEditable={!locked}
        suppressContentEditableWarning
        onBlur={(e) =>
          dispatch(updateTicket({ id: ticket.id, content: e.target.innerText }))
        }
        className="text-sm leading-relaxed outline-none"
      >
        {ticket.content}
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <button
          onClick={() => setLocked(!locked)}
          className="text-gray-300 hover:text-white transition"
        >
          {locked ? "🔒 Lock" : "🔓 Unlock"}
        </button>

        <button
          onClick={() => dispatch(deleteTicket(ticket.id))}
          className="text-red-400 hover:text-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}