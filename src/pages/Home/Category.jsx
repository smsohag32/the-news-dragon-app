import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {id && (
        <h4 className="pt-5 pb-2">
          This Category News Found: {categoryNews.length}
        </h4>
      )}
      <div>
        {categoryNews?.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Category;
