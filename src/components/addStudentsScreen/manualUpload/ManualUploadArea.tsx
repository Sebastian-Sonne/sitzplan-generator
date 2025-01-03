import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../../../state/slices/studentSlice";
import { nanoid } from "@reduxjs/toolkit";
import H3 from "../../headings/H3";

const ManualUploadArea = () => {
    const [content, setContent] = useState("");
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (content === "") {
            setError("Student name must not be of type empty string.");
            return;
        };
        setError(null);
        dispatch(addStudent({ name: content, id: nanoid() }));
        setContent("");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 20) {
            setError("Student name must not exceed 20 characters.");
        } else {
            if (error) setError(null);
            setContent(e.target.value);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <div className="w-full max-w-[600px] mx-auto p-6 bg-white rounded-xl shadow-md">
            <H3 value="Add students manually:" />

            <div className="flex flex-row justify-between gap-2">
                <input
                    className={`border-2 ${error && "border-red-500"} px-3 py-1 w-full rounded-lg`}
                    onChange={(c) => handleChange(c)}
                    value={content}
                    onKeyDown={handleKeyDown}
                    placeholder="John Doe"
                />

                <button
                    onClick={handleSubmit}
                    className="px-5 py-1 bg-green-500 hover:bg-green-600 transition-colors rounded-lg"
                >
                    <span className="flex justify-center items-center text-white font-bold text-2xl">+</span>
                </button>
            </div>

            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        </div>
    );
};

export default ManualUploadArea;
