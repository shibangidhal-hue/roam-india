const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  const header = req.get('authorization') || '';
  const [scheme, token] = header.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'Sign in to access this resource.' });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });
    req.user = { id: Number(payload.sub), email: payload.email };
    if (!Number.isSafeInteger(req.user.id) || req.user.id <= 0) {
      return res.status(401).json({ error: 'Invalid authentication token.' });
    }
    next();
  } catch {
    return res.status(401).json({ error: 'Your session is invalid or expired. Please sign in again.' });
  }
}

module.exports = { requireAuth };
