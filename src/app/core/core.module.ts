import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { MessagesComponent } from './components/messages/messages.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [ToolbarComponent, MessagesComponent];

const MODULES = [FlexLayoutModule, MaterialModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [MODULES, COMPONENTS],
})
export class CoreModule {}
