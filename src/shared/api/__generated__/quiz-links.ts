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
  CreateQuizLinkDataDC,
  DeleteQuizLinkDataDC,
  GetQuizLinkDetailsDataDC,
  GetQuizLinksDataDC,
  QuizLinkStartDtoDC,
  QuizParamsDtoDC,
  StartQuizByLinkDataDC,
} from "./data-contracts";

export const quizLinksApi = new (class QuizLinksApi {
  /**
   * No description
   *
   * @tags quiz-links
   * @request POST:/api/v1/quiz/links/link
   * @responses <br/>
   *  **200** CreateQuizLinkDataDC  <br/>
   */
  createQuizLink = (data: QuizParamsDtoDC, params: RequestParams = {}) =>
    http.request<CreateQuizLinkDataDC, any>({
      path: `/api/v1/quiz/links/link`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz-links
   * @request DELETE:/api/v1/quiz/links/{linkId}
   * @responses <br/>
   *  **200** DeleteQuizLinkDataDC  <br/>
   */
  deleteQuizLink = (linkId: string, params: RequestParams = {}) =>
    http.request<DeleteQuizLinkDataDC, any>({
      path: `/api/v1/quiz/links/${linkId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz-links
   * @request GET:/api/v1/quiz/links/{linkId}
   * @responses <br/>
   *  **200** GetQuizLinkDetailsDataDC  <br/>
   */
  getQuizLinkDetails = (linkId: string, params: RequestParams = {}) =>
    http.request<GetQuizLinkDetailsDataDC, any>({
      path: `/api/v1/quiz/links/${linkId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz-links
   * @request GET:/api/v1/quiz/links
   * @responses <br/>
   *  **200** GetQuizLinksDataDC  <br/>
   */
  getQuizLinks = (params: RequestParams = {}) =>
    http.request<GetQuizLinksDataDC, any>({
      path: `/api/v1/quiz/links`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz-links
   * @request POST:/api/v1/quiz/links/link/{linkId}
   * @responses <br/>
   *  **200** StartQuizByLinkDataDC  <br/>
   */
  startQuizByLink = (linkId: string, data: QuizLinkStartDtoDC, params: RequestParams = {}) =>
    http.request<StartQuizByLinkDataDC, any>({
      path: `/api/v1/quiz/links/link/${linkId}`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
})();
