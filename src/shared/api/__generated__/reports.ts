/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ContentType, RequestParams } from "../common/http-client";
import { http } from "../http";
import { BugReportDtoDC, CreateDataDC } from "./data-contracts";

export const reportsApi = new (class ReportsApi {
  /**
   * No description
   *
   * @tags reports
   * @request POST:/api/v1/reports
   * @secure
   * @responses <br/>
   *  **200** CreateDataDC  <br/>
   */
  create = (data: BugReportDtoDC, params: RequestParams = {}) =>
    http.request<CreateDataDC, any>({
      path: `/api/v1/reports`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
})();
