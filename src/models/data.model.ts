import { Dictionary } from 'src/shared/module/dictionary.interface';

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
  prediction?: Dictionary<string, number> | null;
}

export interface ComparisonDto extends PredictionDto {
  previous?: Dictionary<string, number> | null;
}
