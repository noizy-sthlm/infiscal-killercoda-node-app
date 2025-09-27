# Infisical Secret Management Tutorial

A Node.js app demonstrating secret management with Infisical - from vulnerable to secure.

## What This Tutorial Shows

- **Before**: Secrets committed in plaintext (vulnerable)
- **After**: Secrets managed securely with Infisical

## Tutorial Steps

1. **Start with secrets in code** - Show the problem
2. **Set up Infisical Secret Scanning** - Detect existing secrets
3. **Move secrets to Infisical** - Secure storage
4. **Integrate with app** - Fetch secrets at runtime
5. **Set up protection** - Prevent future leaks

## Getting Started

```bash
npm install
npm start
```

App runs on `http://localhost:3000` and returns `{ok: true, secret: THE_SECRET}`
