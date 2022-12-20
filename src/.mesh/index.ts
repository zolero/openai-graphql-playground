// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import OpenapiHandler from "@graphql-mesh/openapi"
import BareMerger from "@graphql-mesh/merger-bare";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { OpenAiTypes } from './sources/OpenAI/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: number;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: number;
  /** The `File` scalar type represents a file upload. */
  File: File;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: string;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: number;
  /**
   * A string of up to 40 characters that will be added to your fine-tuned model name.
   *
   * For example, a `suffix` of "custom-model-name" would produce a model name like `ada:ft-your-org:custom-model-name-2022-02-15-04-21-04`.
   */
  mutationInput_createFineTune_input_suffix: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: URL | string;
  ObjMap: any;
};

export type Query = {
  /** Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability. */
  listEngines?: Maybe<listEngines_200_response>;
  /** Retrieves a model instance, providing basic information about it such as the owner and availability. */
  retrieveEngine?: Maybe<query_retrieveEngine>;
  /** Returns a list of files that belong to the user's organization. */
  listFiles?: Maybe<listFiles_200_response>;
  /** Returns information about a specific file. */
  retrieveFile?: Maybe<query_retrieveFile>;
  /** Returns the contents of the specified file */
  downloadFile?: Maybe<Scalars['String']>;
  /**
   * List your organization's fine-tuning jobs
   *
   */
  listFineTunes?: Maybe<listFineTunes_200_response>;
  /**
   * Gets info about the fine-tune job.
   *
   * [Learn more about Fine-tuning](/docs/guides/fine-tuning)
   *
   */
  retrieveFineTune?: Maybe<query_retrieveFineTune>;
  /**
   * Get fine-grained status updates for a fine-tune job.
   *
   */
  listFineTuneEvents?: Maybe<listFineTuneEvents_200_response>;
  /** Lists the currently available models, and provides basic information about each one such as the owner and availability. */
  listModels?: Maybe<listModels_200_response>;
  /** Retrieves a model instance, providing basic information about the model such as the owner and permissioning. */
  retrieveModel?: Maybe<query_retrieveModel>;
};


export type QueryretrieveEngineArgs = {
  engine_id: Scalars['String'];
};


export type QueryretrieveFileArgs = {
  file_id: Scalars['String'];
};


export type QuerydownloadFileArgs = {
  file_id: Scalars['String'];
};


export type QueryretrieveFineTuneArgs = {
  fine_tune_id: Scalars['String'];
};


export type QuerylistFineTuneEventsArgs = {
  fine_tune_id: Scalars['String'];
  stream?: InputMaybe<Scalars['Boolean']>;
};


export type QueryretrieveModelArgs = {
  model: Scalars['String'];
};

export type listEngines_200_response = {
  object: Scalars['String'];
  data: Array<Maybe<Engine>>;
};

export type Engine = {
  id: Scalars['String'];
  object: Scalars['String'];
  created?: Maybe<Scalars['Int']>;
  ready: Scalars['Boolean'];
};

export type query_retrieveEngine = {
  id: Scalars['String'];
  object: Scalars['String'];
  created?: Maybe<Scalars['Int']>;
  ready: Scalars['Boolean'];
};

export type listFiles_200_response = {
  object: Scalars['String'];
  data: Array<Maybe<OpenAIFile>>;
};

export type OpenAIFile = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type query_retrieveFile = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type listFineTunes_200_response = {
  object: Scalars['String'];
  data: Array<Maybe<FineTune>>;
};

export type FineTune = {
  id: Scalars['String'];
  object: Scalars['String'];
  created_at: Scalars['Int'];
  updated_at: Scalars['Int'];
  model: Scalars['String'];
  fine_tuned_model?: Maybe<Scalars['String']>;
  organization_id: Scalars['String'];
  status: Scalars['String'];
  hyperparams: Scalars['JSON'];
  training_files: Array<Maybe<query_listFineTunes_data_items_training_files_items>>;
  validation_files: Array<Maybe<query_listFineTunes_data_items_validation_files_items>>;
  result_files: Array<Maybe<query_listFineTunes_data_items_result_files_items>>;
  events?: Maybe<Array<Maybe<FineTuneEvent>>>;
};

export type query_listFineTunes_data_items_training_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type query_listFineTunes_data_items_validation_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type query_listFineTunes_data_items_result_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type FineTuneEvent = {
  object: Scalars['String'];
  created_at: Scalars['Int'];
  level: Scalars['String'];
  message: Scalars['String'];
};

export type query_retrieveFineTune = {
  id: Scalars['String'];
  object: Scalars['String'];
  created_at: Scalars['Int'];
  updated_at: Scalars['Int'];
  model: Scalars['String'];
  fine_tuned_model?: Maybe<Scalars['String']>;
  organization_id: Scalars['String'];
  status: Scalars['String'];
  hyperparams: Scalars['JSON'];
  training_files: Array<Maybe<query_retrieveFineTune_training_files_items>>;
  validation_files: Array<Maybe<query_retrieveFineTune_validation_files_items>>;
  result_files: Array<Maybe<query_retrieveFineTune_result_files_items>>;
  events?: Maybe<Array<Maybe<query_retrieveFineTune_events_items>>>;
};

export type query_retrieveFineTune_training_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type query_retrieveFineTune_validation_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type query_retrieveFineTune_result_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type query_retrieveFineTune_events_items = {
  object: Scalars['String'];
  created_at: Scalars['Int'];
  level: Scalars['String'];
  message: Scalars['String'];
};

export type listFineTuneEvents_200_response = {
  object: Scalars['String'];
  data: Array<Maybe<query_listFineTuneEvents_data_items>>;
};

export type query_listFineTuneEvents_data_items = {
  object: Scalars['String'];
  created_at: Scalars['Int'];
  level: Scalars['String'];
  message: Scalars['String'];
};

export type listModels_200_response = {
  object: Scalars['String'];
  data: Array<Maybe<Model>>;
};

export type Model = {
  id: Scalars['String'];
  object: Scalars['String'];
  created: Scalars['Int'];
  owned_by: Scalars['String'];
};

export type query_retrieveModel = {
  id: Scalars['String'];
  object: Scalars['String'];
  created: Scalars['Int'];
  owned_by: Scalars['String'];
};

export type Mutation = {
  /** Creates a new edit for the provided input, instruction, and parameters */
  createEdit?: Maybe<createEdit_200_response>;
  /** Creates an image given a prompt. */
  createImage?: Maybe<createImage_200_response>;
  /** Creates an edited or extended image given an original image and a prompt. */
  createImageEdit?: Maybe<createImageEdit_200_response>;
  /** Creates a variation of a given image. */
  createImageVariation?: Maybe<createImageVariation_200_response>;
  /** Creates an embedding vector representing the input text. */
  createEmbedding?: Maybe<createEmbedding_200_response>;
  /**
   * The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.
   *
   * To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.
   *
   * The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
   *
   */
  createSearch?: Maybe<createSearch_200_response>;
  /**
   * Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.
   *
   */
  createFile?: Maybe<mutation_createFile>;
  /** Delete a file. */
  deleteFile?: Maybe<deleteFile_200_response>;
  /**
   * Answers the specified question using the provided documents and examples.
   *
   * The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
   *
   */
  createAnswer?: Maybe<createAnswer_200_response>;
  /**
   * Classifies the specified `query` using provided examples.
   *
   * The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
   * to select the ones most relevant for the particular query. Then, the relevant examples
   * are combined with the query to construct a prompt to produce the final label via the
   * [completions](/docs/api-reference/completions) endpoint.
   *
   * Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
   * request using the `examples` parameter for quick tests and small scale use cases.
   *
   */
  createClassification?: Maybe<createClassification_200_response>;
  /**
   * Creates a job that fine-tunes a specified model from a given dataset.
   *
   * Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.
   *
   * [Learn more about Fine-tuning](/docs/guides/fine-tuning)
   *
   */
  createFineTune?: Maybe<mutation_createFineTune>;
  /**
   * Immediately cancel a fine-tune job.
   *
   */
  cancelFineTune?: Maybe<mutation_cancelFineTune>;
  /** Delete a fine-tuned model. You must have the Owner role in your organization. */
  deleteModel?: Maybe<deleteModel_200_response>;
  /** Classifies if text violates OpenAI's Content Policy */
  createModeration?: Maybe<createModeration_200_response>;
};


export type MutationcreateEditArgs = {
  input?: InputMaybe<createEdit_request_Input>;
};


export type MutationcreateImageArgs = {
  input?: InputMaybe<createImage_request_Input>;
};


export type MutationcreateImageEditArgs = {
  input?: InputMaybe<createImageEdit_request_Input>;
};


