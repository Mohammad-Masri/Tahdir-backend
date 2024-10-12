import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/config.module';
import { AppMongooseModule } from './schemas/mongoose.module';
import { SchoolModule } from './modules/school/school.module';

@Module({
  imports: [AppConfigModule, AppMongooseModule, SchoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
