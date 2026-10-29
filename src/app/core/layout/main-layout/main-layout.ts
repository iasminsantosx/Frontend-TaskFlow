import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { Header } from '../../component/header/header';
import { Sidebar } from '../../component/sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    Header,
    Sidebar
  ],
  templateUrl: './main-layout.html'
})
export class MainLayout {}