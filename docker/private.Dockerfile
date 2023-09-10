FROM oven/bun
WORKDIR /app
COPY . .
RUN bun install
WORKDIR /app/packages/private
CMD ["bun", "dev"]
EXPOSE 8081