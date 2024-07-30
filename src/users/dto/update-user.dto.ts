/* eslint-disable prettier/prettier */
import { CreatUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreatUserDto) {}
