FROM oven/bun
WORKDIR /app
COPY . .
RUN bun install
WORKDIR /app/packages/public
CMD ["bun", "dev"]
EXPOSE 8082