const assert = require("node:assert/strict");
const test = require("node:test");
const { createApp } = require("../app");

async function request(app, path, options = {}) {
  const server = app.listen(0);
  const address = server.address();
  const response = await fetch(`http://127.0.0.1:${address.port}${path}`, {
    headers: { "content-type": "application/json" },
    ...options,
  });
  const body = response.status === 204 ? null : await response.json();
  await new Promise((resolve) => server.close(resolve));
  return { response, body };
}

test("GET /health returns an OK status", async () => {
  const { response, body } = await request(createApp(), "/health");

  assert.equal(response.status, 200);
  assert.deepEqual(body, { status: "ok" });
});

// Add tests for POST, PATCH, DELETE, and invalid requests described in README.md.
