import React from "react";

const Create = ({
  saveTitleToState,
  saveContentToState,
  savePost,
  getTitle,
  getContent,
  cancleCreate
}) => {
  return (
    <>
      <h1 className="text-secondary text-center">Create a new post</h1>
      <form className="w-50 mx-auto">
        <input
          className="form-control mb-3"
          ref={getTitle}
          onChange={saveTitleToState}
          type="text"
          placeholder="title"
        />
        <textarea
          className="form-control mb-3"
          onChange={saveContentToState}
          placeholder="Context"
          ref={getContent}
        ></textarea>
        <button className="btn bg-primary " onClick={savePost}>
          Create
        </button>
        <button onClick={cancleCreate}   className="btn bg-danger ms-5">Cancle</button>
      </form>
    </>
  );
};

export default Create;