export type MutationcreateImageVariationArgs = {
  input?: InputMaybe<createImageVariation_request_Input>;
};


export type MutationcreateEmbeddingArgs = {
  input?: InputMaybe<createEmbedding_request_Input>;
};


export type MutationcreateSearchArgs = {
  engine_id: Scalars['String'];
  input?: InputMaybe<createSearch_request_Input>;
};


export type MutationcreateFileArgs = {
  input?: InputMaybe<createFile_request_Input>;
};


export type MutationdeleteFileArgs = {
  file_id: Scalars['String'];
};


export type MutationcreateAnswerArgs = {
  input?: InputMaybe<createAnswer_request_Input>;
};


export type MutationcreateClassificationArgs = {
  input?: InputMaybe<createClassification_request_Input>;
};


export type MutationcreateFineTuneArgs = {
  input?: InputMaybe<createFineTune_request_Input>;
};


export type MutationcancelFineTuneArgs = {
  fine_tune_id: Scalars['String'];
};


export type MutationdeleteModelArgs = {
  model: Scalars['URL'];
};


export type MutationcreateModerationArgs = {
  input?: InputMaybe<createModeration_request_Input>;
};

export type createEdit_200_response = {
  id: Scalars['String'];
  object: Scalars['String'];
  created: Scalars['Int'];
  model: Scalars['String'];
  choices: Array<Maybe<mutation_createEdit_choices_items>>;
  usage: mutation_createEdit_usage;
};

export type mutation_createEdit_choices_items = {
  text?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  logprobs?: Maybe<mutation_createEdit_choices_items_logprobs>;
  finish_reason?: Maybe<Scalars['String']>;
};

export type mutation_createEdit_choices_items_logprobs = {
  tokens?: Maybe<Array<Maybe<Scalars['String']>>>;
  token_logprobs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  top_logprobs?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  text_offset?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type mutation_createEdit_usage = {
  prompt_tokens: Scalars['Int'];
  completion_tokens: Scalars['Int'];
  total_tokens: Scalars['Int'];
};

export type createEdit_request_Input = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them. */
  model: Scalars['String'];
  /** The input text to use as a starting point for the edit. */
  input?: InputMaybe<Scalars['String']>;
  /** The instruction that tells the model how to edit the prompt. */
  instruction: Scalars['String'];
  /** How many edits to generate for the input and instruction. */
  n?: InputMaybe<Scalars['PositiveInt']>;
  /**
   * What [sampling temperature](https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277) to use. Higher values means the model will take more risks. Try 0.9 for more creative applications, and 0 (argmax sampling) for ones with a well-defined answer.
   *
   * We generally recommend altering this or `top_p` but not both.
   */
  temperature?: InputMaybe<Scalars['NonNegativeFloat']>;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or `temperature` but not both.
   */
  top_p?: InputMaybe<Scalars['NonNegativeFloat']>;
};

export type createImage_200_response = {
  created: Scalars['Int'];
  data: Array<Maybe<mutation_createImage_data_items>>;
};

export type mutation_createImage_data_items = {
  url?: Maybe<Scalars['String']>;
  b64_json?: Maybe<Scalars['String']>;
};

export type createImage_request_Input = {
  /** A text description of the desired image(s). The maximum length is 1000 characters. */
  prompt: Scalars['String'];
  /** The number of images to generate. Must be between 1 and 10. */
  n?: InputMaybe<Scalars['PositiveInt']>;
  size?: InputMaybe<mutationInput_createImage_input_size>;
  response_format?: InputMaybe<mutationInput_createImage_input_response_format>;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). */
  user?: InputMaybe<Scalars['String']>;
};

/** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
export type mutationInput_createImage_input_size =
  | '_256x256'
  | '_512x512'
  | '_1024x1024';

/** The format in which the generated images are returned. Must be one of `url` or `b64_json`. */
export type mutationInput_createImage_input_response_format =
  | 'url'
  | 'b64_json';

export type createImageEdit_200_response = {
  created: Scalars['Int'];
  data: Array<Maybe<mutation_createImageEdit_data_items>>;
};

export type mutation_createImageEdit_data_items = {
  url?: Maybe<Scalars['String']>;
  b64_json?: Maybe<Scalars['String']>;
};

export type createImageEdit_request_Input = {
  /** The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask. */
  image: Scalars['File'];
  /** An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`. */
  mask?: InputMaybe<Scalars['File']>;
  /** A text description of the desired image(s). The maximum length is 1000 characters. */
  prompt: Scalars['String'];
  /** The number of images to generate. Must be between 1 and 10. */
  n?: InputMaybe<Scalars['PositiveInt']>;
  size?: InputMaybe<mutationInput_createImageEdit_input_size>;
  response_format?: InputMaybe<mutationInput_createImageEdit_input_response_format>;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). */
  user?: InputMaybe<Scalars['String']>;
};

/** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
export type mutationInput_createImageEdit_input_size =
  | '_256x256'
  | '_512x512'
  | '_1024x1024';

/** The format in which the generated images are returned. Must be one of `url` or `b64_json`. */
export type mutationInput_createImageEdit_input_response_format =
  | 'url'
  | 'b64_json';

export type createImageVariation_200_response = {
  created: Scalars['Int'];
  data: Array<Maybe<mutation_createImageVariation_data_items>>;
};

export type mutation_createImageVariation_data_items = {
  url?: Maybe<Scalars['String']>;
  b64_json?: Maybe<Scalars['String']>;
};

export type createImageVariation_request_Input = {
  /** The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square. */
  image: Scalars['File'];
  /** The number of images to generate. Must be between 1 and 10. */
  n?: InputMaybe<Scalars['PositiveInt']>;
  size?: InputMaybe<mutationInput_createImageVariation_input_size>;
  response_format?: InputMaybe<mutationInput_createImageVariation_input_response_format>;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). */
  user?: InputMaybe<Scalars['String']>;
};

/** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
export type mutationInput_createImageVariation_input_size =
  | '_256x256'
  | '_512x512'
  | '_1024x1024';

/** The format in which the generated images are returned. Must be one of `url` or `b64_json`. */
export type mutationInput_createImageVariation_input_response_format =
  | 'url'
  | 'b64_json';

export type createEmbedding_200_response = {
  object: Scalars['String'];
  model: Scalars['String'];
  data: Array<Maybe<mutation_createEmbedding_data_items>>;
  usage: mutation_createEmbedding_usage;
};

export type mutation_createEmbedding_data_items = {
  index: Scalars['Int'];
  object: Scalars['String'];
  embedding: Array<Maybe<Scalars['Float']>>;
};

export type mutation_createEmbedding_usage = {
  prompt_tokens: Scalars['Int'];
  total_tokens: Scalars['Int'];
};

export type createEmbedding_request_Input = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them. */
  model: Scalars['String'];
  /** Input text to get embeddings for, encoded as a string or array of tokens. To get embeddings for multiple inputs in a single request, pass an array of strings or array of token arrays. Each input must not exceed 8192 tokens in length. */
  input: Scalars['String'];
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). */
  user?: InputMaybe<Scalars['String']>;
};

export type createSearch_200_response = {
  object?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<mutation_createSearch_data_items>>>;
};

export type mutation_createSearch_data_items = {
  object?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Float']>;
};

export type createSearch_request_Input = {
  /** Query to search against the documents. */
  query: Scalars['NonEmptyString'];
  /**
   * Up to 200 documents to search over, provided as a list of strings.
   *
   * The maximum document length (in tokens) is 2034 minus the number of tokens in the query.
   *
   * You should specify either `documents` or a `file`, but not both.
   */
  documents?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   * The ID of an uploaded file that contains documents to search over.
   *
   * You should specify either `documents` or a `file`, but not both.
   */
  file?: InputMaybe<Scalars['String']>;
  /**
   * The maximum number of documents to be re-ranked and returned by search.
   *
   * This flag only takes effect when `file` is set.
   */
  max_rerank?: InputMaybe<Scalars['PositiveInt']>;
  /**
   * A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a "metadata" field.
   *
   * This flag only takes effect when `file` is set.
   */
  return_metadata?: InputMaybe<Scalars['Boolean']>;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). */
  user?: InputMaybe<Scalars['String']>;
};

export type mutation_createFile = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type createFile_request_Input = {
  /**
   * Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.
   *
   * If the `purpose` is set to "fine-tune", each line is a JSON record with "prompt" and "completion" fields representing your [training examples](/docs/guides/fine-tuning/prepare-training-data).
   */
  file: Scalars['File'];
  /**
   * The intended purpose of the uploaded documents.
   *
   * Use "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of the uploaded file.
   */
  purpose: Scalars['String'];
};

