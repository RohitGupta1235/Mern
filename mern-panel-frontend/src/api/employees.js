export const createEmployee = async (employeeData) => {
  try {
    const response = await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};

export const fetchEmployees = async () => {
  try {
    const response = await fetch("/api/employees");
    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};
