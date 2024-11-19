import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";

const List = () => {
  const tempPosts = [
    { id: 1, title: "t1", content: "c1" },
    { id: 2, title: "t2", content: "c2" },
    { id: 3, title: "t3", content: "c3" },
  ];
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [posts, setPosts] = useState(tempPosts);

  let [isEdit, setIsEdit] = useState(false);
  let [isCreate, setIsCreate] = useState(false);
  let [editId, setEditId] = useState("");

  // useEffect(() => console.log(title), [title]);
  // useEffect(() => console.log(content), [content]);
  useEffect(() => console.log(posts), [posts]);

  function saveTitleToState(e) {
    setTitle(e.target.value);
  }

  function saveContentToState(e) {
    setContent(e.target.value);
  }

  let getTitle = useRef();
  let getContent = useRef();

  function savePost(e) {
    e.preventDefault();

    const id = Date.now();
    setPosts([...posts, { id, title, content }]);
    //clear the input field
    getTitle.current.value = "";
    getContent.current.value = "";

    toggleCreate();
  }

  function updated(e) {
    e.preventDefault();
    const updatedPosts = posts.map((post) => {
      if (post.id === editId) {
        return {
          ...post,
          title: title || post.title,
          content: content || post.content,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    toggleEdit();
  }

  const deletePost = (id) => {
    const modifiedPosts = posts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setPosts(modifiedPosts);
  };

  function cancleCreate(e) {
    e.preventDefault();
    toggleCreate();
    54;
  }

  function cancleEdit(e) {
    e.preventDefault();
    toggleEdit();
  }

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  function toggleCreate() {
    setIsCreate(!isCreate);
  }

  function editPost(id) {
    // console.log( id + "Post edited");
    toggleEdit();
    setEditId(id);
  }

  if (isCreate) {
    return (
      <Create
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        savePost={savePost}
        getTitle={getTitle}
        getContent={getContent}
        cancleCreate={cancleCreate}
      />
    );
  } else if (isEdit) {
    const post = posts.find((post) => post.id === editId);
    return (
      <Edit
        id={post.id}
        title={post.title}
        content={post.content}
        updated={updated}
        saveContentToState={saveContentToState}
        saveTitleToState={saveTitleToState}
        cancleEdit={cancleEdit}
      />
    );
  } else {
    return (
      <>
        <h1>All setup</h1>
        {!posts.length ? (
          <div>
            <h3 className="text-danger py-3">There is nothing to see here!</h3>
          </div>
        ) : (
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                editPost={editPost}
                deletePost={deletePost}
              />
            );
          })
        )}

        <button onClick={toggleCreate}>Create new post</button>
      </>
    );
  }
};

export default List;