export type deleteFile_200_response = {
  id: Scalars['String'];
  object: Scalars['String'];
  deleted: Scalars['Boolean'];
};

export type createAnswer_200_response = {
  object?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  search_model?: Maybe<Scalars['String']>;
  completion?: Maybe<Scalars['String']>;
  answers?: Maybe<Array<Maybe<Scalars['String']>>>;
  selected_documents?: Maybe<Array<Maybe<mutation_createAnswer_selected_documents_items>>>;
};

export type mutation_createAnswer_selected_documents_items = {
  document?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type createAnswer_request_Input = {
  /** ID of the model to use for completion. You can select one of `ada`, `babbage`, `curie`, or `davinci`. */
  model: Scalars['String'];
  /** Question to get answered. */
  question: Scalars['NonEmptyString'];
  /** List of (question, answer) pairs that will help steer the model towards the tone and answer format you'd like. We recommend adding 2 to 3 examples. */
  examples: Array<InputMaybe<Array<InputMaybe<Scalars['NonEmptyString']>>>>;
  /** A text snippet containing the contextual information used to generate the answers for the `examples` you provide. */
  examples_context: Scalars['String'];
  /**
   * List of documents from which the answer for the input `question` should be derived. If this is an empty list, the question will be answered based on the question-answer examples.
   *
   * You should specify either `documents` or a `file`, but not both.
   */
  documents?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   * The ID of an uploaded file that contains documents to search over. See [upload file](/docs/api-reference/files/upload) for how to upload a file of the desired format and purpose.
   *
   * You should specify either `documents` or a `file`, but not both.
   */
  file?: InputMaybe<Scalars['String']>;
  /** ID of the model to use for [Search](/docs/api-reference/searches/create). You can select one of `ada`, `babbage`, `curie`, or `davinci`. */
  search_model?: InputMaybe<Scalars['String']>;
  /** The maximum number of documents to be ranked by [Search](/docs/api-reference/searches/create) when using `file`. Setting it to a higher value leads to improved accuracy but with increased latency and cost. */
  max_rerank?: InputMaybe<Scalars['Int']>;
  /** What [sampling temperature](https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277) to use. Higher values mean the model will take more risks and value 0 (argmax sampling) works better for scenarios with a well-defined answer. */
  temperature?: InputMaybe<Scalars['Float']>;
  /**
   * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.
   *
   * The maximum value for `logprobs` is 5. If you need more than this, please contact us through our [Help center](https://help.openai.com) and describe your use case.
   *
   * When `logprobs` is set, `completion` will be automatically added into `expand` to get the logprobs.
   */
  logprobs?: InputMaybe<Scalars['NonNegativeInt']>;
  /** The maximum number of tokens allowed for the generated answer */
  max_tokens?: InputMaybe<Scalars['Int']>;
  stop?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** How many answers to generate for each question. */
  n?: InputMaybe<Scalars['PositiveInt']>;
  logit_bias?: InputMaybe<Scalars['JSON']>;
  /**
   * A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a "metadata" field.
   *
   * This flag only takes effect when `file` is set.
   */
  return_metadata?: InputMaybe<Scalars['Boolean']>;
  /** If set to `true`, the returned JSON will include a "prompt" field containing the final prompt that was used to request a completion. This is mainly useful for debugging purposes. */
  return_prompt?: InputMaybe<Scalars['Boolean']>;
  /** If an object name is in the list, we provide the full information of the object; otherwise, we only provide the object ID. Currently we support `completion` and `file` objects for expansion. */
  expand?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). */
  user?: InputMaybe<Scalars['String']>;
};

export type createClassification_200_response = {
  object?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  search_model?: Maybe<Scalars['String']>;
  completion?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  selected_examples?: Maybe<Array<Maybe<mutation_createClassification_selected_examples_items>>>;
};

export type mutation_createClassification_selected_examples_items = {
  document?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type createClassification_request_Input = {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them. */
  model: Scalars['String'];
  /** Query to be classified. */
  query: Scalars['NonEmptyString'];
  /**
   * A list of examples with labels, in the following format:
   *
   * `[["The movie is so interesting.", "Positive"], ["It is quite boring.", "Negative"], ...]`
   *
   * All the label strings will be normalized to be capitalized.
   *
   * You should specify either `examples` or `file`, but not both.
   */
  examples?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['NonEmptyString']>>>>>;
  /**
   * The ID of the uploaded file that contains training examples. See [upload file](/docs/api-reference/files/upload) for how to upload a file of the desired format and purpose.
   *
   * You should specify either `examples` or `file`, but not both.
   */
  file?: InputMaybe<Scalars['String']>;
  /** The set of categories being classified. If not specified, candidate labels will be automatically collected from the examples you provide. All the label strings will be normalized to be capitalized. */
  labels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** ID of the model to use for [Search](/docs/api-reference/searches/create). You can select one of `ada`, `babbage`, `curie`, or `davinci`. */
  search_model?: InputMaybe<Scalars['String']>;
  /** What sampling `temperature` to use. Higher values mean the model will take more risks. Try 0.9 for more creative applications, and 0 (argmax sampling) for ones with a well-defined answer. */
  temperature?: InputMaybe<Scalars['NonNegativeFloat']>;
  /**
   * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.
   *
   * The maximum value for `logprobs` is 5. If you need more than this, please contact us through our [Help center](https://help.openai.com) and describe your use case.
   *
   * When `logprobs` is set, `completion` will be automatically added into `expand` to get the logprobs.
   */
  logprobs?: InputMaybe<Scalars['NonNegativeInt']>;
  /** The maximum number of examples to be ranked by [Search](/docs/api-reference/searches/create) when using `file`. Setting it to a higher value leads to improved accuracy but with increased latency and cost. */
  max_examples?: InputMaybe<Scalars['Int']>;
  logit_bias?: InputMaybe<Scalars['JSON']>;
  /** If set to `true`, the returned JSON will include a "prompt" field containing the final prompt that was used to request a completion. This is mainly useful for debugging purposes. */
  return_prompt?: InputMaybe<Scalars['Boolean']>;
  /**
   * A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a "metadata" field.
   *
   * This flag only takes effect when `file` is set.
   */
  return_metadata?: InputMaybe<Scalars['Boolean']>;
  /** If an object name is in the list, we provide the full information of the object; otherwise, we only provide the object ID. Currently we support `completion` and `file` objects for expansion. */
  expand?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). */
  user?: InputMaybe<Scalars['String']>;
};

export type mutation_createFineTune = {
  id: Scalars['String'];
  object: Scalars['String'];
  created_at: Scalars['Int'];
  updated_at: Scalars['Int'];
  model: Scalars['String'];
  fine_tuned_model?: Maybe<Scalars['String']>;
  organization_id: Scalars['String'];
  status: Scalars['String'];
  hyperparams: Scalars['JSON'];
  training_files: Array<Maybe<mutation_createFineTune_training_files_items>>;
  validation_files: Array<Maybe<mutation_createFineTune_validation_files_items>>;
  result_files: Array<Maybe<mutation_createFineTune_result_files_items>>;
  events?: Maybe<Array<Maybe<mutation_createFineTune_events_items>>>;
};

export type mutation_createFineTune_training_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type mutation_createFineTune_validation_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type mutation_createFineTune_result_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type mutation_createFineTune_events_items = {
  object: Scalars['String'];
  created_at: Scalars['Int'];
  level: Scalars['String'];
  message: Scalars['String'];
};

