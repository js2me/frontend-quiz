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
import { GetInfoResultDC } from "./data-contracts";

export const appApi = new (class AppApi {
  /**
   * No description
   *
   * @tags app
   * @request GET:/api/v1/app/info
   * @secure
   * @responses <br/>
   *  **200** GetInfoResultDC  <br/>
   */
  getInfo = (params: RequestParams = {}) =>
    http.request<GetInfoResultDC, any>({
      path: `/api/v1/app/info`,
      method: "GET",
      secure: true,
      ...params,
    });
})();
