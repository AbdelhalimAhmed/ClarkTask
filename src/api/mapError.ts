export class ResponseError extends Error {
  constructor(message: string, public response: Response) {
    super(message);
  }
}

function mapError(error: unknown | undefined): undefined | string {
  if (!error) {
    return undefined;
  }
  if (error instanceof ResponseError) {
    return error.response?.statusText || error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Unknown error';
}

export default mapError;