export type createFineTune_request_Input = {
  /**
   * The ID of an uploaded file that contains training data.
   *
   * See [upload file](/docs/api-reference/files/upload) for how to upload a file.
   *
   * Your dataset must be formatted as a JSONL file, where each training
   * example is a JSON object with the keys "prompt" and "completion".
   * Additionally, you must upload your file with the purpose `fine-tune`.
   *
   * See the [fine-tuning guide](/docs/guides/fine-tuning/creating-training-data) for more details.
   */
  training_file: Scalars['String'];
  /**
   * The ID of an uploaded file that contains validation data.
   *
   * If you provide this file, the data is used to generate validation
   * metrics periodically during fine-tuning. These metrics can be viewed in
   * the [fine-tuning results file](/docs/guides/fine-tuning/analyzing-your-fine-tuned-model).
   * Your train and validation data should be mutually exclusive.
   *
   * Your dataset must be formatted as a JSONL file, where each validation
   * example is a JSON object with the keys "prompt" and "completion".
   * Additionally, you must upload your file with the purpose `fine-tune`.
   *
   * See the [fine-tuning guide](/docs/guides/fine-tuning/creating-training-data) for more details.
   */
  validation_file?: InputMaybe<Scalars['String']>;
  /**
   * The name of the base model to fine-tune. You can select one of "ada",
   * "babbage", "curie", "davinci", or a fine-tuned model created after 2022-04-21.
   * To learn more about these models, see the
   * [Models](https://beta.openai.com/docs/models) documentation.
   */
  model?: InputMaybe<Scalars['String']>;
  /**
   * The number of epochs to train the model for. An epoch refers to one
   * full cycle through the training dataset.
   */
  n_epochs?: InputMaybe<Scalars['Int']>;
  /**
   * The batch size to use for training. The batch size is the number of
   * training examples used to train a single forward and backward pass.
   *
   * By default, the batch size will be dynamically configured to be
   * ~0.2% of the number of examples in the training set, capped at 256 -
   * in general, we've found that larger batch sizes tend to work better
   * for larger datasets.
   */
  batch_size?: InputMaybe<Scalars['Int']>;
  /**
   * The learning rate multiplier to use for training.
   * The fine-tuning learning rate is the original learning rate used for
   * pretraining multiplied by this value.
   *
   * By default, the learning rate multiplier is the 0.05, 0.1, or 0.2
   * depending on final `batch_size` (larger learning rates tend to
   * perform better with larger batch sizes). We recommend experimenting
   * with values in the range 0.02 to 0.2 to see what produces the best
   * results.
   */
  learning_rate_multiplier?: InputMaybe<Scalars['Float']>;
  /**
   * The weight to use for loss on the prompt tokens. This controls how
   * much the model tries to learn to generate the prompt (as compared
   * to the completion which always has a weight of 1.0), and can add
   * a stabilizing effect to training when completions are short.
   *
   * If prompts are extremely long (relative to completions), it may make
   * sense to reduce this weight so as to avoid over-prioritizing
   * learning the prompt.
   */
  prompt_loss_weight?: InputMaybe<Scalars['Float']>;
  /**
   * If set, we calculate classification-specific metrics such as accuracy
   * and F-1 score using the validation set at the end of every epoch.
   * These metrics can be viewed in the [results file](/docs/guides/fine-tuning/analyzing-your-fine-tuned-model).
   *
   * In order to compute classification metrics, you must provide a
   * `validation_file`. Additionally, you must
   * specify `classification_n_classes` for multiclass classification or
   * `classification_positive_class` for binary classification.
   */
  compute_classification_metrics?: InputMaybe<Scalars['Boolean']>;
  /**
   * The number of classes in a classification task.
   *
   * This parameter is required for multiclass classification.
   */
  classification_n_classes?: InputMaybe<Scalars['Int']>;
  /**
   * The positive class in binary classification.
   *
   * This parameter is needed to generate precision, recall, and F1
   * metrics when doing binary classification.
   */
  classification_positive_class?: InputMaybe<Scalars['String']>;
  /**
   * If this is provided, we calculate F-beta scores at the specified
   * beta values. The F-beta score is a generalization of F-1 score.
   * This is only used for binary classification.
   *
   * With a beta of 1 (i.e. the F-1 score), precision and recall are
   * given the same weight. A larger beta score puts more weight on
   * recall and less on precision. A smaller beta score puts more weight
   * on precision and less on recall.
   */
  classification_betas?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /**
   * A string of up to 40 characters that will be added to your fine-tuned model name.
   *
   * For example, a `suffix` of "custom-model-name" would produce a model name like `ada:ft-your-org:custom-model-name-2022-02-15-04-21-04`.
   */
  suffix?: InputMaybe<Scalars['mutationInput_createFineTune_input_suffix']>;
};

export type mutation_cancelFineTune = {
  id: Scalars['String'];
  object: Scalars['String'];
  created_at: Scalars['Int'];
  updated_at: Scalars['Int'];
  model: Scalars['String'];
  fine_tuned_model?: Maybe<Scalars['String']>;
  organization_id: Scalars['String'];
  status: Scalars['String'];
  hyperparams: Scalars['JSON'];
  training_files: Array<Maybe<mutation_cancelFineTune_training_files_items>>;
  validation_files: Array<Maybe<mutation_cancelFineTune_validation_files_items>>;
  result_files: Array<Maybe<mutation_cancelFineTune_result_files_items>>;
  events?: Maybe<Array<Maybe<mutation_cancelFineTune_events_items>>>;
};

export type mutation_cancelFineTune_training_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type mutation_cancelFineTune_validation_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type mutation_cancelFineTune_result_files_items = {
  id: Scalars['String'];
  object: Scalars['String'];
  bytes: Scalars['Int'];
  created_at: Scalars['Int'];
  filename: Scalars['String'];
  purpose: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  status_details?: Maybe<Scalars['JSON']>;
};

export type mutation_cancelFineTune_events_items = {
  object: Scalars['String'];
  created_at: Scalars['Int'];
  level: Scalars['String'];
  message: Scalars['String'];
};

export type deleteModel_200_response = {
  id: Scalars['String'];
  object: Scalars['String'];
  deleted: Scalars['Boolean'];
};

export type createModeration_200_response = {
  id: Scalars['String'];
  model: Scalars['String'];
  results: Array<Maybe<mutation_createModeration_results_items>>;
};

export type mutation_createModeration_results_items = {
  flagged: Scalars['Boolean'];
  categories: mutation_createModeration_results_items_categories;
  category_scores: mutation_createModeration_results_items_category_scores;
};

export type mutation_createModeration_results_items_categories = {
  hate: Scalars['Boolean'];
  hate_threatening: Scalars['Boolean'];
  self_harm: Scalars['Boolean'];
  sexual: Scalars['Boolean'];
  sexual_minors: Scalars['Boolean'];
  violence: Scalars['Boolean'];
  violence_graphic: Scalars['Boolean'];
};

export type mutation_createModeration_results_items_category_scores = {
  hate: Scalars['Float'];
  hate_threatening: Scalars['Float'];
  self_harm: Scalars['Float'];
  sexual: Scalars['Float'];
  sexual_minors: Scalars['Float'];
  violence: Scalars['Float'];
  violence_graphic: Scalars['Float'];
};

