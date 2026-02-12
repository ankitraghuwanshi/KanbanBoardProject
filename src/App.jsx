import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Column from "./components/column";

function App() {
  const tickets = useSelector((state) => state.tickets.tickets);

  const columns = ["backlog", "pending", "review", "done"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      <Modal />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {columns.map((col) => (
          <Column
            key={col}
            title={col}
            tickets={tickets.filter((t) => t.status === col)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;