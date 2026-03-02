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
  GetRoleSettingsDataDC,
  GetUserSettingsDataDC,
  SettingsDaoDC,
  UpdateRoleSettingsDataDC,
} from "./data-contracts";

export const settingsApi = new (class SettingsApi {
  /**
   * No description
   *
   * @tags settings
   * @request GET:/api/v1/settings/role
   * @secure
   * @responses <br/>
   *  **200** GetRoleSettingsDataDC  <br/>
   */
  getRoleSettings = (params: RequestParams = {}) =>
    http.request<GetRoleSettingsDataDC, any>({
      path: `/api/v1/settings/role`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags settings
   * @request GET:/api/v1/settings/user
   * @secure
   * @responses <br/>
   *  **200** GetUserSettingsDataDC  <br/>
   */
  getUserSettings = (params: RequestParams = {}) =>
    http.request<GetUserSettingsDataDC, any>({
      path: `/api/v1/settings/user`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags settings
   * @request POST:/api/v1/settings/role
   * @secure
   * @responses <br/>
   *  **200** UpdateRoleSettingsDataDC  <br/>
   */
  updateRoleSettings = (data: SettingsDaoDC, params: RequestParams = {}) =>
    http.request<UpdateRoleSettingsDataDC, any>({
      path: `/api/v1/settings/role`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
})();
