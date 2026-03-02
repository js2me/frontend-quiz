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
import { GetQuizzesDataDC, GetUserInfoByUsernameDataDC, UpdateUserInfoDataDC, UserUpdateDtoDC } from "./data-contracts";

export const userApi = new (class UserApi {
  /**
   * No description
   *
   * @tags user
   * @request GET:/api/v1/user/quizzes
   * @secure
   * @responses <br/>
   *  **200** GetQuizzesDataDC  <br/>
   */
  getQuizzes = (params: RequestParams = {}) =>
    http.request<GetQuizzesDataDC, any>({
      path: `/api/v1/user/quizzes`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @request GET:/api/v1/user/{username}
   * @secure
   * @responses <br/>
   *  **200** GetUserInfoByUsernameDataDC  <br/>
   */
  getUserInfoByUsername = (username: string, params: RequestParams = {}) =>
    http.request<GetUserInfoByUsernameDataDC, any>({
      path: `/api/v1/user/${username}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @request POST:/api/v1/user
   * @secure
   * @responses <br/>
   *  **200** UpdateUserInfoDataDC  <br/>
   */
  updateUserInfo = (data: UserUpdateDtoDC, params: RequestParams = {}) =>
    http.request<UpdateUserInfoDataDC, any>({
      path: `/api/v1/user`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
})();
