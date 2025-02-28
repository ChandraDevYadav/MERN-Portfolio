import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: "",
        name: "",
        ages: "",
        briefDescription: "",
        ratingStars: 0,
        images: [],
    });
    const [newImages, setNewImages] = useState([]);
    const [error, setError] = useState(null); // For error handling

    // Fetch existing post data
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/posts/${id}`)
            .then((res) => setPost(res.data))
            .catch((err) => setError("Failed to fetch post"));
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    // Handle file upload
    const handleFileChange = (e) => {
        setNewImages(e.target.files);
    };

    // Handle update
    const handleUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", post.title);
        formData.append("description", post.description);
        formData.append("name", post.name);
        formData.append("ages", post.ages);
        formData.append("briefDescription", post.briefDescription);
        formData.append("ratingStars", post.ratingStars);

        // Append new images if selected
        if (newImages.length > 0) {
            for (let i = 0; i < newImages.length; i++) {
                formData.append("images", newImages[i]);
            }
        }

        try {
            await axios.put(`http://localhost:5000/api/posts/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            navigate("/"); // Redirect to the main page
        } catch (err) {
            setError("Failed to update post");
        }
    };

    return post ? (
        <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}

            <form onSubmit={handleUpdate} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="input"
                />
                <textarea
                    name="description"
                    value={post.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="input"
                />
                <input
                    type="text"
                    name="name"
                    value={post.name}
                    onChange={handleChange}
                    placeholder="Author Name"
                    className="input"
                />
                <input
                    type="number"
                    name="ages"
                    value={post.ages}
                    onChange={handleChange}
                    placeholder="Ages"
                    className="input"
                />
                <textarea
                    name="briefDescription"
                    value={post.briefDescription}
                    onChange={handleChange}
                    placeholder="Brief Description"
                    className="input"
                />
                <input
                    type="number"
                    name="ratingStars"
                    value={post.ratingStars}
                    onChange={handleChange}
                    placeholder="Rating Stars"
                    className="input"
                />

                {/* Image Preview */}
                <div className="space-y-2">
                    {post.images.length > 0 && (
                        <div className="flex space-x-2">
                            {post.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={`http://localhost:5000/uploads/${image}`}
                                    alt="Post"
                                    className="h-20 w-20 object-cover rounded-md"
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* New Image Upload */}
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="input"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
                >
                    Update Post
                </button>
            </form>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default EditPost;
