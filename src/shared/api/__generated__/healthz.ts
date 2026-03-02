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
import { HealthzControllerGetOkDataDC } from "./data-contracts";

export const healthzApi = new (class HealthzApi {
  /**
   * No description
   *
   * @tags healthz
   * @request GET:/healthz
   * @responses <br/>
   *  **200** HealthzControllerGetOkDataDC  <br/>
   */
  healthzControllerGetOk = (params: RequestParams = {}) =>
    http.request<HealthzControllerGetOkDataDC, any>({
      path: `/healthz`,
      method: "GET",
      ...params,
    });
})();
