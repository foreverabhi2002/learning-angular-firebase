import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductComponent } from './pages/dashboard/create-product/create-product.component';
import { EditProductComponent } from './pages/dashboard/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
