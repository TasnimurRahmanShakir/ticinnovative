 const ContactLabel = ({ icon, text }) => (
  <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 shadow-sm rounded-sm mb-1 border border-gray-100">
    <span className="text-orange-500 text-sm">{icon}</span>
    <span className="font-bold text-gray-800 text-xs uppercase">{text}</span>
  </div>
);

export default ContactLabel;