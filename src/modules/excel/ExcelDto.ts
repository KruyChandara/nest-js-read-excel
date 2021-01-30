import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class ExcelBody {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  @Min(10)
  age: number;

  @IsNotEmpty()
  @IsString()
  breed: string;
}
