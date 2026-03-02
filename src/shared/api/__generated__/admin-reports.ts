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

import { RequestParams } from "../common/http-client";
import { http } from "../http";
import {
  DeleteBugReportDataDC,
  GetBugReportDataDC,
  GetReportListDataDC,
  GetReportListParamsDC,
} from "./data-contracts";

export const adminReportsApi = new (class AdminReportsApi {
  /**
   * No description
   *
   * @tags admin-reports
   * @request DELETE:/api/v1/admin/reports/{reportId}
   * @secure
   * @responses <br/>
   *  **200** DeleteBugReportDataDC  <br/>
   */
  deleteBugReport = (reportId: number, params: RequestParams = {}) =>
    http.request<DeleteBugReportDataDC, any>({
      path: `/api/v1/admin/reports/${reportId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-reports
   * @request GET:/api/v1/admin/reports/{reportId}
   * @secure
   * @responses <br/>
   *  **200** GetBugReportDataDC  <br/>
   */
  getBugReport = (reportId: number, params: RequestParams = {}) =>
    http.request<GetBugReportDataDC, any>({
      path: `/api/v1/admin/reports/${reportId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-reports
   * @request GET:/api/v1/admin/reports/list
   * @secure
   * @responses <br/>
   *  **200** GetReportListDataDC  <br/>
   */
  getReportList = (query: GetReportListParamsDC, params: RequestParams = {}) =>
    http.request<GetReportListDataDC, any>({
      path: `/api/v1/admin/reports/list`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
})();
