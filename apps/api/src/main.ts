import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Module, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('ingest')
class IngestController {
  @Post('synthetic-ais')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSynthetic(@UploadedFile() file: Express.Multer.File) {
    // Placeholder: store raw capture, create raw_observation record
    return { status: 'received', size: file?.size ?? 0 };
  }
}

@Module({ controllers: [IngestController] })
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.enableShutdownHooks();
  await app.listen(3001, '0.0.0.0');
  console.log('API listening on 3001');
}

bootstrap();
