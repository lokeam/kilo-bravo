import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { oauthHandlers } from './tests/mocks/handlers/oauthHandlers';
import { afterEach } from 'vitest';

const server = setupServer(...oauthHandlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
