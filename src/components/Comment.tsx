"use client";
import React, { useState, useEffect } from "react";

const CommentSection = () => {
  // State to hold comments
  const [comments, setComments] = useState<string[]>([]);
  // State to hold the new comment input
  const [newComment, setNewComment] = useState<string>("");

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Handle the input change
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4 dark:text-white">Comment Section</h2>
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="w-full p-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none dark:text-white"
          rows={4}
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
        >
          Add Comment
        </button>
      </div>
      <div>
        <h3 className="text-xl text-black font-medium mb-3 dark:text-white">Comments:</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to add one!</p>
        ) : (
          <ul className="space-y-2">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="p-2 border border-gray-200 rounded-lg bg-gray-50"
              >
                {comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
