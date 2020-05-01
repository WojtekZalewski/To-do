import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./pekao-header/pekao-header.component";
import { PekaoListComponent } from "./pekao-list/pekao-list.component";
import { PekaoSectionComponent } from "./pekao-section/pekao-section.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PekaoListComponent,
    PekaoSectionComponent
  ],
  imports: [
	  BrowserModule, 
	  AppRoutingModule, 
	  FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}