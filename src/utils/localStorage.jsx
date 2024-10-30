// localStorage.clear(); 
const employees = [
  {
    "Id": 1,
    "FirstName": "Amit",
    "Email": "employee1@example.com",
    "Password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Project A Design",
        "description": "Work on the initial design for Project A.",
        "date": "2024-11-01",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Call",
        "description": "Update the client on project progress.",
        "date": "2024-11-03",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Report Generation",
        "description": "Generate monthly performance reports.",
        "date": "2024-11-05",
        "category": "Report",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "Id": 2,
    "FirstName": "Ravi",
    "Email": "employee2@example.com",
    "Password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Code Review",
        "description": "Review code for new feature integration.",
        "date": "2024-11-02",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "System Update",
        "description": "Update the system with latest security patches.",
        "date": "2024-11-04",
        "category": "Maintenance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "title": "Documentation",
        "description": "Document project milestones.",
        "date": "2024-11-06",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "Id": 3,
    "FirstName": "Priya",
    "Email": "employee3@example.com",
    "Password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Bug Fixing",
        "description": "Fix bugs in the user authentication module.",
        "date": "2024-11-01",
        "category": "Debugging",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Presentation Preparation",
        "description": "Prepare presentation for client meeting.",
        "date": "2024-11-07",
        "category": "Presentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "Id": 4,
    "FirstName": "Rajesh",
    "Email": "employee4@example.com",
    "Password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Database Optimization",
        "description": "Optimize the database for faster queries.",
        "date": "2024-11-08",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Project B Planning",
        "description": "Plan the next stages for Project B.",
        "date": "2024-11-10",
        "category": "Planning",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "Id": 5,
    "FirstName": "Kavita",
    "Email": "employee5@example.com",
    "Password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Testing New Feature",
        "description": "Test the new feature before release.",
        "date": "2024-11-09",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Backup Data",
        "description": "Ensure data backup is completed.",
        "date": "2024-11-11",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

  
const admin = [
    {
      "Id": 1,
      "Email": "admin@example.com",
      "Password": "123"
    }
  ];
  

export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    
    return {employees,admin}
}