import React, { useRef } from 'react';
import document from '../images/Document.png'
import remove from '../images/Remove.png'
const FileCard = ({ file, setFile }) => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDelete = () => {
    setFile(null);
    inputRef.current.value = null;
  };

  return (
    <div className="w-[600px] flex flex-col gap-2">
      <div className="px-6 py-4 rounded-lg outline outline-1 outline-black flex flex-col justify-center items-center gap-2.5">
        
        <input type="file" ref={inputRef} onChange={handleChange} className="hidden" />
        <label
          className="cursor-pointer p-2.5 bg-red-400 rounded-[48px] inline-flex justify-center items-center gap-2.5"
          onClick={() => inputRef.current.click()}
        >
          <svg className="w-4 h-4" viewBox="0 0 18 22" fill="none">
            <path d="M13 9L9 13M9 13L5 9M9 13V1" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 17V18C1 18.8 1.3 19.6 1.9 20.1C2.4 20.7 3.2 21 4 21H14C14.8 21 15.6 20.7 16.1 20.1C16.7 19.6 17 18.8 17 18V17"
              stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </label>
        <div className="text-center text-zinc-800 text-base font-normal leading-normal">Drag and drop files here</div>
      </div>

      {file && (
        <div className="self-stretch inline-flex justify-between items-center px-2 mt-2">
          <div className="flex items-center gap-2">
            <img className="w-6 h-6" src={document} alt="file icon" />
            <div className="text-zinc-800 text-base font-normal">{file.name}</div>
          </div>
          <img
            className="w-8 h-8 cursor-pointer"
            src={remove}
            alt="delete"
            onClick={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default FileCard;
