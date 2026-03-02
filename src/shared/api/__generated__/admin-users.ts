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
  GetUserByIdDataDC,
  GetUserListDataDC,
  GetUserListParamsDC,
  GetUserQuizResultsDataDC,
  GetUserQuizResultsParamsDC,
  GetUsersDataDC,
  RemoveUserDataDC,
  UpdateUserDataDC,
  UserInfoDtoDC,
} from "./data-contracts";

export const adminUsersApi = new (class AdminUsersApi {
  /**
   * No description
   *
   * @tags admin-users
   * @request GET:/api/v1/admin/users/{user_id}
   * @secure
   * @responses <br/>
   *  **200** GetUserByIdDataDC  <br/>
   */
  getUserById = (userId: number, params: RequestParams = {}) =>
    http.request<GetUserByIdDataDC, any>({
      path: `/api/v1/admin/users/${userId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-users
   * @request GET:/api/v1/admin/users/list
   * @secure
   * @responses <br/>
   *  **200** GetUserListDataDC  <br/>
   */
  getUserList = (query: GetUserListParamsDC, params: RequestParams = {}) =>
    http.request<GetUserListDataDC, any>({
      path: `/api/v1/admin/users/list`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-users
   * @request GET:/api/v1/admin/users/{user_id}/quiz/results
   * @secure
   * @responses <br/>
   *  **200** GetUserQuizResultsDataDC  <br/>
   */
  getUserQuizResults = ({ userId, ...query }: GetUserQuizResultsParamsDC, params: RequestParams = {}) =>
    http.request<GetUserQuizResultsDataDC, any>({
      path: `/api/v1/admin/users/${userId}/quiz/results`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-users
   * @request GET:/api/v1/admin/users
   * @secure
   * @responses <br/>
   *  **200** GetUsersDataDC  <br/>
   */
  getUsers = (params: RequestParams = {}) =>
    http.request<GetUsersDataDC, any>({
      path: `/api/v1/admin/users`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-users
   * @request DELETE:/api/v1/admin/users/{user_id}
   * @secure
   * @responses <br/>
   *  **200** RemoveUserDataDC  <br/>
   */
  removeUser = (userId: number, params: RequestParams = {}) =>
    http.request<RemoveUserDataDC, any>({
      path: `/api/v1/admin/users/${userId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-users
   * @request PATCH:/api/v1/admin/users/{user_id}
   * @secure
   * @responses <br/>
   *  **200** UpdateUserDataDC  <br/>
   */
  updateUser = (userId: number, data: UserInfoDtoDC, params: RequestParams = {}) =>
    http.request<UpdateUserDataDC, any>({
      path: `/api/v1/admin/users/${userId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
})();
