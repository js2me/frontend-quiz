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
import {
  GetSessionByIdDataDC,
  GetSessionListDataDC,
  GetSessionListParamsDC,
  GetSessionsDataDC,
  RemoveSessionByIdDataDC,
  SessionUpdateDtoDC,
  UpdateSessionByIdDataDC,
} from "./data-contracts";

export const adminSessionsApi = new (class AdminSessionsApi {
  /**
   * No description
   *
   * @tags admin-sessions
   * @request GET:/api/v1/admin/sessions/{sessionId}
   * @secure
   * @responses <br/>
   *  **200** GetSessionByIdDataDC  <br/>
   */
  getSessionById = (sessionId: string, params: RequestParams = {}) =>
    http.request<GetSessionByIdDataDC, any>({
      path: `/api/v1/admin/sessions/${sessionId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-sessions
   * @request GET:/api/v1/admin/sessions/list
   * @secure
   * @responses <br/>
   *  **200** GetSessionListDataDC  <br/>
   */
  getSessionList = (query: GetSessionListParamsDC, params: RequestParams = {}) =>
    http.request<GetSessionListDataDC, any>({
      path: `/api/v1/admin/sessions/list`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-sessions
   * @request GET:/api/v1/admin/sessions
   * @secure
   * @responses <br/>
   *  **200** GetSessionsDataDC  <br/>
   */
  getSessions = (params: RequestParams = {}) =>
    http.request<GetSessionsDataDC, any>({
      path: `/api/v1/admin/sessions`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-sessions
   * @request DELETE:/api/v1/admin/sessions/{sessionId}
   * @secure
   * @responses <br/>
   *  **200** RemoveSessionByIdDataDC  <br/>
   */
  removeSessionById = (sessionId: string, params: RequestParams = {}) =>
    http.request<RemoveSessionByIdDataDC, any>({
      path: `/api/v1/admin/sessions/${sessionId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-sessions
   * @request PATCH:/api/v1/admin/sessions/{sessionId}
   * @secure
   * @responses <br/>
   *  **200** UpdateSessionByIdDataDC  <br/>
   */
  updateSessionById = (sessionId: string, data: SessionUpdateDtoDC, params: RequestParams = {}) =>
    http.request<UpdateSessionByIdDataDC, any>({
      path: `/api/v1/admin/sessions/${sessionId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
})();
