export const employees= 
    [
        {
          "id": 1, "email": "emp1@example.com", "password": "123",
          "tasks": [
            {"title": "Task 1", "desc": "Description 1", "date": "2025-02-12", "category": "General", "active": true, "new_task": false, "completed": false, "failed": false},
            {"title": "Task 2", "desc": "Description 2", "date": "2025-02-13", "category": "Urgent", "active": false, "new_task": true, "completed": false, "failed": false}
          ]
        },
        {
          "id": 2, "email": "emp2@example.com", "password": "123",
          "tasks": [
            {"title": "Task 3", "desc": "Description 3", "date": "2025-02-14", "category": "General", "active": false, "new_task": false, "completed": true, "failed": false}
          ]
        },
        {
          "id": 3, "email": "emp3@example.com", "password": "123",
          "tasks": [
            {"title": "Task 4", "desc": "Description 4", "date": "2025-02-15", "category": "Routine", "active": true, "new_task": true, "completed": false, "failed": false},
            {"title": "Task 5", "desc": "Description 5", "date": "2025-02-16", "category": "Urgent", "active": false, "new_task": false, "completed": false, "failed": true}
          ]
        },
        {
          "id": 4, "email": "emp4@example.com", "password": "123",
          "tasks": [
            {"title": "Task 6", "desc": "Description 6", "date": "2025-02-17", "category": "General", "active": false, "new_task": true, "completed": false, "failed": false},
            {"title": "Task 7", "desc": "Description 7", "date": "2025-02-18", "category": "Routine", "active": true, "new_task": false, "completed": false, "failed": false},
            {"title": "Task 8", "desc": "Description 8", "date": "2025-02-19", "category": "Urgent", "active": false, "new_task": false, "completed": true, "failed": false}
          ]
        },
        {
          "id": 5, "email": "emp5@example.com", "password": "123",
          "tasks": [
            {"title": "Task 9", "desc": "Description 9", "date": "2025-02-20", "category": "General", "active": false, "new_task": false, "completed": false, "failed": true},
            {"title": "Task 10", "desc": "Description 10", "date": "2025-02-21", "category": "Routine", "active": true, "new_task": true, "completed": false, "failed": false}
          ]
        }
      ]
  

export const admin=[
    {"id": 1, "email": "admin@example.com", "password": "123"}
  ];
export const setLocalStorage=()=>{
        localStorage.setItem("employees",JSON.stringify(employees))
        localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage=()=>{
        const employees=JSON.parse(localStorage.getItem(("employees")))
        const admin=JSON.parse(localStorage.getItem(("admin")))
        return {employees,admin}
        
}
