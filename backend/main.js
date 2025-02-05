import { connection } from "./application/database.js";
import { app } from "./application/web.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connection();
  console.info(`Server running at http://localhost:${PORT}`);
});
