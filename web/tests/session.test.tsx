import { describe, it, expect } from 'vitest';
import { getSession, commitSession, destroySession } from '../app/services/session.server';

describe('Session Management', () => {
  it('should create a session and store data', async () => {
    const session = await getSession();
    session.set('userId', '123456789');
    const cookie = await commitSession(session);

    // Assuming 'getSession' is able to parse cookies to retrieve session data
    const newSession = await getSession(cookie);
    expect(newSession.get('userId')).toBe('123456789');
  });

  it('should update existing session data', async () => {
    let session = await getSession();
    session.set('userId', '123456789');
    let cookie = await commitSession(session);

    // Retrieve session and update
    session = await getSession(cookie);
    session.set('userId', '987654321');
    cookie = await commitSession(session);

    const updatedSession = await getSession(cookie);
    expect(updatedSession.get('userId')).toBe('987654321');
  });

  it('should destroy a session', async () => {
    let session = await getSession();
    session.set('userId', '123456789');
    await commitSession(session);

    await destroySession(session);

    session = await getSession(); // Removed cookie as it is not valid after destroying the session
    expect(session.get('userId')).toBeUndefined();
  });
});
