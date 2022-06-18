import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PlanetsService } from './planets.service';
import { PlanetsController } from './planets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { multerOptions } from 'src/config/multer';

@Module({
  controllers: [PlanetsController],
  providers: [PlanetsService],
  imports: [
    PrismaModule,
    MulterModule.register(multerOptions),
    ServeStaticModule.forRoot({
      rootPath: 'uploads/',
      serveRoot: '/planets/photos/',
    }),
  ],
})
export class PlanetsModule {}
