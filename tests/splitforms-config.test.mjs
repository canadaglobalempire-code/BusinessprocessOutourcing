import assert from "node:assert/strict";
import test from "node:test";
import { splitformsAccessKey } from "../lib/splitforms-config.mjs";

test("SplitForms credentials must come from the environment", () => {
  assert.equal(splitformsAccessKey({}), null);
  assert.equal(splitformsAccessKey({ SPLITFORMS_ACCESS_KEY: "  " }), null);
  assert.equal(
    splitformsAccessKey({ SPLITFORMS_ACCESS_KEY: " configured-key " }),
    "configured-key",
  );
});
