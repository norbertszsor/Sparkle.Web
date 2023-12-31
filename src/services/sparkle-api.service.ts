import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CompanyDto,
  ComparisonDto,
  MeterDto,
  PredictionDto,
} from 'src/models/data.model';
import {
  GetCompanyQuery,
  GetComparisonQuery,
  GetMeterListQuery,
  GetPredictionQuery,
} from 'src/models/query.model';
import { PagedList } from 'src/shared/module/paged-list.interface';

@Injectable({
  providedIn: 'root',
})
export class SparkleApiService {
  private baseUrl = environment.apiUrl;

  constructor(private _client: HttpClient) {}

  public getCompany(query: GetCompanyQuery): Observable<CompanyDto> {
    return this._client.get<CompanyDto>(`${this.baseUrl}/company/get`, {
      params: this.convertObjectToHttpParams(query),
    });
  }

  public getMeterList(
    query: GetMeterListQuery
  ): Observable<PagedList<MeterDto>> {
    return this._client.get<PagedList<MeterDto>>(
      `${this.baseUrl}/meter/get/list`,
      { params: this.convertObjectToHttpParams(query) }
    );
  }

  public getPrediction(query: GetPredictionQuery): Observable<PredictionDto> {
    return this._client.get<PredictionDto>(
      `${this.baseUrl}/regressor/get/prediction`,
      {
        params: this.convertObjectToHttpParams(query),
      }
    );
  }

  public getComparison(query: GetComparisonQuery): Observable<ComparisonDto> {
    return this._client.get<ComparisonDto>(
      `${this.baseUrl}/regressor/get/comparison`,
      {
        params: this.convertObjectToHttpParams(query),
      }
    );
  }

  private convertObjectToHttpParams(query: any): HttpParams {
    var params = new HttpParams();
    Object.keys(query).forEach((key) => {
      if (query[key] != null) {
        params = params.append(key, query[key]);
      }
    });
    return params;
  }
}
