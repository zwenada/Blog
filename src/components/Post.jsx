import { AiFillDelete, AiFillSignature } from "react-icons/ai"; // Import icons
const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{content}</td>
        <td>
          <button onClick={() => editPost(id)} className="btn btn-primary me-2">
            <AiFillSignature />
          </button>
          <button onClick={() => deletePost(id)} className="btn btn-danger">
            <AiFillDelete />
          </button>
        </td>
      </tr>
    </>
  );
};
export default Post;
