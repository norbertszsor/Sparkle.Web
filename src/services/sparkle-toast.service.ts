import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export enum snackbarType {
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

@Injectable({
  providedIn: 'root',
})
export class SparkleToastService {
  constructor(private _matSnackBar: MatSnackBar) {}

  public openSnackBar(
    message: string,
    action: string | undefined,
    type: snackbarType = snackbarType.INFO
  ) {
    let panelClass = '';
    switch (type) {
      case snackbarType.WARNING:
        panelClass = 'warning-snackbar';
        break;
      case snackbarType.ERROR:
        panelClass = 'error-snackbar';
        break;
      case snackbarType.INFO:
        panelClass = 'info-snackbar';
        break;
    }
    this._matSnackBar.open(message, action, {
      duration: 3000,
      panelClass: [panelClass],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  public openErrorToast({
    message,
    action,
  }: {
    message: string;
    action?: string;
  }) {
    this.openSnackBar(message, action, snackbarType.ERROR);
  }

  public openWarningToast({
    message,
    action,
  }: {
    message: string;
    action?: string;
  }) {
    this.openSnackBar(message, action, snackbarType.WARNING);
  }

  public openInfoToast({
    message,
    action,
  }: {
    message: string;
    action?: string;
  }) {
    this.openSnackBar(message, action, snackbarType.INFO);
  }
}
