import { IsString } from 'class-validator';

class CreateMessageDto {
  // Using ! we tell TS this property will be
  // assigned later. Don't you worry.
  // That gets rid of the error
  @IsString()
  content!: string;
}

export { CreateMessageDto };
