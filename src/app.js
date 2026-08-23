const { greeting } = require("./config");
const logger = require("./logger");

logger.debug("Application starting", { config: "GREETING" });
logger.info("Application started", { greeting });

try {
  throw new Error("Example internal failure");
} catch (error) {
  logger.error("Application operation failed", {
    cause: error.message
  });
}

console.log(greeting);
