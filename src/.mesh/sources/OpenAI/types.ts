// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace OpenAiTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

  export type QuerySdk = {
      /** Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability. **/
  listEngines: InContextSdkMethod<Query['listEngines'], {}, MeshContext>,
  /** Retrieves a model instance, providing basic information about it such as the owner and availability. **/
  retrieveEngine: InContextSdkMethod<Query['retrieveEngine'], QueryretrieveEngineArgs, MeshContext>,
  /** Returns a list of files that belong to the user's organization. **/
  listFiles: InContextSdkMethod<Query['listFiles'], {}, MeshContext>,
  /** Returns information about a specific file. **/
  retrieveFile: InContextSdkMethod<Query['retrieveFile'], QueryretrieveFileArgs, MeshContext>,
  /** Returns the contents of the specified file **/
  downloadFile: InContextSdkMethod<Query['downloadFile'], QuerydownloadFileArgs, MeshContext>,
  /** List your organization's fine-tuning jobs
 **/
  listFineTunes: InContextSdkMethod<Query['listFineTunes'], {}, MeshContext>,
  /** Gets info about the fine-tune job.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)
 **/
  retrieveFineTune: InContextSdkMethod<Query['retrieveFineTune'], QueryretrieveFineTuneArgs, MeshContext>,
  /** Get fine-grained status updates for a fine-tune job.
 **/
  listFineTuneEvents: InContextSdkMethod<Query['listFineTuneEvents'], QuerylistFineTuneEventsArgs, MeshContext>,
  /** Lists the currently available models, and provides basic information about each one such as the owner and availability. **/
  listModels: InContextSdkMethod<Query['listModels'], {}, MeshContext>,
  /** Retrieves a model instance, providing basic information about the model such as the owner and permissioning. **/
  retrieveModel: InContextSdkMethod<Query['retrieveModel'], QueryretrieveModelArgs, MeshContext>
  };

  export type MutationSdk = {
      /** Creates a new edit for the provided input, instruction, and parameters **/
  createEdit: InContextSdkMethod<Mutation['createEdit'], MutationcreateEditArgs, MeshContext>,
  /** Creates an image given a prompt. **/
  createImage: InContextSdkMethod<Mutation['createImage'], MutationcreateImageArgs, MeshContext>,
  /** Creates an edited or extended image given an original image and a prompt. **/
  createImageEdit: InContextSdkMethod<Mutation['createImageEdit'], MutationcreateImageEditArgs, MeshContext>,
  /** Creates a variation of a given image. **/
  createImageVariation: InContextSdkMethod<Mutation['createImageVariation'], MutationcreateImageVariationArgs, MeshContext>,
  /** Creates an embedding vector representing the input text. **/
  createEmbedding: InContextSdkMethod<Mutation['createEmbedding'], MutationcreateEmbeddingArgs, MeshContext>,
  /** The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
 **/
  createSearch: InContextSdkMethod<Mutation['createSearch'], MutationcreateSearchArgs, MeshContext>,
  /** Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.
 **/
  createFile: InContextSdkMethod<Mutation['createFile'], MutationcreateFileArgs, MeshContext>,
  /** Delete a file. **/
  deleteFile: InContextSdkMethod<Mutation['deleteFile'], MutationdeleteFileArgs, MeshContext>,
  /** Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
 **/
  createAnswer: InContextSdkMethod<Mutation['createAnswer'], MutationcreateAnswerArgs, MeshContext>,
  /** Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.
 **/
  createClassification: InContextSdkMethod<Mutation['createClassification'], MutationcreateClassificationArgs, MeshContext>,
  /** Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)
 **/
  createFineTune: InContextSdkMethod<Mutation['createFineTune'], MutationcreateFineTuneArgs, MeshContext>,
  /** Immediately cancel a fine-tune job.
 **/
  cancelFineTune: InContextSdkMethod<Mutation['cancelFineTune'], MutationcancelFineTuneArgs, MeshContext>,
  /** Delete a fine-tuned model. You must have the Owner role in your organization. **/
  deleteModel: InContextSdkMethod<Mutation['deleteModel'], MutationdeleteModelArgs, MeshContext>,
  /** Classifies if text violates OpenAI's Content Policy **/
  createModeration: InContextSdkMethod<Mutation['createModeration'], MutationcreateModerationArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["OpenAI"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
