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
  ChangePasswordDataDC,
  ChangePasswordDtoDC,
  CredentialsDtoDC,
  LoginDataDC,
  LogoutUserDataDC,
  NewUserDtoDC,
  RegisterDataDC,
} from "./data-contracts";

export const authApi = new (class AuthApi {
  /**
   * No description
   *
   * @tags auth
   * @request POST:/api/v1/auth/password-change
   * @secure
   * @responses <br/>
   *  **200** ChangePasswordDataDC  <br/>
   */
  changePassword = (data: ChangePasswordDtoDC, params: RequestParams = {}) =>
    http.request<ChangePasswordDataDC, any>({
      path: `/api/v1/auth/password-change`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @request POST:/api/v1/auth/login
   * @secure
   * @responses <br/>
   *  **200** LoginDataDC  <br/>
   */
  login = (data: CredentialsDtoDC, params: RequestParams = {}) =>
    http.request<LoginDataDC, any>({
      path: `/api/v1/auth/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @request GET:/api/v1/auth/logout
   * @secure
   * @responses <br/>
   *  **200** LogoutUserDataDC  <br/>
   */
  logoutUser = (params: RequestParams = {}) =>
    http.request<LogoutUserDataDC, any>({
      path: `/api/v1/auth/logout`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @request POST:/api/v1/auth/register
   * @secure
   * @responses <br/>
   *  **200** RegisterDataDC  <br/>
   */
  register = (data: NewUserDtoDC, params: RequestParams = {}) =>
    http.request<RegisterDataDC, any>({
      path: `/api/v1/auth/register`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
})();
