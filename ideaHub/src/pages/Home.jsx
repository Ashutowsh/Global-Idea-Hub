import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/configuration.js";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import { Button } from "../components/index.js";
import { Link } from "react-router-dom";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  const authStatus = useSelector((state) => state.status);

  if (!authStatus) {
    return (
      <div className="flex flex-wrap bg-dark-bg text-white p-8 justify-start">
        <div className="p-2 w-full">
          <h1 className="text-4xl font-bold hover:text-blue-500 transition duration-300">
            Welcome to Idea Hub - Unleash Your Creativity!
          </h1>
          <p className="text-xl my-3 text-gray-300">
            A platform to store and share your innovative ideas.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-400">
            Login to view your Ideas
          </h3>
          <p className="text-lg text-gray-400 mt-4">If you are new?</p>
          <h3 className="text-2xl font-semibold text-gray-400">
            Sign up now to begin your journey and revolutionize the future.
          </h3>
        </div>
      </div>
    );
  }

  if (authStatus && posts.length === 0) {
    return (
      <div className="p-2 w-full flex justify-around">
        <h1 className="text-4xl font-bold hover:text-blue-500 transition duration-300">
          Add Your First Idea
        </h1>
        <Link to="/add-post">
          <Button children="Add Idea" />
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