export type createModeration_request_Input = {
  input: Array<InputMaybe<Scalars['String']>>;
  /**
   * Two content moderations models are available: `text-moderation-stable` and `text-moderation-latest`.
   *
   * The default is `text-moderation-latest` which will be automatically upgraded over time. This ensures you are always using our most accurate model. If you use `text-moderation-stable`, we will provide advanced notice before updating the model. Accuracy of `text-moderation-stable` may be slightly lower than for `text-moderation-latest`.
   */
  model?: Scalars['String'];
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  listEngines_200_response: ResolverTypeWrapper<listEngines_200_response>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Engine: ResolverTypeWrapper<Engine>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  query_retrieveEngine: ResolverTypeWrapper<query_retrieveEngine>;
  listFiles_200_response: ResolverTypeWrapper<listFiles_200_response>;
  OpenAIFile: ResolverTypeWrapper<OpenAIFile>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  query_retrieveFile: ResolverTypeWrapper<query_retrieveFile>;
  listFineTunes_200_response: ResolverTypeWrapper<listFineTunes_200_response>;
  FineTune: ResolverTypeWrapper<FineTune>;
  query_listFineTunes_data_items_training_files_items: ResolverTypeWrapper<query_listFineTunes_data_items_training_files_items>;
  query_listFineTunes_data_items_validation_files_items: ResolverTypeWrapper<query_listFineTunes_data_items_validation_files_items>;
  query_listFineTunes_data_items_result_files_items: ResolverTypeWrapper<query_listFineTunes_data_items_result_files_items>;
  FineTuneEvent: ResolverTypeWrapper<FineTuneEvent>;
  query_retrieveFineTune: ResolverTypeWrapper<query_retrieveFineTune>;
  query_retrieveFineTune_training_files_items: ResolverTypeWrapper<query_retrieveFineTune_training_files_items>;
  query_retrieveFineTune_validation_files_items: ResolverTypeWrapper<query_retrieveFineTune_validation_files_items>;
  query_retrieveFineTune_result_files_items: ResolverTypeWrapper<query_retrieveFineTune_result_files_items>;
  query_retrieveFineTune_events_items: ResolverTypeWrapper<query_retrieveFineTune_events_items>;
  listFineTuneEvents_200_response: ResolverTypeWrapper<listFineTuneEvents_200_response>;
  query_listFineTuneEvents_data_items: ResolverTypeWrapper<query_listFineTuneEvents_data_items>;
  listModels_200_response: ResolverTypeWrapper<listModels_200_response>;
  Model: ResolverTypeWrapper<Model>;
  query_retrieveModel: ResolverTypeWrapper<query_retrieveModel>;
  Mutation: ResolverTypeWrapper<{}>;
  createEdit_200_response: ResolverTypeWrapper<createEdit_200_response>;
  mutation_createEdit_choices_items: ResolverTypeWrapper<mutation_createEdit_choices_items>;
  mutation_createEdit_choices_items_logprobs: ResolverTypeWrapper<mutation_createEdit_choices_items_logprobs>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  mutation_createEdit_usage: ResolverTypeWrapper<mutation_createEdit_usage>;
  createEdit_request_Input: createEdit_request_Input;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']>;
  createImage_200_response: ResolverTypeWrapper<createImage_200_response>;
  mutation_createImage_data_items: ResolverTypeWrapper<mutation_createImage_data_items>;
  createImage_request_Input: createImage_request_Input;
  mutationInput_createImage_input_size: mutationInput_createImage_input_size;
  mutationInput_createImage_input_response_format: mutationInput_createImage_input_response_format;
  createImageEdit_200_response: ResolverTypeWrapper<createImageEdit_200_response>;
  mutation_createImageEdit_data_items: ResolverTypeWrapper<mutation_createImageEdit_data_items>;
  createImageEdit_request_Input: createImageEdit_request_Input;
  File: ResolverTypeWrapper<Scalars['File']>;
  mutationInput_createImageEdit_input_size: mutationInput_createImageEdit_input_size;
  mutationInput_createImageEdit_input_response_format: mutationInput_createImageEdit_input_response_format;
  createImageVariation_200_response: ResolverTypeWrapper<createImageVariation_200_response>;
  mutation_createImageVariation_data_items: ResolverTypeWrapper<mutation_createImageVariation_data_items>;
  createImageVariation_request_Input: createImageVariation_request_Input;
  mutationInput_createImageVariation_input_size: mutationInput_createImageVariation_input_size;
  mutationInput_createImageVariation_input_response_format: mutationInput_createImageVariation_input_response_format;
  createEmbedding_200_response: ResolverTypeWrapper<createEmbedding_200_response>;
  mutation_createEmbedding_data_items: ResolverTypeWrapper<mutation_createEmbedding_data_items>;
  mutation_createEmbedding_usage: ResolverTypeWrapper<mutation_createEmbedding_usage>;
  createEmbedding_request_Input: createEmbedding_request_Input;
  createSearch_200_response: ResolverTypeWrapper<createSearch_200_response>;
  mutation_createSearch_data_items: ResolverTypeWrapper<mutation_createSearch_data_items>;
  createSearch_request_Input: createSearch_request_Input;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>;
  mutation_createFile: ResolverTypeWrapper<mutation_createFile>;
  createFile_request_Input: createFile_request_Input;
  deleteFile_200_response: ResolverTypeWrapper<deleteFile_200_response>;
  createAnswer_200_response: ResolverTypeWrapper<createAnswer_200_response>;
  mutation_createAnswer_selected_documents_items: ResolverTypeWrapper<mutation_createAnswer_selected_documents_items>;
  createAnswer_request_Input: createAnswer_request_Input;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']>;
  createClassification_200_response: ResolverTypeWrapper<createClassification_200_response>;
  mutation_createClassification_selected_examples_items: ResolverTypeWrapper<mutation_createClassification_selected_examples_items>;
  createClassification_request_Input: createClassification_request_Input;
  mutation_createFineTune: ResolverTypeWrapper<mutation_createFineTune>;
  mutation_createFineTune_training_files_items: ResolverTypeWrapper<mutation_createFineTune_training_files_items>;
  mutation_createFineTune_validation_files_items: ResolverTypeWrapper<mutation_createFineTune_validation_files_items>;
  mutation_createFineTune_result_files_items: ResolverTypeWrapper<mutation_createFineTune_result_files_items>;
  mutation_createFineTune_events_items: ResolverTypeWrapper<mutation_createFineTune_events_items>;
  createFineTune_request_Input: createFineTune_request_Input;
  mutationInput_createFineTune_input_suffix: ResolverTypeWrapper<Scalars['mutationInput_createFineTune_input_suffix']>;
  mutation_cancelFineTune: ResolverTypeWrapper<mutation_cancelFineTune>;
  mutation_cancelFineTune_training_files_items: ResolverTypeWrapper<mutation_cancelFineTune_training_files_items>;
  mutation_cancelFineTune_validation_files_items: ResolverTypeWrapper<mutation_cancelFineTune_validation_files_items>;
  mutation_cancelFineTune_result_files_items: ResolverTypeWrapper<mutation_cancelFineTune_result_files_items>;
  mutation_cancelFineTune_events_items: ResolverTypeWrapper<mutation_cancelFineTune_events_items>;
  deleteModel_200_response: ResolverTypeWrapper<deleteModel_200_response>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  createModeration_200_response: ResolverTypeWrapper<createModeration_200_response>;
  mutation_createModeration_results_items: ResolverTypeWrapper<mutation_createModeration_results_items>;
  mutation_createModeration_results_items_categories: ResolverTypeWrapper<mutation_createModeration_results_items_categories>;
  mutation_createModeration_results_items_category_scores: ResolverTypeWrapper<mutation_createModeration_results_items_category_scores>;
  createModeration_request_Input: createModeration_request_Input;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']>;
  HTTPMethod: HTTPMethod;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  listEngines_200_response: listEngines_200_response;
  String: Scalars['String'];
  Engine: Engine;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  query_retrieveEngine: query_retrieveEngine;
  listFiles_200_response: listFiles_200_response;
  OpenAIFile: OpenAIFile;
  JSON: Scalars['JSON'];
  query_retrieveFile: query_retrieveFile;
  listFineTunes_200_response: listFineTunes_200_response;
  FineTune: FineTune;
  query_listFineTunes_data_items_training_files_items: query_listFineTunes_data_items_training_files_items;
  query_listFineTunes_data_items_validation_files_items: query_listFineTunes_data_items_validation_files_items;
  query_listFineTunes_data_items_result_files_items: query_listFineTunes_data_items_result_files_items;
  FineTuneEvent: FineTuneEvent;
  query_retrieveFineTune: query_retrieveFineTune;
  query_retrieveFineTune_training_files_items: query_retrieveFineTune_training_files_items;
  query_retrieveFineTune_validation_files_items: query_retrieveFineTune_validation_files_items;
  query_retrieveFineTune_result_files_items: query_retrieveFineTune_result_files_items;
  query_retrieveFineTune_events_items: query_retrieveFineTune_events_items;
  listFineTuneEvents_200_response: listFineTuneEvents_200_response;
  query_listFineTuneEvents_data_items: query_listFineTuneEvents_data_items;
  listModels_200_response: listModels_200_response;
  Model: Model;
  query_retrieveModel: query_retrieveModel;
  Mutation: {};
  createEdit_200_response: createEdit_200_response;
  mutation_createEdit_choices_items: mutation_createEdit_choices_items;
  mutation_createEdit_choices_items_logprobs: mutation_createEdit_choices_items_logprobs;
  Float: Scalars['Float'];
  mutation_createEdit_usage: mutation_createEdit_usage;
  createEdit_request_Input: createEdit_request_Input;
  PositiveInt: Scalars['PositiveInt'];
  NonNegativeFloat: Scalars['NonNegativeFloat'];
  createImage_200_response: createImage_200_response;
  mutation_createImage_data_items: mutation_createImage_data_items;
  createImage_request_Input: createImage_request_Input;
  createImageEdit_200_response: createImageEdit_200_response;
  mutation_createImageEdit_data_items: mutation_createImageEdit_data_items;
  createImageEdit_request_Input: createImageEdit_request_Input;
  File: Scalars['File'];
  createImageVariation_200_response: createImageVariation_200_response;
  mutation_createImageVariation_data_items: mutation_createImageVariation_data_items;
  createImageVariation_request_Input: createImageVariation_request_Input;
  createEmbedding_200_response: createEmbedding_200_response;
  mutation_createEmbedding_data_items: mutation_createEmbedding_data_items;
  mutation_createEmbedding_usage: mutation_createEmbedding_usage;
  createEmbedding_request_Input: createEmbedding_request_Input;
  createSearch_200_response: createSearch_200_response;
  mutation_createSearch_data_items: mutation_createSearch_data_items;
  createSearch_request_Input: createSearch_request_Input;
  NonEmptyString: Scalars['NonEmptyString'];
  mutation_createFile: mutation_createFile;
  createFile_request_Input: createFile_request_Input;
  deleteFile_200_response: deleteFile_200_response;
  createAnswer_200_response: createAnswer_200_response;
  mutation_createAnswer_selected_documents_items: mutation_createAnswer_selected_documents_items;
  createAnswer_request_Input: createAnswer_request_Input;
  NonNegativeInt: Scalars['NonNegativeInt'];
  createClassification_200_response: createClassification_200_response;
  mutation_createClassification_selected_examples_items: mutation_createClassification_selected_examples_items;
  createClassification_request_Input: createClassification_request_Input;
  mutation_createFineTune: mutation_createFineTune;
  mutation_createFineTune_training_files_items: mutation_createFineTune_training_files_items;
  mutation_createFineTune_validation_files_items: mutation_createFineTune_validation_files_items;
  mutation_createFineTune_result_files_items: mutation_createFineTune_result_files_items;
  mutation_createFineTune_events_items: mutation_createFineTune_events_items;
  createFineTune_request_Input: createFineTune_request_Input;
  mutationInput_createFineTune_input_suffix: Scalars['mutationInput_createFineTune_input_suffix'];
  mutation_cancelFineTune: mutation_cancelFineTune;
  mutation_cancelFineTune_training_files_items: mutation_cancelFineTune_training_files_items;
  mutation_cancelFineTune_validation_files_items: mutation_cancelFineTune_validation_files_items;
  mutation_cancelFineTune_result_files_items: mutation_cancelFineTune_result_files_items;
  mutation_cancelFineTune_events_items: mutation_cancelFineTune_events_items;
  deleteModel_200_response: deleteModel_200_response;
  URL: Scalars['URL'];
  createModeration_200_response: createModeration_200_response;
  mutation_createModeration_results_items: mutation_createModeration_results_items;
  mutation_createModeration_results_items_categories: mutation_createModeration_results_items_categories;
  mutation_createModeration_results_items_category_scores: mutation_createModeration_results_items_category_scores;
  createModeration_request_Input: createModeration_request_Input;
  ObjMap: Scalars['ObjMap'];
}>;

