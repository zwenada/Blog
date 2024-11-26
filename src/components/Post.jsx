const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      <section >
        <table className="mx-auto">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3 className="m-5 text-center">{title}</h3>
              </td>
              <td>
                <p className="mx-5 text-center">{content}</p>
              </td>
              <td>
                <button
                  onClick={() => editPost(id)}
                  className="btn btn-primary mx-3 my-3"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(id)}
                  className="btn btn-danger mx-2 my-3"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          {/* <h3 className="mx-5 text-center">{title}</h3>
          <p className="mx-5 text-center">{content}</p>
          <button
            onClick={() => editPost(id)}
            className="btn btn-primary mx-2 my-3 text-center"
          >
            Edit
          </button>
          <button
            onClick={() => deletePost(id)}
            className="btn btn-danger mx-2 my-3 text-center"
          >
            Delete
          </button> */}
        </table>
      </section>
    </>
  );
};
export default Post;
