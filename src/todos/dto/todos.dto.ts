import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class createTodoDto {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @IsBoolean()
    @ApiProperty()
    completed: boolean;

    @IsNotEmpty()
    @ApiProperty()
    userId: number;
}

export class patchTodoDto {
    
    @IsBoolean()
    @ApiProperty()
    completed: boolean;
}