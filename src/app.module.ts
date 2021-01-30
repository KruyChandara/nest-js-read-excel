import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExcelModule } from './modules/excel/excel.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/excel'),
    ExcelModule,
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
