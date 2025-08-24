import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
  const fetchAssignments = async () => {
    console.log("Fetching project assignments...");
    try {
      const response = await axios.get(
        "http://localhost:5000/api/project_assignments"
      );
      console.log("Project fetched:", response.data);
    } catch (err) {
      console.error("Error fetching project assigment:", err);
    }
  };

  fetchAssignments();
};

export default Table;
