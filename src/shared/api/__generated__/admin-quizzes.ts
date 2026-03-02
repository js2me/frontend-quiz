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
  DeleteQuizDataDC,
  GetQuizDataDC,
  GetQuizListDataDC,
  GetQuizListParamsDC,
  GetQuizzesResultDC,
  GetResultQuizQuestionDataDC,
} from "./data-contracts";

export const adminQuizzesApi = new (class AdminQuizzesApi {
  /**
   * No description
   *
   * @tags admin-quizzes
   * @request DELETE:/api/v1/admin/quizzes/{quizId}
   * @secure
   * @responses <br/>
   *  **200** DeleteQuizDataDC  <br/>
   */
  deleteQuiz = (quizId: string, params: RequestParams = {}) =>
    http.request<DeleteQuizDataDC, any>({
      path: `/api/v1/admin/quizzes/${quizId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-quizzes
   * @request GET:/api/v1/admin/quizzes/{quizId}
   * @secure
   * @responses <br/>
   *  **200** GetQuizDataDC  <br/>
   */
  getQuiz = (quizId: string, params: RequestParams = {}) =>
    http.request<GetQuizDataDC, any>({
      path: `/api/v1/admin/quizzes/${quizId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-quizzes
   * @request GET:/api/v1/admin/quizzes/list
   * @secure
   * @responses <br/>
   *  **200** GetQuizListDataDC  <br/>
   */
  getQuizList = (query: GetQuizListParamsDC, params: RequestParams = {}) =>
    http.request<GetQuizListDataDC, any>({
      path: `/api/v1/admin/quizzes/list`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-quizzes
   * @request GET:/api/v1/admin/quizzes
   * @secure
   * @responses <br/>
   *  **200** GetQuizzesResultDC  <br/>
   */
  getQuizzes = (params: RequestParams = {}) =>
    http.request<GetQuizzesResultDC, any>({
      path: `/api/v1/admin/quizzes`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags admin-quizzes
   * @request GET:/api/v1/admin/quizzes/{quizId}/{questionId}
   * @secure
   * @responses <br/>
   *  **200** GetResultQuizQuestionDataDC  <br/>
   */
  getResultQuizQuestion = (quizId: string, questionId: number, params: RequestParams = {}) =>
    http.request<GetResultQuizQuestionDataDC, any>({
      path: `/api/v1/admin/quizzes/${quizId}/${questionId}`,
      method: "GET",
      secure: true,
      ...params,
    });
})();
