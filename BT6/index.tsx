import React from "react";

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
}

interface DetailPostProps {
    post: Post;
}

const DetailPost: React.FC<DetailPostProps> = ({ post }) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <p><b>Id:</b> {post.id}</p>
            <p><b>Title:</b> {post.title}</p>
            <p><b>Content:</b> {post.content}</p>
            <p><b>Author:</b> {post.author}</p>
            <hr />
        </div>
    );
};

export default DetailPost;
