import Ticket from "./Ticket";

export default function Column({ title, tickets }) {
  return (
    <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-gray-700 ">
      <h2 className="text-xl font-semibold capitalize mb-4 text-center tracking-wide">
        {title}
      </h2>

      <div className="space-y-4">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}