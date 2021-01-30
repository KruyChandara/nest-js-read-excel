import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Excel, ExcelDocument } from './excel.schema';
import { ExcelBody } from './ExcelDto';

@Injectable()
export class ExcelService {
  constructor(
    @InjectModel(Excel.name) private excelModel: Model<ExcelDocument>,
  ) {}

  async create(body: ExcelBody): Promise<Excel> {
    body['jkkjk'] = 'jaja';
    const createdExcel = new this.excelModel(body);
    return createdExcel.save();
  }

  async findAll(): Promise<any[]> {
    return this.excelModel.find();
  }

  async findById(id: string): Promise<Excel> {
    try {
      return await this.excelModel.findById(id);
    } catch (error) {
      throw new NotFoundException('not found');
    }
  }
}
