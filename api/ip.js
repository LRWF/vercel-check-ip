export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '0.0.0.0';

  const jsonResponse = {
    ip: ip
  };

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(jsonResponse);
}
