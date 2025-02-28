import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // To track loading state
    const [error, setError] = useState(null); // To track errors

    // Fetch posts
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/posts")
            .then((res) => {
                setPosts(res.data);
                setLoading(false); // Set loading to false after fetching
            })
            .catch((err) => {
                setError("Error fetching posts");
                setLoading(false); // Stop loading if error occurs
            });
    }, []);

    // Delete post
    const deletePost = async (id) => {
        try {
            // Optimistic UI update: Remove post from the state immediately
            setPosts(posts.filter((post) => post._id !== id));

            // Delete request to the backend
            await axios.delete(`http://localhost:5000/api/posts/${id}`);
        } catch (error) {
            setError("Error deleting post");
            // Revert optimistic UI update if deletion fails
            setPosts([...posts]);
        }
    };

    // Display loading or error messages
    if (loading) return <p>Loading posts...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="px-24">
            <Link
                to="/create"
                className="bg-green-500 text-white px-4 py-2 rounded block w-32 text-center mb-4"
            >
                Create Post
            </Link>
            {posts.map((post) => (
                <div key={post._id} className="bg-white p-4 shadow-md rounded-lg mb-4">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>

                    {/* Image Carousel */}
                    {post.images && post.images.length > 0 && (
                        <Carousel
                            showThumbs={false}
                            infiniteLoop
                            autoPlay
                            className="rounded-lg overflow-hidden w-1/2"
                        >
                            {post.images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={`http://localhost:5000/uploads/${image}`}
                                        alt={`Post ${index}`}
                                        className="h-72 w-1/2 object-fill"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    )}

                    <p className="mt-2">{post.briefDescription}</p>
                    <span className="text-yellow-500">⭐ {post.ratingStars}/5</span>
                    <div className="flex space-x-2 mt-2">
                        <Link
                            to={`/edit/${post._id}`}
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={() => deletePost(post._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;
