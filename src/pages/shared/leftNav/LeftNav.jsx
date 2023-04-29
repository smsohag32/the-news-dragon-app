import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://dragon-news-server-smsohag32.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="">
      <h4 className="bg-secondary p-2 text-center">All categories</h4>
      <div className="p-3">
        {categories?.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
