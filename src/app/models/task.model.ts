export interface Task {
    id: number;
    name: string;
    assignedTo: number;
    status: 'Pending' | 'In Progress' | 'Completed';
  }
  
