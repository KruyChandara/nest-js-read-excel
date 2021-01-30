import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExcelDocument = Excel & Document;

@Schema()
export class Excel {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const ExcelSchema = SchemaFactory.createForClass(Excel);
