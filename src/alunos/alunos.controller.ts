import { Controller,
         Get,
         Post,
         Body,
         Patch,
         Param,
         Delete } from "@nestjs/common";
import { AlunosService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { ApiTags, 
        ApiOperation,
        ApiResponse } from "@nestjs/swagger";
@ApiTags('alunos')
@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunosService: AlunosService){}

    @Post()
    @ApiOperation({
        summary: 'Cria a matrícula do novo aluno',
    })
    @ApiResponse({
        status:201,
        description: 'A matrícula do aluno foi criada com sucesso.',
    })
    @ApiResponse({
        status:  404,
        description: 'Aluno não encontrado'
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor',
    })
    create(@Body() createAlunoDto: CreateAlunoDto){
        return this.alunosService.create(createAlunoDto);
    }

    @Get()
    findAll(){
        return this.alunosService.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Busca a matrícula do aluno pelo ID',
    })
    @ApiResponse({
        status: 200,
        description: 'A matrícula do aluno foi encontrada com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo ID',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor',
    })
    findOne(@Param('id') id: string ){
        return this.alunosService.findOne(id);
    }
    
    @Patch(':id')
    @ApiOperation({
        summary: 'Atualiza a matrícula do aluno pelo ID',
    })
    @ApiResponse({
        status: 200,
        description: 'A matrícula do aluno foi atualizada com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo ID',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor',
    })
    update(@Param('id') id: string, @Body() updateAlunoDto : UpdateAlunoDto){
        return this.alunosService.update(id, updateAlunoDto);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Remove a matrícula do aluno pelo ID',
    })
    @ApiResponse({
        status: 200,
        description: 'A matrícula do aluno foi removida com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo ID',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor',
    })
    remove(@Param('id') id: string){
        return this.alunosService.remove(id);
    }
}