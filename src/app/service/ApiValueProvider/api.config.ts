import { InjectionToken } from '@angular/core';
import { ApiConfig } from './ApiConfig';

export let API_CONFIG = new InjectionToken<ApiConfig>('api.config');

export const APP_CONFIG: ApiConfig = {
    apiEndPoint: 'http://jsonplaceholder.typicode.com/todos',
    token: 'testToken'
}
