import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  NotFoundException,
  BadRequestException,
  HttpCode,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { PlanetsService } from './planets.service';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Post()
  create(@Body() createPlanetDto: CreatePlanetDto) {
    return this.planetsService.create(createPlanetDto);
  }

  @Get()
  findAll() {
    return this.planetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const planet = await this.planetsService.findOne(+id);

    if (!planet) {
      throw new NotFoundException();
    }

    return planet;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlanetDto: UpdatePlanetDto,
  ) {
    try {
      return await this.planetsService.update(+id, updatePlanetDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    try {
      await this.planetsService.remove(+id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post(':id/photo')
  @UseInterceptors(FileInterceptor('photo'))
  @HttpCode(201)
  async handleFile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException();
    }

    const photoFilename = file.filename;

    await this.planetsService.update(+id, { photoFilename });

    return { photoFilename };
  }
}
