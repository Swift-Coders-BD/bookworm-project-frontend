import { useRouter } from "next/router";
import { useContext } from "react";
import { FaBookOpen, FaClock, FaEdit, FaCalendar } from "react-icons/fa";
import { BlogContext } from "../_app";

const blogDetails = () => {
  const [blogData, setBlogData] = useContext(BlogContext);
  const router = useRouter();
  const { id } = router.query;

  const newBlogData = blogData.find((data) => data.id == id);

  return (
    <div className="pt-36 pb-32 flex  px-10 py-10 justify-center items-center">
      <div className="rounded overflow-hidden shadow-md">
        <img
          className="h-96 w-full rounded object-cover"
          src={newBlogData?.img}
          alt=""
        />
        {/* description */}
        <div className="px-5 pb-7 space-y-5 text-gray-500 font-bold bg-gray-100 pt-5">
          <div>
            <span className="text-4xl"> {newBlogData?.title} </span>
          </div>
          <div className="flex items-center">
            <FaEdit />
            <span className="text-lg pl-2">{newBlogData?.name} </span>
          </div>

          <div>
            <span className="text-lg"> {newBlogData?.text} </span>
          </div>
          <div className="flex items-center">
            <FaCalendar />
            <span className="text-lg pl-2"> {newBlogData?.date} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogDetails;
