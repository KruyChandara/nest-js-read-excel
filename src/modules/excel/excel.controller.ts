import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExcelService } from './excel.service';
import { ExcelBody } from './ExcelDto';
import readXlsxFile from 'read-excel-file/node';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('/excels')
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {}

  @Get()
  async getAll() {
    return await this.excelService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.excelService.findById(id);
  }

  @Post()
  async create(@Body() body: ExcelBody) {
    return this.excelService.create(body);
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/',
        filename: (_, file, callback) => {
          const name = file.originalname.split('.')[0];
          const fileExtName = extname(file.originalname);
          const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          callback(null, `${name}-${randomName}${fileExtName}`);
        },
      }),
      limits: { fileSize: 1024 * 1024 * 10 }, // 10mb
    }),
  )
  async upload(@UploadedFile() file) {
    readXlsxFile(file.path).then((rows) => {
      console.log(rows);
    });
    return 'ok';
  }
}
