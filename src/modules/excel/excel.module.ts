import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExcelController } from './excel.controller';
import { ExcelService } from './excel.service';
import { Excel, ExcelSchema } from './excel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Excel.name, schema: ExcelSchema }]),
  ],
  controllers: [ExcelController],
  providers: [ExcelService],
})
export class ExcelModule {}
