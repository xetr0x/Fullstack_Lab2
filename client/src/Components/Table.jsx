import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
  const [assignments, setAssignments] = useState([]); //state for assignments
  const [sortBy, setSortBy] = useState({
    //state for sorting
    key: "start_date",
    direction: "desc",
  });

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/project_assignments"
      );
      setAssignments(response.data); //if successful, set assigments to state
    } catch (err) {
      console.error("Error fetching project assigment:", err);
    }
  };

  useEffect(() => {
    fetchAssignments(); //fetch assignments
    const interval = setInterval(fetchAssignments, 60000); //fetches every 60 sec (60k miliseconds)

    return () => clearInterval(interval);
  }, []);

  const sortChoice = (key) => {
    //always puts to the opposite direction when clicked
    let direction = "asc";
    if (sortBy.key === key && sortBy.direction === "asc") {
      direction = "desc";
    }
    setSortBy({ key, direction }); //sets new sort state

    const sorted = [...assignments].sort((a, b) => {
      const getVal = (item) =>
        ({
          employee_name: item.employee_id?.full_name ?? "",
          project_name: item.project_code?.project_name ?? "",
          start_date: item.start_date,
        }[key] ?? item[key]); //by default start_date

      const aVal = getVal(a);
      const bVal = getVal(b);

      if (aVal < bVal) return direction === "asc" ? -1 : 1;
      if (aVal > bVal) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setAssignments(sorted);
  };

  return (
    <div>
      <h2>the Table</h2>
      <table border={2} id="table">
        <thead>
          {/* ! Table head !  */}
          <tr>
            <th onClick={() => sortChoice("employee_id")}>Employee_ID</th>
            <th onClick={() => sortChoice("employee_name")}>Employee_name</th>
            <th onClick={() => sortChoice("project_name")}>Project_name</th>
            <th onClick={() => sortChoice("start_date")}>Start_date</th>
          </tr>
        </thead>
        <tbody>
          {/* ! Table body ! */}
          {assignments.map((a, index) => (
            <tr key={index}>
              <td>{a.employee_id._id}</td>
              <td>{a.employee_id.full_name}</td>
              <td>{a.project_code.project_name}</td>
              <td>{a.start_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
