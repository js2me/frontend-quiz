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
  AnswerQuestionDataDC,
  AnswerQuestionDtoDC,
  AnswerQuestionParamsDC,
  CancelQuizDataDC,
  EndQuizDataDC,
  GetQuestionDataDC,
  GetQuizResultDC,
  PingDataDC,
  QuizParamsDtoDC,
  StartQuizDataDC,
} from "./data-contracts";

export const quizActiveApi = new (class QuizActiveApi {
  /**
   * No description
   *
   * @tags quiz-active
   * @request POST:/api/v1/quiz/active/answer
   * @responses <br/>
   *  **200** AnswerQuestionDataDC  <br/>
   */
  answerQuestion = (query: AnswerQuestionParamsDC, data: AnswerQuestionDtoDC, params: RequestParams = {}) =>
    http.request<AnswerQuestionDataDC, any>({
      path: `/api/v1/quiz/active/answer`,
      method: "POST",
      query: query,
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz-active
   * @request POST:/api/v1/quiz/active/cancel
   * @responses <br/>
   *  **200** CancelQuizDataDC  <br/>
   */
  cancelQuiz = (params: RequestParams = {}) =>
    http.request<CancelQuizDataDC, any>({
      path: `/api/v1/quiz/active/cancel`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz-active
   * @request POST:/api/v1/quiz/active/stop
   * @responses <br/>
   *  **200** EndQuizDataDC  <br/>
   */
  endQuiz = (params: RequestParams = {}) =>
    http.request<EndQuizDataDC, any>({
      path: `/api/v1/quiz/active/stop`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz-active
   * @request GET:/api/v1/quiz/active/question/{questionId}
   * @responses <br/>
   *  **200** GetQuestionDataDC  <br/>
   */
  getQuestion = (questionId: number, params: RequestParams = {}) =>
    http.request<GetQuestionDataDC, any>({
      path: `/api/v1/quiz/active/question/${questionId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz-active
   * @request GET:/api/v1/quiz/active
   * @responses <br/>
   *  **200** GetQuizResultDC  <br/>
   */
  getQuiz = (params: RequestParams = {}) =>
    http.request<GetQuizResultDC, any>({
      path: `/api/v1/quiz/active`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz-active
   * @request POST:/api/v1/quiz/active/ping
   * @responses <br/>
   *  **200** PingDataDC  <br/>
   */
  ping = (params: RequestParams = {}) =>
    http.request<PingDataDC, any>({
      path: `/api/v1/quiz/active/ping`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags quiz-active
   * @request POST:/api/v1/quiz/active/start
   * @responses <br/>
   *  **200** StartQuizDataDC  <br/>
   */
  startQuiz = (data: QuizParamsDtoDC, params: RequestParams = {}) =>
    http.request<StartQuizDataDC, any>({
      path: `/api/v1/quiz/active/start`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
})();
