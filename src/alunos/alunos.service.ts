import { Injectable, 
        NotFoundException, 
        ConflictException, 
        InternalServerErrorException, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, QueryFilter } from "mongoose";
import { MongoServerError } from "mongodb";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { Aluno, AlunoDoc } from "./schemas/aluno.schema.js";

@Injectable()
export class AlunosService {
    constructor(@InjectModel(Aluno.name) private alunoModel: Model<AlunoDoc>){}

    //!CRUD
    //! C - Create (Criar)
    //! R - Read (ler/Consultar)
    //! U - Update (Atualizar)
    //! D - Delete (Apagar)

    async create(createAlunoDto: CreateAlunoDto): Promise<Aluno>{
        try{
            const createdAluno = new this.alunoModel(createAlunoDto);
            return await createdAluno.save();
        } catch (error: unknown) {
            if (error instanceof MongoServerError 
                &&
                error.code === 11000) {
                throw new ConflictException('Matrícula já cadastrada. Por favor, utilize uma matrícula diferente');
            }
            throw new InternalServerErrorException('Erro ao criar o aluno. Por favor, tente novamente mais tarde');
        }

        }

    async findAllPageFilter(
        page: number, 
        limit: number, 
        nome?: string, 
        curso?: string,
        orderBy?: string,
        orderDirection?:'asc' | 'desc',
    
    ){
        
        const skip = (page - 1) * limit;
        const filtro: any = {ativo: true};

               if (nome) {
            filtro.nome = {
                $regex: new RegExp(nome, 'i'),// 'i' para case-insensitive
            };
        }

        if (curso) {
            filtro.cursos = {
                $regex: new RegExp(curso, 'i'),// 'i' para case-insensitive
            };
        }
        const sort: any = {};
        if (orderBy) {
            sort[orderBy] = orderDirection === 'desc' ? -1 : 1;
        }

        const [data, total] = await Promise.all([
            this.alunoModel.find(filtro).sort(sort).skip(skip).limit(limit).exec(),
            this.alunoModel.countDocuments(filtro).exec()
        ]);

 
        return { 
            data,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            }, 
        };
        return this.alunoModel.find().exec();
    }
    //GET
    async findAll(): Promise<Aluno[]> {
        return this.alunoModel.find().exec();
    } //

    async findOne(id: string): Promise <Aluno> {
        const aluno = await this.alunoModel.findOne({ _id: id, ativo: true }).exec();
        
        if (!aluno) {
            throw new NotFoundException(`Aluno com id ${id} não encontrado`);
        }
        return aluno;
    } //!GET

    async update(id: string, updateAlunoDto: UpdateAlunoDto):Promise<Aluno>{
       const alunoAtualizado = await this.alunoModel.findByIdAndUpdate(id, updateAlunoDto, {
            new: true 
        }).exec();

        if (!alunoAtualizado) {
            throw new NotFoundException(`Aluno com id ${id} não encontrado`);
        }
        return alunoAtualizado;
    } //!PATCH

    async remove(id: string): Promise<Aluno>{
        const alunoRemovido = await this.alunoModel.findByIdAndUpdate(id, 
            { ativo: false }, { new: true }).exec();
        
        if (!alunoRemovido) {
            throw new NotFoundException(`Aluno com id ${id} não encontrado`);
        }
        return alunoRemovido;
        
    } //!DELETE

    async restore(id: string): Promise<Aluno> {
        const alunoRestaurado = await this.alunoModel.findByIdAndUpdate(id, 
            { ativo: true }, { new: true }).exec();
            if (!alunoRestaurado) {
                throw new NotFoundException(`Aluno com id ${id} não encontrado`);
            }

        return alunoRestaurado;
    //CRUD
}
}