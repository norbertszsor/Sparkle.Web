import { HttpParams } from '@angular/common/http';

type PagedListQuery = {
  page?: number;
  pageSize?: number;
}

export interface GetCompanyQuery extends Object {}

export interface GetMeterListQuery extends PagedListQuery, Object {
  companyId?: string;
}

export interface GetPredictionQuery extends Object {
  MeterId: string;
  Hours: number;
}


