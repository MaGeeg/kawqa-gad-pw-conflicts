import { HttpStatusCode } from '@_src_api/enums/api-status-code.enum';
import { APIResponse, expect, test } from '@playwright/test';
import { Endpoints } from '@_src_api/enums/api-endpoints.enum';

test.describe('HEAD/articles endpoint tests', async () => {
    
  test('Returns 200 OK for all articles', async ({ request }) => {
    // When
    const response: APIResponse = await request.head(Endpoints.ARTICLES);
    // Then
    expect(response.status()).toBe(HttpStatusCode.Ok);
  });
});