export type resolveRootFieldDirectiveArgs = {
  field?: Maybe<Scalars['String']>;
};

export type resolveRootFieldDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = resolveRootFieldDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type enumDirectiveArgs = {
  value?: Maybe<Scalars['String']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type oneOfDirectiveArgs = { };

export type oneOfDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = oneOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type lengthDirectiveArgs = {
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};

export type lengthDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = lengthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type globalOptionsDirectiveArgs = {
  sourceName?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  operationHeaders?: Maybe<Scalars['ObjMap']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']>;
  queryParams?: Maybe<Scalars['ObjMap']>;
};

export type globalOptionsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = globalOptionsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  path?: Maybe<Scalars['String']>;
  operationSpecificHeaders?: Maybe<Scalars['ObjMap']>;
  httpMethod?: Maybe<HTTPMethod>;
  isBinary?: Maybe<Scalars['Boolean']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  listEngines?: Resolver<Maybe<ResolversTypes['listEngines_200_response']>, ParentType, ContextType>;
  retrieveEngine?: Resolver<Maybe<ResolversTypes['query_retrieveEngine']>, ParentType, ContextType, RequireFields<QueryretrieveEngineArgs, 'engine_id'>>;
  listFiles?: Resolver<Maybe<ResolversTypes['listFiles_200_response']>, ParentType, ContextType>;
  retrieveFile?: Resolver<Maybe<ResolversTypes['query_retrieveFile']>, ParentType, ContextType, RequireFields<QueryretrieveFileArgs, 'file_id'>>;
  downloadFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QuerydownloadFileArgs, 'file_id'>>;
  listFineTunes?: Resolver<Maybe<ResolversTypes['listFineTunes_200_response']>, ParentType, ContextType>;
  retrieveFineTune?: Resolver<Maybe<ResolversTypes['query_retrieveFineTune']>, ParentType, ContextType, RequireFields<QueryretrieveFineTuneArgs, 'fine_tune_id'>>;
  listFineTuneEvents?: Resolver<Maybe<ResolversTypes['listFineTuneEvents_200_response']>, ParentType, ContextType, RequireFields<QuerylistFineTuneEventsArgs, 'fine_tune_id'>>;
  listModels?: Resolver<Maybe<ResolversTypes['listModels_200_response']>, ParentType, ContextType>;
  retrieveModel?: Resolver<Maybe<ResolversTypes['query_retrieveModel']>, ParentType, ContextType, RequireFields<QueryretrieveModelArgs, 'model'>>;
}>;

export type listEngines_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['listEngines_200_response'] = ResolversParentTypes['listEngines_200_response']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['Engine']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EngineResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Engine'] = ResolversParentTypes['Engine']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ready?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_retrieveEngineResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_retrieveEngine'] = ResolversParentTypes['query_retrieveEngine']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ready?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type listFiles_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['listFiles_200_response'] = ResolversParentTypes['listFiles_200_response']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['OpenAIFile']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenAIFileResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OpenAIFile'] = ResolversParentTypes['OpenAIFile']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type query_retrieveFileResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_retrieveFile'] = ResolversParentTypes['query_retrieveFile']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type listFineTunes_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['listFineTunes_200_response'] = ResolversParentTypes['listFineTunes_200_response']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['FineTune']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FineTuneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FineTune'] = ResolversParentTypes['FineTune']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fine_tuned_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hyperparams?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  training_files?: Resolver<Array<Maybe<ResolversTypes['query_listFineTunes_data_items_training_files_items']>>, ParentType, ContextType>;
  validation_files?: Resolver<Array<Maybe<ResolversTypes['query_listFineTunes_data_items_validation_files_items']>>, ParentType, ContextType>;
  result_files?: Resolver<Array<Maybe<ResolversTypes['query_listFineTunes_data_items_result_files_items']>>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['FineTuneEvent']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_listFineTunes_data_items_training_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_listFineTunes_data_items_training_files_items'] = ResolversParentTypes['query_listFineTunes_data_items_training_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_listFineTunes_data_items_validation_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_listFineTunes_data_items_validation_files_items'] = ResolversParentTypes['query_listFineTunes_data_items_validation_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_listFineTunes_data_items_result_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_listFineTunes_data_items_result_files_items'] = ResolversParentTypes['query_listFineTunes_data_items_result_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FineTuneEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FineTuneEvent'] = ResolversParentTypes['FineTuneEvent']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_retrieveFineTuneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_retrieveFineTune'] = ResolversParentTypes['query_retrieveFineTune']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fine_tuned_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hyperparams?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  training_files?: Resolver<Array<Maybe<ResolversTypes['query_retrieveFineTune_training_files_items']>>, ParentType, ContextType>;
  validation_files?: Resolver<Array<Maybe<ResolversTypes['query_retrieveFineTune_validation_files_items']>>, ParentType, ContextType>;
  result_files?: Resolver<Array<Maybe<ResolversTypes['query_retrieveFineTune_result_files_items']>>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_retrieveFineTune_events_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_retrieveFineTune_training_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_retrieveFineTune_training_files_items'] = ResolversParentTypes['query_retrieveFineTune_training_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_retrieveFineTune_validation_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_retrieveFineTune_validation_files_items'] = ResolversParentTypes['query_retrieveFineTune_validation_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_retrieveFineTune_result_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_retrieveFineTune_result_files_items'] = ResolversParentTypes['query_retrieveFineTune_result_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_retrieveFineTune_events_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_retrieveFineTune_events_items'] = ResolversParentTypes['query_retrieveFineTune_events_items']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type listFineTuneEvents_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['listFineTuneEvents_200_response'] = ResolversParentTypes['listFineTuneEvents_200_response']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['query_listFineTuneEvents_data_items']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_listFineTuneEvents_data_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_listFineTuneEvents_data_items'] = ResolversParentTypes['query_listFineTuneEvents_data_items']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type listModels_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['listModels_200_response'] = ResolversParentTypes['listModels_200_response']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['Model']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ModelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Model'] = ResolversParentTypes['Model']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  owned_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_retrieveModelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_retrieveModel'] = ResolversParentTypes['query_retrieveModel']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  owned_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createEdit?: Resolver<Maybe<ResolversTypes['createEdit_200_response']>, ParentType, ContextType, Partial<MutationcreateEditArgs>>;
  createImage?: Resolver<Maybe<ResolversTypes['createImage_200_response']>, ParentType, ContextType, Partial<MutationcreateImageArgs>>;
  createImageEdit?: Resolver<Maybe<ResolversTypes['createImageEdit_200_response']>, ParentType, ContextType, Partial<MutationcreateImageEditArgs>>;
  createImageVariation?: Resolver<Maybe<ResolversTypes['createImageVariation_200_response']>, ParentType, ContextType, Partial<MutationcreateImageVariationArgs>>;
  createEmbedding?: Resolver<Maybe<ResolversTypes['createEmbedding_200_response']>, ParentType, ContextType, Partial<MutationcreateEmbeddingArgs>>;
  createSearch?: Resolver<Maybe<ResolversTypes['createSearch_200_response']>, ParentType, ContextType, RequireFields<MutationcreateSearchArgs, 'engine_id'>>;
  createFile?: Resolver<Maybe<ResolversTypes['mutation_createFile']>, ParentType, ContextType, Partial<MutationcreateFileArgs>>;
  deleteFile?: Resolver<Maybe<ResolversTypes['deleteFile_200_response']>, ParentType, ContextType, RequireFields<MutationdeleteFileArgs, 'file_id'>>;
  createAnswer?: Resolver<Maybe<ResolversTypes['createAnswer_200_response']>, ParentType, ContextType, Partial<MutationcreateAnswerArgs>>;
  createClassification?: Resolver<Maybe<ResolversTypes['createClassification_200_response']>, ParentType, ContextType, Partial<MutationcreateClassificationArgs>>;
  createFineTune?: Resolver<Maybe<ResolversTypes['mutation_createFineTune']>, ParentType, ContextType, Partial<MutationcreateFineTuneArgs>>;
  cancelFineTune?: Resolver<Maybe<ResolversTypes['mutation_cancelFineTune']>, ParentType, ContextType, RequireFields<MutationcancelFineTuneArgs, 'fine_tune_id'>>;
  deleteModel?: Resolver<Maybe<ResolversTypes['deleteModel_200_response']>, ParentType, ContextType, RequireFields<MutationdeleteModelArgs, 'model'>>;
  createModeration?: Resolver<Maybe<ResolversTypes['createModeration_200_response']>, ParentType, ContextType, Partial<MutationcreateModerationArgs>>;
}>;

