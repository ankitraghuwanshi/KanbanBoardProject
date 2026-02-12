import { useDispatch } from "react-redux";
import { addTicket } from "../redux/ticketSlice";
import { useState } from "react";

export default function Modal() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("backlog");

  const handleSubmit = () => {
    if (!text.trim()) return;

    dispatch(
      addTicket({
        id: Date.now(),
        content: text,
        status,
      })
    );

    setText("");
    setShow(false);
  };

  return (
    <div className="text-center mt-6">
      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full shadow-lg"
      >
        + Add Task
      </button>

      {show && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-2xl w-96 shadow-2xl space-y-4">
            <textarea
              className="w-full p-3 rounded bg-gray-700 outline-none resize-none"
              rows="4"
              placeholder="Enter task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <select
              className="w-full p-2 rounded bg-gray-700"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="backlog">Backlog</option>
              <option value="pending">Pending</option>
              <option value="review">Review</option>
              <option value="done">Done</option>
            </select>

            <div className="flex justify-between">
              <button
                onClick={() => setShow(false)}
                className="text-gray-400 hover:text-white"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}