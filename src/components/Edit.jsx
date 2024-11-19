import React from "react";

const Edit = ({ id, title, content, updated, saveContentToState, saveTitleToState, cancleEdit }) => {
  return (
    <>
      <h1 className="text-secondary text-center">Edit post</h1>
      <form className="w-50 mx-auto">
        <input
          className="form-control mb-3"
          type="text"
          placeholder="title"
          defaultValue={title}
          onChange={saveTitleToState}
        />
        <textarea
          className="form-control mb-3"
          placeholder="Context"
          defaultValue={content}
          onChange={saveContentToState}
        ></textarea>
        <button onClick={updated} className="btn bg-primary " >
          Edit
        </button>
        <button onClick={cancleEdit} className="btn bg-danger ms-5">Cancle</button>
      </form>
    </>
  );
};

export default Edit;
