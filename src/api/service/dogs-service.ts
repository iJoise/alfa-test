import { AxiosResponse } from 'axios';

import { $api } from 'api/api-config';
import { Dogs } from 'types';

export class DogsService {
  static getDogs(limit: number): Promise<AxiosResponse<Dogs[]>> {
    return $api.get(`breeds?limit=${limit}`);
  }
}
