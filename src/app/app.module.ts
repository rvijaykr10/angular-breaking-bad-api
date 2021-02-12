import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersComponent } from './components/characters/characters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersService } from './services/characters.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [AppComponent, CharactersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
