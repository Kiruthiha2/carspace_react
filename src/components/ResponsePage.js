import { useState } from "react";
import { Search } from "lucide-react";
import "./Responsepage.css";

const ResponsePage = () => {
  // Sample data
  const [responses, setResponses] = useState([
    { id: "#01", name: "Amelia Tuner", email: "amelia@gmail.com", testDrive: "Yes", phone: "(406) 555-0120", description: "View" },
    { id: "#02", name: "John Doe", email: "john@example.com", testDrive: "No", phone: "(406) 555-0345", description: "View" },
    { id: "#03", name: "Sarah Smith", email: "sarah@example.com", testDrive: "Yes", phone: "(406) 555-0678", description: "View" },
    // Add more sample data if needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filter responses based on search input
  const filteredResponses = responses.filter(response =>
    response.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    response.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    response.phone.includes(searchTerm)
  );

  return (
    <div className="response-container bg-blue-50 min-h-screen p-6">
  <div className="flex justify-between items-center mb-4">
    {/* Search Bar */}
    <div className="relative w-full max-w-lg"> {/* Increased max width */}
      <input
        type="text"
        placeholder="Search"
        className="pl-12 pr-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
    </div>
  </div>



      {/* Table */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">#ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Test Drive</th>
              <th className="p-3">Phone Number</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredResponses.map((response, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{response.id}</td>
                <td className="p-3">{response.name}</td>
                <td className="p-3">{response.email}</td>
                <td className="p-3">{response.testDrive}</td>
                <td className="p-3">{response.phone}</td>
                <td className="p-3 text-blue-500 cursor-pointer">{response.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsePage;
