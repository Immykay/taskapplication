import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private userService: UserService,
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      assignedTo: ['', Validators.required],
      status: ['', Validators.required]
    });

    if (data.task) {
      this.taskForm.patchValue(data.task);
    }
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      if (this.data.task) {
        this.taskService.updateTask({ ...this.data.task, ...this.taskForm.value }).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.taskService.createTask(this.taskForm.value).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
