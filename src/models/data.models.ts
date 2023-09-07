export interface PagedList<T> {
  items?: T[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface CompanyDto {
  id?: string;
  name?: string;
  description?: string;
}

export interface MeterDto {
  id?: string;
  companyId?: string;
  name?: string;
}

export interface PredictionDto {
  meterName?: string;
  prediction?: { [key: string]: number } | null;
}
