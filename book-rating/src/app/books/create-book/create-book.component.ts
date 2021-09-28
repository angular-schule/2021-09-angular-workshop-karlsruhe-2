import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl()
  });

  isInvalid(path: string): boolean {
    const control = this.bookForm.get(path);
    return !!control && control.touched && control.invalid;
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    // Hands on!
    // 1. Erstelle eine Event mit dem Namen 'create'
    // 2. Emitiere das Event
    // 3. Subscribe auf das Event im Dashboard
    // 4. Füge das neue Buch dem Buch-Array hinzu

    this.bookForm.reset();
  }
}
