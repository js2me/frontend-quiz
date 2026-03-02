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
  CreateQuestionDataDC,
  ExecuteCodeDataDC,
  ExecuteCodeInputDtoDC,
  GetInfoDataDC,
  GetQuestionTemplateDataDC,
  GetQuestionTemplateParamsDC,
  GetQuestionTemplatesListDataDC,
  GetQuestionTemplatesListParamsDC,
  QuestionTemplateDetailedDtoDC,
  RemoveQuestionDataDC,
  UpdateQuestionDataDC,
} from "./data-contracts";

export const adminQuestionsApi = new (class AdminQuestionsApi {
  /**
   * No description
   *
   * @tags admin-questions
   * @request PUT:/api/v1/admin/questions/question_template
   * @secure
   * @responses <br/>
   *  **200** CreateQuestionDataDC  <br/>
   */
  createQuestion = (data: QuestionTemplateDetailedDtoDC, params: RequestParams = {}) =>
    http.request<CreateQuestionDataDC, any>({
      path: `/api/v1/admin/questions/question_template`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-questions
   * @request POST:/api/v1/admin/questions/execute
   * @secure
   * @responses <br/>
   *  **200** ExecuteCodeDataDC  <br/>
   */
  executeCode = (data: ExecuteCodeInputDtoDC, params: RequestParams = {}) =>
    http.request<ExecuteCodeDataDC, any>({
      path: `/api/v1/admin/questions/execute`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-questions
   * @request GET:/api/v1/admin/questions/info
   * @secure
   * @responses <br/>
   *  **200** GetInfoDataDC  <br/>
   */
  getInfo = (params: RequestParams = {}) =>
    http.request<GetInfoDataDC, any>({
      path: `/api/v1/admin/questions/info`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-questions
   * @request GET:/api/v1/admin/questions/question_template
   * @secure
   * @responses <br/>
   *  **200** GetQuestionTemplateDataDC  <br/>
   */
  getQuestionTemplate = (query: GetQuestionTemplateParamsDC, params: RequestParams = {}) =>
    http.request<GetQuestionTemplateDataDC, any>({
      path: `/api/v1/admin/questions/question_template`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-questions
   * @request GET:/api/v1/admin/questions/question_templates/list
   * @secure
   * @responses <br/>
   *  **200** GetQuestionTemplatesListDataDC  <br/>
   */
  getQuestionTemplatesList = (query: GetQuestionTemplatesListParamsDC, params: RequestParams = {}) =>
    http.request<GetQuestionTemplatesListDataDC, any>({
      path: `/api/v1/admin/questions/question_templates/list`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-questions
   * @request DELETE:/api/v1/admin/questions/{questionId}
   * @secure
   * @responses <br/>
   *  **200** RemoveQuestionDataDC  <br/>
   */
  removeQuestion = (questionId: string, params: RequestParams = {}) =>
    http.request<RemoveQuestionDataDC, any>({
      path: `/api/v1/admin/questions/${questionId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-questions
   * @request PATCH:/api/v1/admin/questions/question_template
   * @secure
   * @responses <br/>
   *  **200** UpdateQuestionDataDC  <br/>
   */
  updateQuestion = (data: QuestionTemplateDetailedDtoDC, params: RequestParams = {}) =>
    http.request<UpdateQuestionDataDC, any>({
      path: `/api/v1/admin/questions/question_template`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
})();
