import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmet } from 'src/environment';
import {
  CompanyDto,
  MeterDto,
  PagedList,
  PredictionDto,
} from 'src/models/data.models';
import {
  GetCompanyQuery,
  GetMeterListQuery,
  GetPredictionQuery,
} from 'src/models/query.model';

@Injectable({
  providedIn: 'root',
})
export class SparkleApiService {
  private baseUrl = environmet.apiUrl;

  constructor(private _client: HttpClient) {}

  public getCompany(query: GetCompanyQuery): Observable<CompanyDto> {
    return this._client.get<CompanyDto>(`${this.baseUrl}/company/get`, {
      params: this.ToQueryParams(query),
    });
  }

  public getMeterList(
    query: GetMeterListQuery
  ): Observable<PagedList<MeterDto>> {
    return this._client.get<PagedList<MeterDto>>(
      `${this.baseUrl}/meter/getAll`,
      { params: this.ToQueryParams(query) }
    );
  }

  public getPrediction(query: GetPredictionQuery): Observable<PredictionDto> {
    return this._client.get<PredictionDto>(`${this.baseUrl}/prediction/get`, {
      params: this.ToQueryParams(query),
    });
  }

  ToQueryParams(query: any): HttpParams {
    var params = new HttpParams();
    Object.keys(query).forEach((key) => {
      if (query[key] != null) {
        params = params.append(key, query[key]);
      }
    });
    return params;
  }
}
