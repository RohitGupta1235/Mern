import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../api/employees";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("M");
  const [courses, setCourses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      mobile,
      designation,
      gender,
      courses,
    };

    try {
      const response = await createEmployee(formData);

      if (response.success) {
        console.log("Employee created successfully:", response.data);
        alert("Employee created successfully!");
        navigate("/employee-list");
      } else {
        console.error("Error creating employee:", response.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Create Employee
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "4px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "4px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Mobile No:</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "4px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Designation:</label>
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "4px" }}
          >
            <option value="">Select Designation</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Gender:</label>
          <input
            type="radio"
            value="M"
            checked={gender === "M"}
            onChange={() => setGender("M")}
          />
          <label>Male</label>
          <input
            type="radio"
            value="F"
            checked={gender === "F"}
            onChange={() => setGender("F")}
          />
          <label>Female</label>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Courses:</label>
          <input
            type="checkbox"
            value="MCA"
            checked={courses.includes("MCA")}
            onChange={(e) =>
              setCourses((prev) =>
                e.target.checked
                  ? [...prev, "MCA"]
                  : prev.filter((c) => c !== "MCA")
              )
            }
          />
          <label>MCA</label>
          <input
            type="checkbox"
            value="BCA"
            checked={courses.includes("BCA")}
            onChange={(e) =>
              setCourses((prev) =>
                e.target.checked
                  ? [...prev, "BCA"]
                  : prev.filter((c) => c !== "BCA")
              )
            }
          />
          <label>BCA</label>
          <input
            type="checkbox"
            value="BSC"
            checked={courses.includes("BSC")}
            onChange={(e) =>
              setCourses((prev) =>
                e.target.checked
                  ? [...prev, "BSC"]
                  : prev.filter((c) => c !== "BSC")
              )
            }
          />
          <label>BSC</label>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
