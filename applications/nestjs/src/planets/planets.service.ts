import { Injectable } from '@nestjs/common';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanetsService {
  constructor(private prisma: PrismaService) {}

  create(createPlanetDto: CreatePlanetDto) {
    return this.prisma.planet.create({ data: createPlanetDto });
  }

  findAll() {
    return this.prisma.planet.findMany();
  }

  findOne(id: number) {
    return this.prisma.planet.findUnique({ where: { id } });
  }

  update(id: number, updatePlanetDto: UpdatePlanetDto) {
    return this.prisma.planet.update({
      where: { id },
      data: updatePlanetDto,
    });
  }

  remove(id: number) {
    return this.prisma.planet.delete({ where: { id } });
  }
}
