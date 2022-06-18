import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [PrismaModule, PlanetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
