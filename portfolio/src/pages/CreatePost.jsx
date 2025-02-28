import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

    const [previewImages, setPreviewImages] = useState([]);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: e.target.files });
        setPreviewImages(Array.from(e.target.files).map((file) => URL.createObjectURL(file)));
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
        navigate("/");
    };

    return (
        <div className="mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input type="text" placeholder="Title" className="input border border-gray-400 rounded-xs px-4 py-2 w-full" onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                </div>
                <div>
                    <textarea placeholder="Brief Description" className="input border border-gray-400 rounded-xs px-4 py-2 w-full" onChange={(e) => setFormData({ ...formData, briefDescription: e.target.value })} required />
                </div>
                <div>
                    <textarea placeholder="Description" className="input border border-gray-400 rounded-xs px-4 py-2 w-full" onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
                </div>
                <div>
                    <input type="text" placeholder="Name" className="input border border-gray-400 rounded-xs px-4 py-2 w-full" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div>
                    <input type="number" placeholder="Ages" className="input border border-gray-400 rounded-xs px-4 py-2 w-full" onChange={(e) => setFormData({ ...formData, ages: e.target.value })} required />
                </div>
                <div>
                    <input type="number" placeholder="Rating (0-5)" className="input border border-gray-400 rounded-xs px-4 py-2 w-full" onChange={(e) => setFormData({ ...formData, ratingStars: e.target.value })} required />
                </div>
                <div>
                    <input type="file" multiple onChange={handleFileChange} className="block mt-2 border border-gray-400 rounded-xs px-4 py-2 w-full" />
                </div>
                {previewImages.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        {previewImages.map((src, index) => (
                            <img key={index} src={src} alt="Preview" className="h-20 object-cover rounded-md" />
                        ))}
                    </div>
                )}

                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
