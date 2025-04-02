import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';  // Import cấu hình appConfig
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig,  // Spread appConfig vào đây để sử dụng các provider trong appConfig
  providers: [
    ...appConfig.providers,  // Kết hợp các providers từ appConfig
    provideRouter(routes)    // Thêm provider cho router nếu cần
  ]
}).catch(err => console.error(err));
