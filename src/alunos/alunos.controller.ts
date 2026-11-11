import { Controller,
         Get,
         Post,
         Body,
         Patch,
         Param,
         Delete, Query, DefaultValuePipe, ParseIntPipe} from "@nestjs/common";
import { AlunosService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { ApiTags, 
        ApiOperation,
        ApiResponse, 
        ApiQuery } from "@nestjs/swagger";

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

    //findAll(){
    //    return this.alunosService.findAll();
    //}

    @Get()
    @ApiOperation({
        summary: 'Retorna a lista de alunos cadastrados com paginação e filtros opcionais',
    })@ApiResponse({
        status: 200,
        description: 'Lista de alunos retornada com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ou serviço indisponível',
    })
    @ApiQuery({
        name: 'page',
        required: false,
        type: Number,
        description: 'Número da página (padrão: 1)',
    })
    @ApiQuery({
        name: 'limit',
        required: false,
        type: Number,
        description: 'Número de itens por página (padrão: 10)',

    })
    @ApiQuery({
        name: 'nome',
        required: false,
        type: String,
        description: 'Filtro pelo nome do aluno',
    })
    @ApiQuery({
        name: 'curso',
        required: false,
        type: String,
        description: 'Filtro pelo nome do curso',
    })

    findAllPage
        (@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number, 
         @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
         @Query('nome') nome?: string,
         @Query('curso') curso?: string,
        
        
){
        return this.alunosService.findAllPage(page, limit, nome, curso);
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