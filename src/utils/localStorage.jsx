export const employees = [
  {
    "id": 1, "first_name": "Rohit", "email": "e@e.com", "password": "123",
    "tasks": [
      {"title": "Prepare Monthly Sales Report", "desc": "Compile and analyze sales data for the previous month.", "date": "2025-02-12", "category": "General", "active": true, "new_task": false, "completed": false, "failed": false},
      {"title": "Client Meeting - Infosys", "desc": "Discuss project deliverables with Infosys team.", "date": "2025-02-13", "category": "Urgent", "active": false, "new_task": true, "completed": false, "failed": false},
      {"title": "Update CRM Database", "desc": "Ensure all new leads are added and updated in CRM.", "date": "2025-02-14", "category": "Routine", "active": false, "new_task": false, "completed": true, "failed": false},
      {"title": "Review Marketing Strategy", "desc": "Analyze and improve the current marketing campaign.", "date": "2025-02-15", "category": "General", "active": true, "new_task": false, "completed": false, "failed": false},
      {"title": "Follow-up with Vendors", "desc": "Call and confirm delivery schedules with vendors.", "date": "2025-02-16", "category": "Urgent", "active": false, "new_task": false, "completed": false, "failed": true}
    ],
    "tasks_count": {"total": 5, "active": 2, "new_task": 1, "completed": 1, "failed": 1}
  },
  {
    "id": 2, "first_name": "Neha", "email": "neha.verma@example.com", "password": "123",
    "tasks": [
      {"title": "Design Social Media Creatives", "desc": "Create designs for Facebook and Instagram ads.", "date": "2025-02-12", "category": "General", "active": false, "new_task": true, "completed": false, "failed": false},
      {"title": "Email Marketing Campaign", "desc": "Send promotional emails for new product launch.", "date": "2025-02-13", "category": "Routine", "active": true, "new_task": false, "completed": false, "failed": false},
      {"title": "Organize Product Photoshoot", "desc": "Coordinate with the photographer and finalize product images.", "date": "2025-02-14", "category": "Urgent", "active": false, "new_task": false, "completed": true, "failed": false},
      {"title": "Update Website Content", "desc": "Revise outdated information on the website.", "date": "2025-02-15", "category": "General", "active": false, "new_task": false, "completed": false, "failed": true},
      {"title": "Research Competitor Strategies", "desc": "Analyze the latest marketing trends in the industry.", "date": "2025-02-16", "category": "Routine", "active": true, "new_task": true, "completed": false, "failed": false}
    ],
    "tasks_count": {"total": 5, "active": 2, "new_task": 2, "completed": 1, "failed": 1}
  },
  {
    "id": 3, "first_name": "Amit", "email": "amit.pandey@example.com", "password": "123",
    "tasks": [
      {"title": "Develop Backend API", "desc": "Write REST APIs for user authentication.", "date": "2025-02-12", "category": "Urgent", "active": true, "new_task": false, "completed": false, "failed": false},
      {"title": "Debug Login Issue", "desc": "Fix the bug causing login failures in the app.", "date": "2025-02-13", "category": "Routine", "active": true, "new_task": true, "completed": false, "failed": false},
      {"title": "Code Review Session", "desc": "Review team members’ code and suggest improvements.", "date": "2025-02-14", "category": "General", "active": false, "new_task": false, "completed": true, "failed": false},
      {"title": "Database Optimization", "desc": "Improve the query performance for large datasets.", "date": "2025-02-15", "category": "Urgent", "active": false, "new_task": false, "completed": false, "failed": true},
      {"title": "Team Stand-up Meeting", "desc": "Daily sync-up on project progress and blockers.", "date": "2025-02-16", "category": "Routine", "active": true, "new_task": false, "completed": false, "failed": false}
    ],
    "tasks_count": {"total": 5, "active": 3, "new_task": 1, "completed": 1, "failed": 1}
  },
  {
    "id": 4, "first_name": "Priya", "email": "priya.mishra@example.com", "password": "123",
    "tasks": [
      {"title": "Draft HR Policy Updates", "desc": "Review and suggest updates for the employee handbook.", "date": "2025-02-12", "category": "General", "active": false, "new_task": false, "completed": false, "failed": false}
    ],
    "tasks_count": {"total": 1, "active": 0, "new_task": 0, "completed": 0, "failed": 0}
  }
];


  

export const admin=[
    {"id": 1,"first_name":"admin", "email": "admin@example.com", "password": "123"}
  ];

const newEmployees=JSON.parse(localStorage.getItem(("employees")))
export const setLocalStorage=()=>{
        localStorage.setItem("employees",JSON.stringify(newEmployees))
        localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage=()=>{
        const employees=JSON.parse(localStorage.getItem(("employees")))
        const admin=JSON.parse(localStorage.getItem(("admin")))
        return {employees,admin}
        
}
