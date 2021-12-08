import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './entities/users.entity';
import { getEntites } from './utils/getEntities';

describe('AppController', () => {
  let appController: AppController;
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(),
        TypeOrmModule.forRootAsync({
          useFactory: async () =>
            Object.assign(await getConnectionOptions(), {
              entities: getEntites(),
            }),
        }),
        TypeOrmModule.forFeature([Users]),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  afterAll(() => app.close());

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('connectDBByTypeORM', () => {
    it('should return "true"', async () => {
      expect(await appController.user1()).toEqual(true);
    });
  });
});