export type createEdit_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['createEdit_200_response'] = ResolversParentTypes['createEdit_200_response']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  choices?: Resolver<Array<Maybe<ResolversTypes['mutation_createEdit_choices_items']>>, ParentType, ContextType>;
  usage?: Resolver<ResolversTypes['mutation_createEdit_usage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createEdit_choices_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createEdit_choices_items'] = ResolversParentTypes['mutation_createEdit_choices_items']> = ResolversObject<{
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  logprobs?: Resolver<Maybe<ResolversTypes['mutation_createEdit_choices_items_logprobs']>, ParentType, ContextType>;
  finish_reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createEdit_choices_items_logprobsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createEdit_choices_items_logprobs'] = ResolversParentTypes['mutation_createEdit_choices_items_logprobs']> = ResolversObject<{
  tokens?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  token_logprobs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  top_logprobs?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  text_offset?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createEdit_usageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createEdit_usage'] = ResolversParentTypes['mutation_createEdit_usage']> = ResolversObject<{
  prompt_tokens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  completion_tokens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total_tokens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export type createImage_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['createImage_200_response'] = ResolversParentTypes['createImage_200_response']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['mutation_createImage_data_items']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createImage_data_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createImage_data_items'] = ResolversParentTypes['mutation_createImage_data_items']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  b64_json?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutationInput_createImage_input_sizeResolvers = { _256x256: '256x256', _512x512: '512x512', _1024x1024: '1024x1024' };

export type createImageEdit_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['createImageEdit_200_response'] = ResolversParentTypes['createImageEdit_200_response']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['mutation_createImageEdit_data_items']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createImageEdit_data_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createImageEdit_data_items'] = ResolversParentTypes['mutation_createImageEdit_data_items']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  b64_json?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface FileScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['File'], any> {
  name: 'File';
}

export type mutationInput_createImageEdit_input_sizeResolvers = { _256x256: '256x256', _512x512: '512x512', _1024x1024: '1024x1024' };

export type createImageVariation_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['createImageVariation_200_response'] = ResolversParentTypes['createImageVariation_200_response']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['mutation_createImageVariation_data_items']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createImageVariation_data_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createImageVariation_data_items'] = ResolversParentTypes['mutation_createImageVariation_data_items']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  b64_json?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutationInput_createImageVariation_input_sizeResolvers = { _256x256: '256x256', _512x512: '512x512', _1024x1024: '1024x1024' };

