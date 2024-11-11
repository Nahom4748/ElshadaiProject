import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFilePdf, FaFileWord, FaEdit, FaTimes } from "react-icons/fa"; // Importing icons

const Year1Q1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  // Fetch data
  const fetchData = () => {
    setLoading(true);
    axios
      .get("http://localhost:5001/api/quarter1/videos")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleUpdate = () => {
    if (!selectedItem) return;

    setSaving(true);
    axios
      .put(
        `http://localhost:5001/api/quarter1/documents/${selectedItem.id}`,
        selectedItem
      )
      .then(() => {
        fetchData();
        closeModal();
      })
      .catch((error) => {
        console.error("Error updating item:", error.message);
      })
      .finally(() => {
        setSaving(false);
      });
  };

  if (loading)
    return <div className="text-center text-white">Loading documents...</div>;
  if (error)
    return <div className="text-center text-white">Error: {error}</div>;

  return (
    <div className="bg-gray-900 p-8 text-white min-h-screen">
      <h2 className="text-center text-4xl font-semibold mb-12">
        Year 1 Quarter 1 Documents
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-base text-gray-800">{`${item.year} - ${item.week}`}</h4>
              <button
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                onClick={() => openModal(item)}
                title="Edit Document"
              >
                <FaEdit />
              </button>
            </div>

            {/* Document Link */}
            {item.document && (
              <a
                href={item.document}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 text-blue-500 hover:underline text-lg font-medium"
              >
                {item.document_description || "View Document"}
                <div className="flex items-center mt-2">
                  {/* Check the document type and display the appropriate icon */}
                  {item.document.includes(".pdf") ? (
                    <FaFilePdf className="mr-2 text-red-500" />
                  ) : item.document.includes(".doc") ||
                    item.document.includes(".docx") ? (
                    <FaFileWord className="mr-2 text-blue-500" />
                  ) : (
                    <span className="mr-2 text-gray-500">File</span>
                  )}
                </div>
              </a>
            )}

            {/* Document Description */}
            {item.document_description && (
              <p className="text-sm text-gray-700 mt-2">
                {item.document_description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Modal for editing document */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md transform transition-transform scale-100">
            <button
              className="absolute top-3 right-3 text-gray-800 text-xl hover:text-red-600"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Edit Document Details
            </h3>
            <div className="space-y-4">
              <label className="block text-lg text-gray-800">Year:</label>
              <input
                type="text"
                value={selectedItem.year}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, year: e.target.value })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-lg text-gray-800">Week:</label>
              <input
                type="text"
                value={selectedItem.week}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, week: e.target.value })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-lg text-gray-800">
                Document Link:
              </label>
              <input
                type="text"
                value={selectedItem.document}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, document: e.target.value })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-lg text-gray-800">
                Document Description:
              </label>
              <textarea
                value={selectedItem.document_description}
                onChange={(e) =>
                  setSelectedItem({
                    ...selectedItem,
                    document_description: e.target.value,
                  })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-all"
                disabled={saving}
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Year1Q1;
