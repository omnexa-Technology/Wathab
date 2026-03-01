# ================================
# Stage 1: Dependencies & build
# ================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (use same lockfile as host for reproducible builds)
COPY package.json package-lock.json* ./

# Copy env for build
COPY .env.production .env.production

RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ================================
# Stage 2: Production runtime
# ================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone output (server.js + minimal node_modules)
COPY --from=builder /app/.next/standalone ./
# Static assets (not included in standalone)
COPY --from=builder /app/.next/static ./.next/static
# Public assets
COPY --from=builder /app/public ./public
# Set permissions
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

# Optional: cap memory for small droplets (e.g. 768 MB); uncomment if needed
# ENV NODE_OPTIONS="--max-old-space-size=768"

CMD ["node", "server.js"]
