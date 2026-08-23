const levels = {
  debug: 0,
  info: 1,
  error: 2
};

const currentLevel = process.env.LOG_LEVEL || "info";

function log(level, message, context = {}) {
  if (levels[level] < levels[currentLevel]) {
    return;
  }

  const timestamp = new Date().toISOString();
  console.log(
    JSON.stringify({
      timestamp,
      level,
      message,
      ...context
    })
  );
}

module.exports = {
  debug: (message, context) => log("debug", message, context),
  info: (message, context) => log("info", message, context),
  error: (message, context) => log("error", message, context)
};
