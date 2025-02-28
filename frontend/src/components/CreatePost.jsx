import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        briefDescription: "",
        name: "",
        ages: "",
        ratingStars: "",
        images: [],
    });

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: e.target.files });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === "images") {
                for (let i = 0; i < formData.images.length; i++) {
                    data.append("images", formData.images[i]);
                }
            } else {
                data.append(key, formData[key]);
            }
        });

        await axios.post("http://localhost:5000/api/posts/create", data);
        alert("Post created successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
            <input type="text" placeholder="Title" className="input" onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
            <input type="file" multiple onChange={handleFileChange} className="mt-2" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-3">Create Post</button>
        </form>
    );
};

export default CreatePost;
