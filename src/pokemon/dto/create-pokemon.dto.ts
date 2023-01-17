import { IsInt, Min, IsPositive, MinLength, IsString } from "class-validator"
import {  } from "class-validator/types/decorator/decorators"




export class CreatePokemonDto {


// @IsInt()
// @IsPositive()
// @Min(1)   
@IsInt()
@Min(1)
@IsPositive()
no: number


@MinLength(2)
@IsString()
name: string


}
