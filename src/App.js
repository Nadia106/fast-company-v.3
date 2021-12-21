import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (userId) => {
    setUsers(
      users.map((user) =>
        user._id === userId
          ? { ...user, isBookmarked: !user.isBookmarked }
          : user
      )
    );
  };

  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        onDelete={handleDelete}
        onBookMark={handleToggleBookMark}
        users={users}
      />
    </>
  );
};

export default App;
