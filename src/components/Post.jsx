const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      <section>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={() => editPost(id)} className="btn btn-primary me-2">
          Edit
        </button>
        <button onClick={() => deletePost(id)} className="btn btn-danger">
          Delete
        </button>
      </section>
    </>
  );
};
export default Post;
