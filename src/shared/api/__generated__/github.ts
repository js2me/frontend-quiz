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
import { UnlinkAccountDataDC } from "./data-contracts";

export const githubApi = new (class GithubApi {
  /**
   * No description
   *
   * @tags github
   * @request DELETE:/api/v1/github/unlink/{userId}
   * @secure
   * @responses <br/>
   *  **200** UnlinkAccountDataDC  <br/>
   */
  unlinkAccount = (userId: number, params: RequestParams = {}) =>
    http.request<UnlinkAccountDataDC, any>({
      path: `/api/v1/github/unlink/${userId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
})();
