export function splitformsAccessKey(env = process.env) {
  return env.SPLITFORMS_ACCESS_KEY?.trim() || null;
}
