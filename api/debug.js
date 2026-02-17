export default async function handler(req, res) {
  const dbUrl = process.env.DATABASE_URL;
  
  res.status(200).json({ 
    hasEnvVar: !!dbUrl,
    envVarLength: dbUrl ? dbUrl.length : 0,
    envVarStart: dbUrl ? dbUrl.substring(0, 20) + '...' : 'none'
  });
}
