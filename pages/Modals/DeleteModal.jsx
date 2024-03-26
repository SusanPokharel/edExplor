import React from 'react';
import { FaExclamationCircle } from "react-icons/fa";

const DeleteModal = ({ isOpen, onCancel, onConfirm }) => {
    const handleCloseModal = () => {
        onCancel(); 
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg flex-1 max-w-96 relative">
                <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex items-center justify-center">
                <h2 className="text-4xl font-bold mb-10 text-red-500 border rounded-full bg-red-300 px-2 py-2"><FaExclamationCircle /></h2>
                </div>
                <h2 className="text-3xl font-bold mb-1 text-center">Delete file?</h2>
                <h2 className="text-xl mb-4 text-center">Are you sure you want to delete? This action can't be undone.</h2>
                <div className="flex justify-center mt-10">
                    <button onClick={onCancel} className="mr-4 bg-white-500 text-gray-600 border border-gray-600 px-4 py-2 hover:bg-blue-300 hover:border-blue-300 rounded-md">Cancel</button>
                    <button onClick={onConfirm} className="bg-red-500 text-black px-4 py-2 rounded-md border border-red-500 hover:bg-red-600 hover:border-red-600">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;



// const [showDeleteModal, setShowDeleteModal] = useState(false); // State variable for showing delete modal
// const [documentToDeleteIndex, setDocumentToDeleteIndex] = useState(null); // State variable to store the index of the document to delete

// const handleDelete = (index) => {
//     // Set the index of the document to delete and show the delete modal
//     setDocumentToDeleteIndex(index);
//     setShowDeleteModal(true);
// };

// const handleConfirmDelete = () => {
//     // Logic to delete the document goes here
//     setShowDeleteModal(false);
// };

// const handleCloseDeleteModal = () => {
//     setShowDeleteModal(false); // Close the delete confirmation modal
// };