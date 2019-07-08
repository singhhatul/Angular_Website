import { TestBed } from '@angular/core/testing';

import { YoutubeserviceService } from './youtubeservice.service';

describe('YoutubeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeserviceService = TestBed.get(YoutubeserviceService);
    expect(service).toBeTruthy();
  });
});
