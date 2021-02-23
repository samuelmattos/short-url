import { Test, TestingModule } from '@nestjs/testing';
import TestUtil from './../common/test/TestUtil';
import { UrlRepository } from './urls.repository';
import { UrlsService } from './urls.service';

const mockRepository = {
  createUrl: jest.fn(),
  getUrl: jest.fn(),
}

describe('UrlsService', () => {
  let service: UrlRepository;  
  
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [UrlsService, {provide: UrlRepository, useValue: mockRepository}]      
    }).compile();

    service = app.get<UrlRepository>(UrlRepository);
  });

  describe('find url', () =>{
    it('should be find a short url based on short', async () => {
      const url = TestUtil.giveMeAValidUrl();
      mockRepository.createUrl.mockReturnValueOnce(url)
      const respUrl = service.getUrl(url.short);
      //expect(respUrl).toBeDefined();
      expect(mockRepository.createUrl).toHaveBeenCalledTimes(1)
    })
  })
});
