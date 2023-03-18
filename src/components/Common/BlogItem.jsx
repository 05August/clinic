import { Link } from "react-router-dom";
import { RiArrowRightSLine, RiCalendarTodoFill } from "react-icons/ri";
import { convertDate } from "utils/convertDate"

const BlogItem = ({ data }) => {
  return (
    <div className="blog-card">
      <div className="post-media">
        <Link to="/blog-detail">
          <img src={data.img} alt="post img" />
        </Link>
      </div>
      <div className="post-info">
        <div className="post-meta">
          <div className="author">
            <Link to="/blog-detail">
              <img src={data.doctorAvatar} alt="author" />
              {data.doctorName}
            </Link>
          </div>
          <div className="date">
            <RiCalendarTodoFill />
            {convertDate(data.date)}
          </div>
        </div>
        <h5 className="post-title">{data.postTitle}</h5>
        <Link className="btn btn-outline-primary btn-sm" to="/blog-detail">
          Read More <RiArrowRightSLine />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
