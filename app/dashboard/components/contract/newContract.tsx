import React from 'react';

const NewContract = ({ setOpenContractPopUp }: { setOpenContractPopUp: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="bg-white p-8 rounded shadow-md">
                <button onClick={() => setOpenContractPopUp(false)} className="bg-red-500 text-white px-4 py-2 rounded mb-4">
                    Close
                </button>
                <p>This is the modal content!</p>
            </div>
        </div>
    );
};

export default NewContract;
