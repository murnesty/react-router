import React from "react";
import { useParams } from "react-router-dom";

const UserPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>User Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default UserPage;