export type createEmbedding_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['createEmbedding_200_response'] = ResolversParentTypes['createEmbedding_200_response']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['mutation_createEmbedding_data_items']>>, ParentType, ContextType>;
  usage?: Resolver<ResolversTypes['mutation_createEmbedding_usage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createEmbedding_data_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createEmbedding_data_items'] = ResolversParentTypes['mutation_createEmbedding_data_items']> = ResolversObject<{
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  embedding?: Resolver<Array<Maybe<ResolversTypes['Float']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createEmbedding_usageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createEmbedding_usage'] = ResolversParentTypes['mutation_createEmbedding_usage']> = ResolversObject<{
  prompt_tokens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total_tokens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type createSearch_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['createSearch_200_response'] = ResolversParentTypes['createSearch_200_response']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['mutation_createSearch_data_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createSearch_data_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createSearch_data_items'] = ResolversParentTypes['mutation_createSearch_data_items']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export type mutation_createFileResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createFile'] = ResolversParentTypes['mutation_createFile']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type deleteFile_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['deleteFile_200_response'] = ResolversParentTypes['deleteFile_200_response']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type createAnswer_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['createAnswer_200_response'] = ResolversParentTypes['createAnswer_200_response']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  search_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  answers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  selected_documents?: Resolver<Maybe<Array<Maybe<ResolversTypes['mutation_createAnswer_selected_documents_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createAnswer_selected_documents_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createAnswer_selected_documents_items'] = ResolversParentTypes['mutation_createAnswer_selected_documents_items']> = ResolversObject<{
  document?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export type createClassification_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['createClassification_200_response'] = ResolversParentTypes['createClassification_200_response']> = ResolversObject<{
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  search_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selected_examples?: Resolver<Maybe<Array<Maybe<ResolversTypes['mutation_createClassification_selected_examples_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createClassification_selected_examples_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createClassification_selected_examples_items'] = ResolversParentTypes['mutation_createClassification_selected_examples_items']> = ResolversObject<{
  document?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createFineTuneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createFineTune'] = ResolversParentTypes['mutation_createFineTune']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fine_tuned_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hyperparams?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  training_files?: Resolver<Array<Maybe<ResolversTypes['mutation_createFineTune_training_files_items']>>, ParentType, ContextType>;
  validation_files?: Resolver<Array<Maybe<ResolversTypes['mutation_createFineTune_validation_files_items']>>, ParentType, ContextType>;
  result_files?: Resolver<Array<Maybe<ResolversTypes['mutation_createFineTune_result_files_items']>>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['mutation_createFineTune_events_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createFineTune_training_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createFineTune_training_files_items'] = ResolversParentTypes['mutation_createFineTune_training_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createFineTune_validation_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createFineTune_validation_files_items'] = ResolversParentTypes['mutation_createFineTune_validation_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createFineTune_result_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createFineTune_result_files_items'] = ResolversParentTypes['mutation_createFineTune_result_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createFineTune_events_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createFineTune_events_items'] = ResolversParentTypes['mutation_createFineTune_events_items']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface mutationInput_createFineTune_input_suffixScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['mutationInput_createFineTune_input_suffix'], any> {
  name: 'mutationInput_createFineTune_input_suffix';
}

export type mutation_cancelFineTuneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_cancelFineTune'] = ResolversParentTypes['mutation_cancelFineTune']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fine_tuned_model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hyperparams?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  training_files?: Resolver<Array<Maybe<ResolversTypes['mutation_cancelFineTune_training_files_items']>>, ParentType, ContextType>;
  validation_files?: Resolver<Array<Maybe<ResolversTypes['mutation_cancelFineTune_validation_files_items']>>, ParentType, ContextType>;
  result_files?: Resolver<Array<Maybe<ResolversTypes['mutation_cancelFineTune_result_files_items']>>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['mutation_cancelFineTune_events_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_cancelFineTune_training_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_cancelFineTune_training_files_items'] = ResolversParentTypes['mutation_cancelFineTune_training_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_cancelFineTune_validation_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_cancelFineTune_validation_files_items'] = ResolversParentTypes['mutation_cancelFineTune_validation_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_cancelFineTune_result_files_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_cancelFineTune_result_files_items'] = ResolversParentTypes['mutation_cancelFineTune_result_files_items']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status_details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_cancelFineTune_events_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_cancelFineTune_events_items'] = ResolversParentTypes['mutation_cancelFineTune_events_items']> = ResolversObject<{
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type deleteModel_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['deleteModel_200_response'] = ResolversParentTypes['deleteModel_200_response']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface URLScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type createModeration_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['createModeration_200_response'] = ResolversParentTypes['createModeration_200_response']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  results?: Resolver<Array<Maybe<ResolversTypes['mutation_createModeration_results_items']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createModeration_results_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createModeration_results_items'] = ResolversParentTypes['mutation_createModeration_results_items']> = ResolversObject<{
  flagged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  categories?: Resolver<ResolversTypes['mutation_createModeration_results_items_categories'], ParentType, ContextType>;
  category_scores?: Resolver<ResolversTypes['mutation_createModeration_results_items_category_scores'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createModeration_results_items_categoriesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createModeration_results_items_categories'] = ResolversParentTypes['mutation_createModeration_results_items_categories']> = ResolversObject<{
  hate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hate_threatening?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  self_harm?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sexual?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sexual_minors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  violence?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  violence_graphic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_createModeration_results_items_category_scoresResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_createModeration_results_items_category_scores'] = ResolversParentTypes['mutation_createModeration_results_items_category_scores']> = ResolversObject<{
  hate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  hate_threatening?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  self_harm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sexual?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sexual_minors?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  violence?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  violence_graphic?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  listEngines_200_response?: listEngines_200_responseResolvers<ContextType>;
  Engine?: EngineResolvers<ContextType>;
  query_retrieveEngine?: query_retrieveEngineResolvers<ContextType>;
  listFiles_200_response?: listFiles_200_responseResolvers<ContextType>;
  OpenAIFile?: OpenAIFileResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  query_retrieveFile?: query_retrieveFileResolvers<ContextType>;
  listFineTunes_200_response?: listFineTunes_200_responseResolvers<ContextType>;
  FineTune?: FineTuneResolvers<ContextType>;
  query_listFineTunes_data_items_training_files_items?: query_listFineTunes_data_items_training_files_itemsResolvers<ContextType>;
  query_listFineTunes_data_items_validation_files_items?: query_listFineTunes_data_items_validation_files_itemsResolvers<ContextType>;
  query_listFineTunes_data_items_result_files_items?: query_listFineTunes_data_items_result_files_itemsResolvers<ContextType>;
  FineTuneEvent?: FineTuneEventResolvers<ContextType>;
  query_retrieveFineTune?: query_retrieveFineTuneResolvers<ContextType>;
  query_retrieveFineTune_training_files_items?: query_retrieveFineTune_training_files_itemsResolvers<ContextType>;
  query_retrieveFineTune_validation_files_items?: query_retrieveFineTune_validation_files_itemsResolvers<ContextType>;
  query_retrieveFineTune_result_files_items?: query_retrieveFineTune_result_files_itemsResolvers<ContextType>;
  query_retrieveFineTune_events_items?: query_retrieveFineTune_events_itemsResolvers<ContextType>;
  listFineTuneEvents_200_response?: listFineTuneEvents_200_responseResolvers<ContextType>;
  query_listFineTuneEvents_data_items?: query_listFineTuneEvents_data_itemsResolvers<ContextType>;
  listModels_200_response?: listModels_200_responseResolvers<ContextType>;
  Model?: ModelResolvers<ContextType>;
  query_retrieveModel?: query_retrieveModelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  createEdit_200_response?: createEdit_200_responseResolvers<ContextType>;
  mutation_createEdit_choices_items?: mutation_createEdit_choices_itemsResolvers<ContextType>;
  mutation_createEdit_choices_items_logprobs?: mutation_createEdit_choices_items_logprobsResolvers<ContextType>;
  mutation_createEdit_usage?: mutation_createEdit_usageResolvers<ContextType>;
  PositiveInt?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  createImage_200_response?: createImage_200_responseResolvers<ContextType>;
  mutation_createImage_data_items?: mutation_createImage_data_itemsResolvers<ContextType>;
  mutationInput_createImage_input_size?: mutationInput_createImage_input_sizeResolvers;
  createImageEdit_200_response?: createImageEdit_200_responseResolvers<ContextType>;
  mutation_createImageEdit_data_items?: mutation_createImageEdit_data_itemsResolvers<ContextType>;
  File?: GraphQLScalarType;
  mutationInput_createImageEdit_input_size?: mutationInput_createImageEdit_input_sizeResolvers;
  createImageVariation_200_response?: createImageVariation_200_responseResolvers<ContextType>;
  mutation_createImageVariation_data_items?: mutation_createImageVariation_data_itemsResolvers<ContextType>;
  mutationInput_createImageVariation_input_size?: mutationInput_createImageVariation_input_sizeResolvers;
  createEmbedding_200_response?: createEmbedding_200_responseResolvers<ContextType>;
  mutation_createEmbedding_data_items?: mutation_createEmbedding_data_itemsResolvers<ContextType>;
  mutation_createEmbedding_usage?: mutation_createEmbedding_usageResolvers<ContextType>;
  createSearch_200_response?: createSearch_200_responseResolvers<ContextType>;
  mutation_createSearch_data_items?: mutation_createSearch_data_itemsResolvers<ContextType>;
  NonEmptyString?: GraphQLScalarType;
  mutation_createFile?: mutation_createFileResolvers<ContextType>;
  deleteFile_200_response?: deleteFile_200_responseResolvers<ContextType>;
  createAnswer_200_response?: createAnswer_200_responseResolvers<ContextType>;
  mutation_createAnswer_selected_documents_items?: mutation_createAnswer_selected_documents_itemsResolvers<ContextType>;
  NonNegativeInt?: GraphQLScalarType;
  createClassification_200_response?: createClassification_200_responseResolvers<ContextType>;
  mutation_createClassification_selected_examples_items?: mutation_createClassification_selected_examples_itemsResolvers<ContextType>;
  mutation_createFineTune?: mutation_createFineTuneResolvers<ContextType>;
  mutation_createFineTune_training_files_items?: mutation_createFineTune_training_files_itemsResolvers<ContextType>;
  mutation_createFineTune_validation_files_items?: mutation_createFineTune_validation_files_itemsResolvers<ContextType>;
  mutation_createFineTune_result_files_items?: mutation_createFineTune_result_files_itemsResolvers<ContextType>;
  mutation_createFineTune_events_items?: mutation_createFineTune_events_itemsResolvers<ContextType>;
  mutationInput_createFineTune_input_suffix?: GraphQLScalarType;
  mutation_cancelFineTune?: mutation_cancelFineTuneResolvers<ContextType>;
  mutation_cancelFineTune_training_files_items?: mutation_cancelFineTune_training_files_itemsResolvers<ContextType>;
  mutation_cancelFineTune_validation_files_items?: mutation_cancelFineTune_validation_files_itemsResolvers<ContextType>;
  mutation_cancelFineTune_result_files_items?: mutation_cancelFineTune_result_files_itemsResolvers<ContextType>;
  mutation_cancelFineTune_events_items?: mutation_cancelFineTune_events_itemsResolvers<ContextType>;
  deleteModel_200_response?: deleteModel_200_responseResolvers<ContextType>;
  URL?: GraphQLScalarType;
  createModeration_200_response?: createModeration_200_responseResolvers<ContextType>;
  mutation_createModeration_results_items?: mutation_createModeration_results_itemsResolvers<ContextType>;
  mutation_createModeration_results_items_categories?: mutation_createModeration_results_items_categoriesResolvers<ContextType>;
  mutation_createModeration_results_items_category_scores?: mutation_createModeration_results_items_category_scoresResolvers<ContextType>;
  ObjMap?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  resolveRootField?: resolveRootFieldDirectiveResolver<any, any, ContextType>;
  enum?: enumDirectiveResolver<any, any, ContextType>;
  oneOf?: oneOfDirectiveResolver<any, any, ContextType>;
  length?: lengthDirectiveResolver<any, any, ContextType>;
  globalOptions?: globalOptionsDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = OpenAiTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/OpenAI/schemaWithAnnotations.graphql":
      return import("./sources/OpenAI/schemaWithAnnotations.graphql") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const openAiTransforms = [];
const additionalTypeDefs = [] as any[];
const openAiHandler = new OpenapiHandler({
              name: "OpenAI",
              config: {"source":"./openai-spec3.json","baseUrl":"https://api.openai.com","operationHeaders":{"Authorization":"Bearer {env.OPENAI_TOKEN}"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("OpenAI"),
              logger: logger.child("OpenAI"),
              importFn,
            });
sources[0] = {
          name: 'OpenAI',
          handler: openAiHandler,
          transforms: openAiTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));