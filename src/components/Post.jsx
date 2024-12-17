import { AiFillDelete, AiFillSignature } from "react-icons/ai"; // Import icons
const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{content}</td>
        <td>
          <button
            onClick={() => editPost(id)}
            className="btn btn-primary mx-3 my-3"
          ><AiFillSignature className="me-2" />
            Edit
          </button>
          <button
            onClick={() => deletePost(id)}
            className="btn btn-danger mx-2 my-3"
          >
            <AiFillDelete className="me-2" />
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default Post;
