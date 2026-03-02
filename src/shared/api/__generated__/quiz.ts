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
  GetQuizResultDataDC,
  GetQuizResultListDataDC,
  GetQuizResultListParamsDC,
  GetQuizResultsDataDC,
} from "./data-contracts";

export const quizApi = new (class QuizApi {
  /**
   * No description
   *
   * @tags quiz
   * @request GET:/api/v1/quiz/{quiz_id}/result
   * @responses <br/>
   *  **200** GetQuizResultDataDC  <br/>
   */
  getQuizResult = (quizId: string, params: RequestParams = {}) =>
    http.request<GetQuizResultDataDC, any>({
      path: `/api/v1/quiz/${quizId}/result`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz
   * @request GET:/api/v1/quiz/{user_id}/results/list
   * @responses <br/>
   *  **200** GetQuizResultListDataDC  <br/>
   */
  getQuizResultList = ({ userId, ...query }: GetQuizResultListParamsDC, params: RequestParams = {}) =>
    http.request<GetQuizResultListDataDC, any>({
      path: `/api/v1/quiz/${userId}/results/list`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz
   * @request GET:/api/v1/quiz/{user_id}/results
   * @responses <br/>
   *  **200** GetQuizResultsDataDC  <br/>
   */
  getQuizResults = (userId: number, params: RequestParams = {}) =>
    http.request<GetQuizResultsDataDC, any>({
      path: `/api/v1/quiz/${userId}/results`,
      method: "GET",
      ...params,
    });
})();
