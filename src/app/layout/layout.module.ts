import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './topnavbar/top-nav-bar.component';
import { AsideNavBarComponent } from './asidenavbar/aside-nav-bar.component';
import { FooterNavBarComponent } from './footernavbar/footer-nav-bar.component';
import { SettingNavBarComponent } from './settingsnavbar/setting-nav-bar.component';

@NgModule({
  declarations: [
    TopNavBarComponent,
    AsideNavBarComponent,
    FooterNavBarComponent,
    SettingNavBarComponent
  ],
  exports: [
    TopNavBarComponent,
    AsideNavBarComponent,
    FooterNavBarComponent,
    SettingNavBarComponent
  ],
  imports: [CommonModule]
})
export class LayoutModule {}
