import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskFormComponent } from '../task-form/task-form.component';
import { Task } from '../models/task.model';
import { loadTasks, createTask, updateTask } from '../store/actions/task.actions';
import { selectAllTasks } from '../store/selectors/task.selectors';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {
  tasks$: Observable<Task[]>;
  displayedColumns: string[] = ['id', 'name', 'status', 'edit'];

  constructor(private store: Store, public dialog: MatDialog) {
    this.tasks$ = this.store.pipe(select(selectAllTasks));
  }

  ngOnInit() {
    this.store.dispatch(loadTasks());
  }

  createTask() {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '400px',
      data: { task: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(createTask({ task: result }));
      }
    });
  }

  editTask(task: Task) {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '400px',
      data: { task }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(updateTask({ task: result }));
      }
    });
  }
}
