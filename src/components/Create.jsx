import React from "react";
import { AiFillDelete, AiFillSignature } from "react-icons/ai"; // Import icons

const Create = ({
  saveTitleToState,
  saveContentToState,
  savePost,
  getTitle,
  getContent,
  cancleCreate,
}) => {
  return (
    <>
      <h1 className="text-secondary text-center">Create a New Post</h1>
      <table className="w-50 mx-auto">
        <input
          className="form-control mb-3"
          ref={getTitle}
          onChange={saveTitleToState}
          type="text"
          placeholder="Title"
        />
        <textarea
          className="form-control mb-3"
          onChange={saveContentToState}
          placeholder="Content"
          ref={getContent}
        ></textarea>

        {/* Buttons */}
        <div className="d-flex justify-content-center">
          <button className="btn bg-primary text-white me-3" onClick={savePost}>
            <AiFillSignature className="me-2" />
            Create
          </button>
          <button onClick={cancleCreate} className="btn bg-danger text-white">
            <AiFillDelete className="me-2" />
            Cancel
          </button>
        </div>
      </table>
    </>
  );
};

export default Create;
